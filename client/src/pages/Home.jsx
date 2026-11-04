import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const portfolioItems = [
    {
      title: 'JEWELRY PHOTOGRAPHY',
      image: '/images/Jewelry/DSC00567.jpg',
      link: '/jewelry-photographer'
    },
    {
      title: 'ON FIGURE',
      image: 'https://images.squarespace-cdn.com/content/v1/65665c208e39eb78a4f102be/1748711977451-46F7X5IL7TEJ2EDXOD9G/770_Black-311.jpg',
      link: '/on-figure'
    },
    {
      title: 'WATCH PHOTOGRAPHY',
      image: 'https://images.squarespace-cdn.com/content/v1/65665c208e39eb78a4f102be/1ab6ee73-28fb-45ef-9541-68df91776b75/20211123_watchcault-2_2048px.jpg',
      link: '/watch-photographer'
    },
    {
      title: 'JEWELRY & WATCH VIDEOGRAPHY',
      image: 'https://images.squarespace-cdn.com/content/v1/65665c208e39eb78a4f102be/9982ff5f-37ba-4672-b2f6-04ed383679a2/ezgif.com-video-to-gif-2.gif',
      link: '/jewelry-videographer-watch-videographer'
    }
  ];



  return (
    <div className="home">
      <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
      <video 
        width="100%" 
        height="auto" 
        autoPlay 
        muted 
        loop 
        playsInline  // ✅ Correct React camelCase (not playsinline)
        webkit-playsinline="true"  // ✅ For older iOS versions
        preload="auto"
        poster="/images/videos/hero.jpg"
        style={{ display: 'block', width: '100%', height: 'auto' }}
      >
        <source src="/images/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
      </motion.section>

      <section className="portfolios-section animate-on-scroll">
        <div className="container">
          <h2 className="section-title">Discover My Portfolios:</h2>
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <Link 
                to={item.link} 
                key={index}
                className="portfolio-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="portfolio-image-wrapper">
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-overlay">
                    <span className="view-portfolio">View Portfolio</span>
                  </div>
                </div>
                <h3>{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
