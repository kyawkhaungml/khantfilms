import React, { useEffect } from 'react';
import './Portfolio.css';
import img1 from '../images/On_Figure/DSC00399.JPG';
import img2 from '../images/On_Figure/DSC00414.JPG';
import img3 from '../images/On_Figure/DSC00438.JPG';
import img4 from '../images/On_Figure/DSC09846.JPG';
import img5 from '../images/On_Figure/DSC09854.JPG';
import img6 from '../images/On_Figure/DSC09855.JPG';
import img7 from '../images/On_Figure/DSC09868.JPG';
import img8 from '../images/On_Figure/DSC09873.JPG';
import img9 from '../images/On_Figure/IMG_0104 (2).PNG';
import img10 from '../images/On_Figure/IMG_0106 (1).PNG';

const OnFigure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [img9,img1, img2, img3, img4, img5, img6, img7, img8, img10];

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
