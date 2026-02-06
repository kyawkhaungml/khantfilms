import React, { useEffect } from 'react';
import './Portfolio.css';
import img1 from '../images/Jewelry/DSC00553.jpg';
import img2 from '../images/Jewelry/DSC00562.jpg';
import img3 from '../images/Jewelry/DSC00567.jpg';
import img4 from '../images/Jewelry/DSC00778-2.JPG';
import img5 from '../images/Jewelry/DSC08172.JPG';
import img6 from '../images/Jewelry/DSC08181.JPG';
import img7 from '../images/Jewelry/DSC08192.JPG';

const Jewelry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [img1, img2, img3, img4, img5, img6, img7];

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
