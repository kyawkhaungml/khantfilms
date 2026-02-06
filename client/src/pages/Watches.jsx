import React, { useEffect } from 'react';
import './Portfolio.css';

const Watches = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    '/images/Watches/C3346E64-254F-42E7-8084-4C9DF44A694F.jpeg',
    '/images/Watches/DSC01289.JPG',
    '/images/Watches/DSC01299.JPG',
    '/images/Watches/DSC01362.jpg',
    '/images/Watches/DSC01371.jpg',
    '/images/Watches/DSC01421.JPG',
    '/images/Watches/DSC01427.JPG',
    '/images/Watches/DSC01428.JPG',
    '/images/Watches/DSC01984.jpg',
    '/images/Watches/DSC01992 (1).jpg',
    '/images/Watches/DSC01992.jpg',
    '/images/Watches/DSC02113.jpg',
    '/images/Watches/DSC02154.jpg',
    '/images/Watches/DSC02250.jpg',
    '/images/Watches/DSC02265.jpg',
    '/images/Watches/DSC06264.jpg',
    '/images/Watches/DSC06662.JPG',
    '/images/Watches/DSC06686.JPG',
    '/images/Watches/DSC06688.JPG',
    '/images/Watches/DSC07651-2.JPG',
    '/images/Watches/DSC07678.JPG',
    '/images/Watches/DSC07688.JPG',
    '/images/Watches/DSC07714.JPG',
    '/images/Watches/DSC07897.JPG',
    '/images/Watches/DSC09002-2.JPG',
    '/images/Watches/DSC09022-2.jpg',
    '/images/Watches/DSC09293.JPG',
    '/images/Watches/DSC09297.JPG',
    '/images/Watches/DSC09301.JPG'
  ];

  return (
    <div className="portfolio-page">
      <div className="portfolio-hero">
        <h1>Watch Photography</h1>
        <p>Showcasing the precision and elegance of luxury timepieces</p>
      </div>

      <div className="portfolio-gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" style={{ animationDelay: `${index * 0.1}s` }}>
            <img src={image} alt={`Watch ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watches;
