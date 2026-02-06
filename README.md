# Frank Castillo Photography Website - Replica

A full-stack replica of the Frank Castillo Photography website built with React, Node.js, Express, and modern web technologies.

## 🎨 Features

- **Modern React Frontend**: Built with React 18, React Router, and Framer Motion for smooth animations
- **Node.js Backend**: Express server with REST API endpoints
- **Responsive Design**: Fully responsive across all devices
- **Portfolio Galleries**: Dedicated pages for Jewelry, Watches, On-Figure, and Videography
- **Blog Section**: Dynamic blog with post listings
- **Contact Form**: Functional contact form with backend integration
- **Newsletter Signup**: Email subscription functionality
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Clean Architecture**: Organized component structure and styling

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library
- **Vite** - Build tool and dev server
- **CSS3** - Modern styling with CSS variables

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **CORS** - Cross-origin resource sharing
- **Body Parser** - Request body parsing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
frank-castillo-photography/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   ├── Header.jsx
│   │   │   ├── Header.css
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── pages/         # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Home.css
│   │   │   ├── Jewelry.jsx
│   │   │   ├── Watches.jsx
│   │   │   ├── OnFigure.jsx
│   │   │   ├── Videography.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Contact.css
│   │   │   ├── Blog.jsx
│   │   │   ├── Blog.css
│   │   │   └── Portfolio.css
│   │   ├── styles/        # Global styles
│   │   │   └── global.css
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/                # Backend Node.js application
│   ├── server.js         # Express server
│   ├── package.json
│   └── .env.example      # Environment variables template
└── package.json          # Root package.json

```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frank-castillo-photography
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```
   
   Or install manually:
   ```bash
   # Install root dependencies
   npm install
   
   # Install client dependencies
   cd client && npm install
   
   # Install server dependencies
   cd ../server && npm install
   ```

3. **Set up environment variables**
   ```bash
   cd server
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Running the Application

#### Development Mode (Both Frontend and Backend)

```bash
# From the root directory
npm run dev
```

This will start:
- Frontend dev server on `http://localhost:3000`
- Backend API server on `http://localhost:5000`

#### Run Frontend Only

```bash
npm run client
```

#### Run Backend Only

```bash
npm run server
```

#### Production Build

```bash
# Build the frontend
npm run build

# Start the production server
npm start
```

## 📡 API Endpoints

### Health Check
- **GET** `/api/health` - Server health check

### Contact Form
- **POST** `/api/contact`
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "123-456-7890",
    "message": "Your message here"
  }
  ```

### Newsletter
- **POST** `/api/newsletter`
  ```json
  {
    "email": "user@example.com"
  }
  ```

### Portfolio
- **GET** `/api/portfolio/:category` - Get portfolio items by category

### Blog
- **GET** `/api/blog` - Get all blog posts

## 🎨 Design & Styling

The website uses a sophisticated design system with:

- **Typography**: Cormorant Garamond (headers) and Montserrat (body)
- **Color Scheme**: Clean black and white with subtle grays
- **Animations**: Framer Motion for page transitions and scroll animations
- **Responsive Breakpoints**: Mobile-first approach with breakpoints at 768px and 1024px

## 📱 Responsive Design

The website is fully responsive with:
- Desktop (1400px+ optimal)
- Tablet (768px - 1024px)
- Mobile (< 768px)

## 🔧 Customization

### Updating Content

1. **Portfolio Images**: Edit the `images` arrays in respective page components
2. **About Section**: Modify content in `Home.jsx`
3. **Blog Posts**: Update the `posts` array in `Blog.jsx` or fetch from API
4. **Contact Info**: Edit in `Contact.jsx`

### Styling

- Global styles: `client/src/styles/global.css`
- Component styles: Co-located with components
- CSS variables: Defined in `:root` in `global.css`

### API Integration

To connect to a real backend:

1. Update API endpoints in components
2. Add authentication if needed
3. Implement database models
4. Set up email service for contact form

## 🚀 Deployment

### Frontend (Vercel/Netlify)

```bash
cd client
npm run build
# Deploy the dist/ folder
```

### Backend (Heroku/Railway/Render)

```bash
cd server
# Push to hosting platform
```

### Environment Variables

Make sure to set:
- `PORT` for the server
- `NODE_ENV` for production
- Any API keys or database URLs

## 📝 Features to Add

Potential enhancements:
- [ ] Admin dashboard for content management
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Image upload functionality
- [ ] Blog CMS integration
- [ ] Email notifications
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Image lazy loading
- [ ] Shopping cart for prints
- [ ] Client login area

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill

# Kill process on port 5000
lsof -ti:5000 | xargs kill
```

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

This is a replica project for educational purposes.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

For questions or support, please open an issue in the repository.

---

Built with ❤️ using React and Node.js
