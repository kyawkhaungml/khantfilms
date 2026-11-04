#!/usr/bin/env bash
# Re-encode full-size videos from media-originals/ into web-sized H.264 MP4s
# (long edge 1920px, CRF 23, faststart) plus a JPEG poster frame, into
# client/public/images/videos/.
#
# Usage: bash scripts/encode-videos.sh
# Requires ffmpeg with libx264.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/media-originals"
DST="$ROOT/client/public/images/videos"
mkdir -p "$DST"

SCALE="scale='if(gt(iw,ih),1920,-2)':'if(gt(iw,ih),-2,1920)'"

# "source path|output name|audio" — audio=mute strips the track (hero autoplays muted)
VIDEOS=(
  "khantvideo/khantvideo2.mp4|hero|mute"
  "Videos/Timeline 1(2).mp4|timeline-1c|keep"
  "Videos/Timeline 1 (1).mp4|timeline-1b|keep"
  "Videos/Timeline 1.mp4|timeline-1a|keep"
  "Videos/Timeline 2 (1).mp4|timeline-2b|keep"
  "Videos/Timeline 2.mp4|timeline-2a|keep"
  "Videos/bap.mp4|bap|keep"
  "Videos/rolex.mp4|rolex|keep"
  "Videos/cartier.mp4|cartier|keep"
)

for entry in "${VIDEOS[@]}"; do
  IFS='|' read -r rel name audio <<< "$entry"
  in="$SRC/$rel"
  out="$DST/$name.mp4"
  poster="$DST/$name.jpg"
  if [[ "$audio" == "mute" ]]; then aopts=(-an); else aopts=(-c:a aac -b:a 128k -ac 2); fi
  echo "== $rel -> videos/$name.mp4"
  ffmpeg -y -hide_banner -loglevel error -stats -i "$in" \
    -vf "$SCALE,format=yuv420p" \
    -c:v libx264 -preset medium -crf 26 -profile:v high -level 4.1 \
    "${aopts[@]}" -movflags +faststart "$out"
  # poster: frame at 0.5s, same scaling, JPEG quality ~80
  ffmpeg -y -hide_banner -loglevel error -ss 0.5 -i "$in" \
    -vf "$SCALE" -frames:v 1 -q:v 4 "$poster"
  printf "   %s -> %s (poster %s)\n" "$(du -h "$in" | cut -f1)" "$(du -h "$out" | cut -f1)" "$(du -h "$poster" | cut -f1)"
done

echo; echo "done:"; du -sh "$DST"; ls -lh "$DST"
