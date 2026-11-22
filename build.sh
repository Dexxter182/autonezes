#!/bin/sh
# src.html + data.js + route.js -> index.html (egy fájl, előre kirajzolt tartalommal, így JavaScript nélkül is olvasható)
set -e
cd "$(dirname "$0")"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
TMP="$(mktemp -d)"
python3 - "$TMP/bundle.html" <<'PY'
import sys
t = open('src.html', encoding='utf-8').read()
import base64, glob, os, json
photos = {os.path.basename(f)[:-4]: 'data:image/jpeg;base64,' + base64.b64encode(open(f, 'rb').read()).decode() for f in sorted(glob.glob('img/*.jpg'))}
t = t.replace('<script src="data.js"></script>', '<script>window.PHOTOS = ' + json.dumps(photos) + ';</script>\n<script src="data.js"></script>')
for f in ('data.js', 'route.js'):
    tag = '<script src="%s"></script>' % f
    assert tag in t, tag
    t = t.replace(tag, '<script>\n' + open(f, encoding='utf-8').read() + '\n</script>')
open(sys.argv[1], 'w', encoding='utf-8').write(t)
PY
"$CHROME" --headless=new --disable-gpu --no-first-run --user-data-dir="$TMP/profile" \
  --virtual-time-budget=5000 --dump-dom "file://$TMP/bundle.html?prerender" 2>/dev/null > "$TMP/out.html"
python3 - "$TMP/out.html" index.html <<'PY'
import sys, re
t = open(sys.argv[1], encoding='utf-8').read()
t = re.sub(r'<html([^>]*?) class="js"', r'<html\1', t, count=1)   # a JS-jelzőt induláskor a script teszi vissza
assert 'data-car="23651328"' in t, 'a prerender nem futott le'
if not t.lstrip().lower().startswith('<!doctype'):
    t = '<!doctype html>\n' + t
open(sys.argv[2], 'w', encoding='utf-8').write(t)
PY
rm -rf "$TMP"
echo "index.html kész"
