/**
 * Autónézés app közös tárhelye.
 * A pipák, jegyzetek, saját pontok és státuszok az "AppState" lapra kerülnek (kulcs | érték | módosítva).
 *
 * Telepítés: a Sheetben Bővítmények → Apps Script, ide bemásolni, majd
 * Telepítés → Új telepítés → Típus: Webalkalmazás, Végrehajtás: saját magam, Hozzáférés: Bárki.
 * A kapott .../exec URL kerül az app data.js fájljába (window.SYNC_URL).
 */
const SHEET_NAME = 'AppState';

function sheet_() {
  const ss = SpreadsheetApp.getActive();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.getRange(1, 1, 1, 3).setValues([['key', 'value', 'updated']]);
    sh.getRange('A:B').setNumberFormat('@'); // sima szöveg, hogy a "=" kezdetű jegyzet ne legyen képlet
    sh.setFrozenRows(1);
  }
  return sh;
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

function readAll_(sh) {
  const rows = sh.getDataRange().getValues();
  const data = {}, idx = {};
  for (let i = 1; i < rows.length; i++) {
    const k = String(rows[i][0] || '');
    if (!k) continue;
    data[k] = String(rows[i][1] ?? '');
    idx[k] = i + 1;
  }
  return { data, idx };
}

// Olvasás: az összes kulcs
function doGet() {
  const { data } = readAll_(sheet_());
  return json_({ ok: true, data: data, ts: Date.now() });
}

// Írás: { set: { kulcs: érték, ... } } — üres érték = törlés
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    const set = body.set || {};
    const sh = sheet_();
    const { idx } = readAll_(sh);
    const now = new Date();
    Object.keys(set).forEach(k => {
      if (!/^[\w:\-áéíóöőúüűÁÉÍÓÖŐÚÜŰ]{1,80}$/.test(k)) return;
      const v = String(set[k] ?? '').slice(0, 5000);
      if (idx[k]) sh.getRange(idx[k], 2, 1, 2).setValues([[v, now]]);
      else { sh.appendRow([k, v, now]); idx[k] = sh.getLastRow(); }
    });
    return json_({ ok: true, ts: Date.now() });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}
