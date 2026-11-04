import React from 'react';
import manifest from '../imageManifest.json';

// Web-sized gallery photo: WebP with JPEG fallback, lazy-loaded, with the
// intrinsic width/height from imageManifest.json so the layout doesn't jump
// while the file downloads. `src` is the "/images/.../name.jpg" path.
const GalleryImage = ({ src, alt, ...rest }) => {
  const dims = manifest[src] || {};
  const webp = src.replace(/\.jpe?g$/i, '.webp');
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img
        src={src}
        alt={alt}
        width={dims.width}
        height={dims.height}
        loading="lazy"
        decoding="async"
        {...rest}
      />
    </picture>
  );
};

export default GalleryImage;
