import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const posts = [
    {
      title: 'Watch Photography Tutorial',
      excerpt: 'Learn the techniques and lighting setups we use to capture stunning watch photography.',
      image: 'https://images.squarespace-cdn.com/content/v1/65665c208e39eb78a4f102be/65f5192f-45bb-41e7-a985-f67391b2aeb7/20220211_watchcult-16.jpg',
      date: 'March 15, 2024'
    },
    {
      title: 'Jewelry Photography Tutorial',
      excerpt: 'Discover the art of capturing the brilliance and detail of fine jewelry pieces.',
      image: 'https://images.squarespace-cdn.com/content/v1/65665c208e39eb78a4f102be/46673f91-0cfa-46c7-90dc-1901dc103348/Jewelry+_Photographer_New_York-69.jpg',
      date: 'February 28, 2024'
    },
    {
      title: 'Focus Stacking Tutorial',
      excerpt: 'Master the technique of focus stacking to achieve incredible depth of field in your product photography.',
      image: 'https://images.squarespace-cdn.com/content/v1/65665c208e39eb78a4f102be/ed9b5f29-c041-407e-8fcb-4069991e3b48/20230729_Bulova-1_2048px.jpg',
      date: 'January 20, 2024'
    }
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <h1>Our Blog</h1>
        <p>Tips, tutorials, and insights from our photography journey</p>
      </div>

      <div className="blog-posts">
        <div className="container">
          <div className="posts-grid">
            {posts.map((post, index) => (
              <article key={index} className="post-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="post-content">
                  <span className="post-date">{post.date}</span>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <Link to="#" className="read-more">Read More →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
