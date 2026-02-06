import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import video1 from '../images/Videos/Timeline 1(2).mp4';
import video2 from '../images/Videos/Timeline 1 (1).mp4';
import video3 from '../images/Videos/Timeline 1.mp4';
import video4 from '../images/Videos/Timeline 2 (1).mp4';
import video5 from '../images/Videos/Timeline 2.mp4';
import video6 from '../images/Videos/bap.mp4';
import video7 from '../images/Videos/rolex.mp4';
import video8 from '../images/Videos/cartier.mp4';

const Videography = () => {
  const [playing, setPlaying] = useState({});

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
        <div className="gallery-item video-item">
          <video id="video-1" width="100%" onClick={() => handleVideoClick('1')} onEnded={() => handleVideoEnd('1')}>
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!playing['1'] && (
            <button className="video-play-btn" onClick={() => handlePlayClick('1')}>
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}
        </div>
        <div className="gallery-item video-item">
          <video id="video-2" width="100%" onClick={() => handleVideoClick('2')} onEnded={() => handleVideoEnd('2')}>
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!playing['2'] && (
            <button className="video-play-btn" onClick={() => handlePlayClick('2')}>
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}
        </div>
        <div className="gallery-item video-item">
          <video id="video-3" width="100%" onClick={() => handleVideoClick('3')} onEnded={() => handleVideoEnd('3')}>
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!playing['3'] && (
            <button className="video-play-btn" onClick={() => handlePlayClick('3')}>
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}
        </div>
        <div className="gallery-item video-item">
          <video id="video-4" width="100%" onClick={() => handleVideoClick('4')} onEnded={() => handleVideoEnd('4')}>
            <source src={video4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!playing['4'] && (
            <button className="video-play-btn" onClick={() => handlePlayClick('4')}>
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}
        </div>
        <div className="gallery-item video-item">
          <video id="video-5" width="100%" onClick={() => handleVideoClick('5')} onEnded={() => handleVideoEnd('5')}>
            <source src={video5} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!playing['5'] && (
            <button className="video-play-btn" onClick={() => handlePlayClick('5')}>
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}
        </div>
        <div className="gallery-item video-item">
          <video id="video-6" width="100%" onClick={() => handleVideoClick('6')} onEnded={() => handleVideoEnd('6')}>
            <source src={video6} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!playing['6'] && (
            <button className="video-play-btn" onClick={() => handlePlayClick('6')}>
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}
        </div>
        <div className="gallery-item video-item">
          <video id="video-7" width="100%" onClick={() => handleVideoClick('7')} onEnded={() => handleVideoEnd('7')}>
            <source src={video7} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!playing['7'] && (
            <button className="video-play-btn" onClick={() => handlePlayClick('7')}>
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}
        </div>
        <div className="gallery-item video-item">
          <video id="video-8" width="100%" onClick={() => handleVideoClick('8')} onEnded={() => handleVideoEnd('8')}>
            <source src={video8} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!playing['8'] && (
            <button className="video-play-btn" onClick={() => handlePlayClick('8')}>
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}
        </div>
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
