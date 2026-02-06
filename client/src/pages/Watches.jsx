import React, { useEffect } from 'react';
import './Portfolio.css';
import img1 from '../images/Watches/C3346E64-254F-42E7-8084-4C9DF44A694F.jpeg';
import img2 from '../images/Watches/DSC01289.JPG';
import img3 from '../images/Watches/DSC01299.JPG';
import img4 from '../images/Watches/DSC01362.jpg';
import img5 from '../images/Watches/DSC01371.jpg';
import img6 from '../images/Watches/DSC01421.JPG';
import img7 from '../images/Watches/DSC01427.JPG';
import img8 from '../images/Watches/DSC01428.JPG';
import img9 from '../images/Watches/DSC01984.jpg';
import img10 from '../images/Watches/DSC01992 (1).jpg';
import img11 from '../images/Watches/DSC01992.jpg';
import img12 from '../images/Watches/DSC02113.jpg';
import img13 from '../images/Watches/DSC02154.jpg';
import img14 from '../images/Watches/DSC02250.jpg';
import img15 from '../images/Watches/DSC02265.jpg';
import img16 from '../images/Watches/DSC06264.jpg';
import img17 from '../images/Watches/DSC06662.JPG';
import img18 from '../images/Watches/DSC06686.JPG';
import img19 from '../images/Watches/DSC06688.JPG';
import img20 from '../images/Watches/DSC07651-2.JPG';
import img21 from '../images/Watches/DSC07678.JPG';
import img22 from '../images/Watches/DSC07688.JPG';
import img23 from '../images/Watches/DSC07714.JPG';
import img24 from '../images/Watches/DSC07897.JPG';
import img25 from '../images/Watches/DSC09002-2.JPG';
import img26 from '../images/Watches/DSC09022-2.jpg';
import img27 from '../images/Watches/DSC09293.JPG';
import img28 from '../images/Watches/DSC09297.JPG';
import img29 from '../images/Watches/DSC09301.JPG';

const Watches = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29];

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
