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

## Mentés

A pipák, jegyzetek és saját pontok a böngésző `localStorage`-ában mentődnek, eszközönként külön. A Táblázat fülön a „Jegyzetek megosztása” gombbal szövegként átküldhetők.

## Hosting

GitHub Pages: Settings → Pages → Source: `main` branch, `/ (root)`. Privát repóból ehhez fizetős GitHub-csomag kell, és az oldal ekkor is nyilvános URL-en érhető el.
