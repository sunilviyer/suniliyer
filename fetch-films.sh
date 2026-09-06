#!/bin/sh
# Downloads the 8 film assets (too big to bundle) into public/assets/film/
set -e
B=https://suniliyer.higgsfield.app/assets/film
mkdir -p public/assets/film
for f in evolution-scrub.mp4 evolution-scrub-mobile.mp4 evolution-light-scrub.mp4 evolution-light-scrub-mobile.mp4 evolution-poster.jpg evolution-poster-mobile.jpg evolution-light-poster.jpg evolution-light-poster-mobile.jpg; do
  echo "$f"; curl -fsSo "public/assets/film/$f" "$B/$f"
done
echo done
