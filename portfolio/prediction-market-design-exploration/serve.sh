#!/bin/bash
cd "$(dirname "$0")"
echo "Gallery: http://localhost:3333/gallery.html"
python3 -m http.server 3333 &
sleep 1
open http://localhost:3333/gallery.html 2>/dev/null || xdg-open http://localhost:3333/gallery.html 2>/dev/null || start http://localhost:3333/gallery.html
wait
