# Autónézés 2026-11-23

Telefonra szabott, statikus webapp a hétfői autónézéshez.

- **Út:** állomásonként lapozható nagy kártyák: cím, navigáció, hívás, „mire figyeljetek”, az ott álló autók hahu-linkkel, autónként checklist, saját pont és jegyzet. Az indulás kártyán térkép (OSM), telefonálás és „mit vigyetek” lista.
- **Lista:** az összes autó; egy autóra bökve teljes képernyős, lapozható kártya.
- **Táblázat:** a hétfői kör összehasonlítása, jegyzetek megosztása.

## Fájlok

- `src.html`: az app forrása (HTML, CSS, JS)
- `data.js`: megállók, autók, checklisták; ezt kell szerkeszteni, ha valami változik
- `route.js`: az útvonal geometriája (OSRM)
- `img/`: a hirdetések első fotója, kicsinyítve
- `build.sh`: a fentiekből előállítja az `index.html`-t (macOS, Google Chrome kell hozzá)
- `index.html`: a kész oldal, ezt szolgálja ki a GitHub Pages

Az `index.html` egyetlen fájl: az adatok és a fotók be vannak ágyazva, a tartalom előre ki van rajzolva, így JavaScript nélkül is olvasható. Szerkesztés után futtasd: `./build.sh`.

## Közös mentés

A pipák, a „Megjegyzésünk” mezők, a saját pontok és a státuszok a közös Google Sheet `AppState` lapjára mentődnek egy Apps Script webalkalmazáson keresztül. Az app 15 másodpercenként és minden visszaváltáskor frissít. Offline is lehet pipálni: az app helyben megjegyzi, és amint van net, elküldi. A fejlécben a jelző mutatja az állapotot (Közösen mentve / Mentés… / Offline).

Beállítás (egyszer):

1. A Sheetben: Bővítmények → Apps Script. A `Code.gs` tartalmát cseréld le az `apps-script/Code.gs` tartalmára, majd mentsd.
2. Telepítés → Új telepítés → típus: Webalkalmazás. Végrehajtás: saját magam. Hozzáférés: Bárki. Telepítés, majd engedélyezd a hozzáférést.
3. A kapott `https://script.google.com/macros/s/.../exec` URL kerüljön a `data.js` elejére (`window.SYNC_URL`), utána `./build.sh` és push.

Ha a `SYNC_URL` üres, az app csak a saját böngészőben ment.

## Hosting

GitHub Pages: Settings → Pages → Source: `main` branch, `/ (root)`. Privát repóból ehhez fizetős GitHub-csomag kell, és az oldal ekkor is nyilvános URL-en érhető el.
