#!/usr/bin/env python3
"""Resize full-size photos from media-originals/ into web-sized JPEG + WebP in client/public/images/.

Usage:  python3 scripts/resize-images.py
Requires Pillow (python3 -m pip install pillow).

Output filenames are the original stem, lower-case extension, with spaces and
parentheses replaced by dashes (e.g. "IMG_0104 (2).PNG" -> "IMG_0104-2.jpg" + ".webp").
"""
import json
import re
import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "media-originals"
DST = ROOT / "client" / "public" / "images"
# width/height of every output, keyed by "/images/<path>.jpg", so <img> tags can
# reserve space before the file arrives (no layout jump)
MANIFEST = ROOT / "client" / "src" / "imageManifest.json"

MAX_EDGE = 1800      # long edge in px; plenty for a 2-column grid on retina
JPEG_QUALITY = 80
WEBP_QUALITY = 80

# collection folder -> output folder (same names, kept for the JSX arrays)
COLLECTIONS = ["Jewelry", "On_Figure", "Watches"]
# single files at the root of images/
SINGLES = ["khantfilms.jpg"]

IMG_EXT = {".jpg", ".jpeg", ".png"}
# originals kept on disk but not shipped (not referenced by any page)
SKIP = {"Watches/khant.jpg"}


def clean_name(stem: str) -> str:
    stem = re.sub(r"\s*\((\d+)\)", r"-\1", stem)  # "IMG (2)" -> "IMG-2"
    return re.sub(r"\s+", "-", stem)


def process(src: Path, dst_dir: Path) -> tuple[str, int, int, int, int]:
    dst_dir.mkdir(parents=True, exist_ok=True)
    stem = clean_name(src.stem)
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im)
        im = im.convert("RGB")
        im.thumbnail((MAX_EDGE, MAX_EDGE), Image.LANCZOS)
        jpg = dst_dir / f"{stem}.jpg"
        webp = dst_dir / f"{stem}.webp"
        im.save(jpg, "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)
        im.save(webp, "WEBP", quality=WEBP_QUALITY, method=6)
        return stem, jpg.stat().st_size, webp.stat().st_size, im.width, im.height


def main() -> int:
    if not SRC.is_dir():
        print(f"missing {SRC}", file=sys.stderr)
        return 1
    total_in = total_jpg = total_webp = 0
    jobs: list[tuple[Path, Path]] = []
    for coll in COLLECTIONS:
        for f in sorted((SRC / coll).iterdir()):
            if f.suffix.lower() in IMG_EXT and not f.name.startswith(".") and f"{coll}/{f.name}" not in SKIP:
                jobs.append((f, DST / coll))
    for name in SINGLES:
        jobs.append((SRC / name, DST))

    manifest: dict[str, dict[str, int]] = {}
    for src, dst_dir in jobs:
        stem, sj, sw, w, h = process(src, dst_dir)
        manifest[f"/images/{(dst_dir / stem).relative_to(DST)}.jpg"] = {"width": w, "height": h}
        total_in += src.stat().st_size
        total_jpg += sj
        total_webp += sw
        print(f"{src.relative_to(SRC)} -> {dst_dir.relative_to(DST.parent)}/{stem}.jpg "
              f"({src.stat().st_size/1e6:.1f} MB -> jpg {sj/1e3:.0f} KB, webp {sw/1e3:.0f} KB)")
    MANIFEST.write_text(json.dumps(manifest, indent=2, sort_keys=True) + "\n")
    print(f"wrote {MANIFEST.relative_to(ROOT)}")
    print(f"\n{len(jobs)} images: {total_in/1e6:.0f} MB -> jpg {total_jpg/1e6:.1f} MB, webp {total_webp/1e6:.1f} MB")
    return 0


if __name__ == "__main__":
    sys.exit(main())
