import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  
  // In a real application, you would:
  // 1. Validate the data
  // 2. Store it in a database
  // 3. Send an email notification
  
  console.log('Contact form submission:', { name, email, phone, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for contacting us! We will get back to you soon.' 
  });
});

// Newsletter subscription endpoint
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  
  // In a real application, you would:
  // 1. Validate the email
  // 2. Add to your email marketing service (e.g., Mailchimp, SendGrid)
  // 3. Store in database
  
  console.log('Newsletter subscription:', email);
  
  res.json({ 
    success: true, 
    message: 'Thank you for subscribing!' 
  });
});

// Portfolio data endpoint
app.get('/api/portfolio/:category', (req, res) => {
  const { category } = req.params;
  
  // In a real application, this would fetch from a database
  const portfolioData = {
    jewelry: [
      {
        id: 1,
        title: 'Diamond Ring Collection',
        image: 'https://images.squarespace-cdn.com/content/v1/65665c208e39eb78a4f102be/d5db1c1a-eaa9-4135-ac77-6c60945ff8ac/20200922_Davidor-3-2-2_2048px.jpg',
        description: 'Exquisite diamond jewelry photography'
      }
    ],
    watches: [
      {
        id: 1,
        title: 'Luxury Watch Collection',
        image: 'https://images.squarespace-cdn.com/content/v1/65665c208e39eb78a4f102be/1ab6ee73-28fb-45ef-9541-68df91776b75/20211123_watchcault-2_2048px.jpg',
        description: 'Premium timepiece photography'
      }
    ]
  };
  
  res.json(portfolioData[category] || []);
});

// Blog posts endpoint
app.get('/api/blog', (req, res) => {
  // In a real application, this would fetch from a database
  const blogPosts = [
    {
      id: 1,
      title: 'Watch Photography Tutorial',
      excerpt: 'Learn the techniques and lighting setups we use to capture stunning watch photography.',
      content: 'Full blog post content here...',
      image: 'https://images.squarespace-cdn.com/content/v1/65665c208e39eb78a4f102be/65f5192f-45bb-41e7-a985-f67391b2aeb7/20220211_watchcult-16.jpg',
      date: '2024-03-15',
      author: 'Frank Castillo'
    },
    {
      id: 2,
      title: 'Jewelry Photography Tutorial',
      excerpt: 'Discover the art of capturing the brilliance and detail of fine jewelry pieces.',
      content: 'Full blog post content here...',
      image: 'https://images.squarespace-cdn.com/content/v1/65665c208e39eb78a4f102be/46673f91-0cfa-46c7-90dc-1901dc103348/Jewelry+_Photographer_New_York-69.jpg',
      date: '2024-02-28',
      author: 'Frank Castillo'
    },
    {
      id: 3,
      title: 'Focus Stacking Tutorial',
      excerpt: 'Master the technique of focus stacking to achieve incredible depth of field.',
      content: 'Full blog post content here...',
      image: 'https://images.squarespace-cdn.com/content/v1/65665c208e39eb78a4f102be/ed9b5f29-c041-407e-8fcb-4069991e3b48/20230729_Bulova-1_2048px.jpg',
      date: '2024-01-20',
      author: 'Frank Castillo'
    }
  ];
  
  res.json(blogPosts);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
