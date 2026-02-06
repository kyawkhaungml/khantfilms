import React, { useEffect } from 'react';
import './Portfolio.css';

const OnFigure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    '/images/On_Figure/IMG_0104 (2).PNG',
    '/images/On_Figure/DSC00399.JPG',
    '/images/On_Figure/DSC00414.JPG',
    '/images/On_Figure/DSC00438.JPG',
    '/images/On_Figure/DSC09846.JPG',
    '/images/On_Figure/DSC09854.JPG',
    '/images/On_Figure/DSC09855.JPG',
    '/images/On_Figure/DSC09868.JPG',
    '/images/On_Figure/DSC09873.JPG',
    '/images/On_Figure/IMG_0106 (1).PNG'
  ];

  return (
    <div className="portfolio-page">
      <div className="portfolio-hero">
        <h1>On Figure Photography</h1>
        <p>Jewelry and watches styled on models to showcase wearability and scale</p>
      </div>

      <div className="portfolio-gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" style={{ animationDelay: `${index * 0.1}s` }}>
            <img src={image} alt={`On Figure ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnFigure;
