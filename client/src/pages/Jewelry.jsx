import React, { useEffect } from 'react';
import './Portfolio.css';

const Jewelry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    '/images/Jewelry/DSC00553.jpg',
    '/images/Jewelry/DSC00562.jpg',
    '/images/Jewelry/DSC00567.jpg',
    '/images/Jewelry/DSC00778-2.JPG',
    '/images/Jewelry/DSC08172.JPG',
    '/images/Jewelry/DSC08181.JPG',
    '/images/Jewelry/DSC08192.JPG'
  ];

  return (
    <div className="portfolio-page">
      <div className="portfolio-hero">
        <h1>Jewelry Photography</h1>
        <p>Capturing the intricate beauty and craftsmanship of fine jewelry</p>
      </div>

      <div className="portfolio-gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" style={{ animationDelay: `${index * 0.1}s` }}>
            <img src={image} alt={`Jewelry ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jewelry;
