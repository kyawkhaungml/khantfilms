import React, { useEffect, useState } from 'react';
import './Portfolio.css';

const Videography = () => {
  const [playing, setPlaying] = useState({});

  const videos = [
    '/images/Videos/Timeline 1(2).mp4',
    '/images/Videos/Timeline 1 (1).mp4',
    '/images/Videos/Timeline 1.mp4',
    '/images/Videos/Timeline 2 (1).mp4',
    '/images/Videos/Timeline 2.mp4',
    '/images/Videos/bap.mp4',
    '/images/Videos/rolex.mp4',
    '/images/Videos/cartier.mp4'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePlayClick = (videoId) => {
    const videoElement = document.getElementById(`video-${videoId}`);
    if (videoElement) {
      videoElement.play();
      setPlaying(prev => ({ ...prev, [videoId]: true }));
    }
  };

  const handleVideoClick = (videoId) => {
    const videoElement = document.getElementById(`video-${videoId}`);
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
        setPlaying(prev => ({ ...prev, [videoId]: true }));
      } else {
        videoElement.pause();
        setPlaying(prev => ({ ...prev, [videoId]: false }));
      }
    }
  };

  const handleVideoEnd = (videoId) => {
    const videoElement = document.getElementById(`video-${videoId}`);
    if (videoElement) {
      videoElement.currentTime = 0;
      setPlaying(prev => ({ ...prev, [videoId]: false }));
    }
  };

  return (
    <div className="portfolio-page">
      <div className="portfolio-hero">
        <h1>Jewelry & Watch Videography</h1>
        <p>Dynamic video content that brings luxury pieces to life</p>
      </div>

      <div className="portfolio-gallery">
        {videos.map((video, index) => (
          <div key={index} className="gallery-item video-item">
            <video 
              id={`video-${index + 1}`} 
              width="100%" 
              height="auto"
              onClick={() => handleVideoClick(`${index + 1}`)} 
              onEnded={() => handleVideoEnd(`${index + 1}`)}
              playsInline
              webkitPlaysinline="true"
              preload="auto"
              controls
              style={{ display: 'block', width: '100%', height: 'auto' }}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!playing[`${index + 1}`] && (
              <button className="video-play-btn" onClick={() => handlePlayClick(`${index + 1}`)}>
                <svg viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="video-description">
        <div className="container">
          <p>
            Our videography services capture the mesmerizing beauty and intricate details of jewelry 
            and watches through dynamic motion. From subtle rotations to dramatic reveals, we create 
            compelling video content that showcases your pieces in their best light.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Videography;
