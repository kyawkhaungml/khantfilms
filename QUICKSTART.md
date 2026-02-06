# Quick Start Guide

## 🚀 Get Up and Running in 3 Steps

### Step 1: Install Dependencies

```bash
cd frank-castillo-photography
npm run install-all
```

This will install all dependencies for both frontend and backend.

### Step 2: Start Development Servers

```bash
npm run dev
```

This will start both:
- React frontend at `http://localhost:3000`
- Node.js backend at `http://localhost:5000`

### Step 3: Open Your Browser

Navigate to `http://localhost:3000` and you should see the website!

---

## 📋 Available Commands

```bash
# Install all dependencies
npm run install-all

# Run both frontend and backend
npm run dev

# Run only frontend
npm run client

# Run only backend
npm run server

# Build for production
npm run build

# Start production server
npm start
```

---

## 🎯 What You'll See

### Pages
- **Home** (`/`) - Main landing page with portfolios and about section
- **Jewelry** (`/jewelry-photographer`) - Jewelry photography portfolio
- **Watches** (`/watch-photographer`) - Watch photography portfolio
- **On Figure** (`/on-figure`) - On-figure photography portfolio
- **Videography** (`/jewelry-videographer-watch-videographer`) - Video portfolio
- **Contact** (`/contact-us`) - Contact form
- **Blog** (`/blog`) - Blog posts

### Features
- Smooth animations and transitions
- Responsive mobile design
- Working contact form
- Newsletter subscription
- Portfolio galleries
- Blog section

---

## 🔧 Customization

### Change Colors
Edit `client/src/styles/global.css`:
```css
:root {
  --primary-bg: #ffffff;
  --text-primary: #222222;
  --text-secondary: #666666;
}
```

### Change Fonts
Edit `client/index.html` to import different Google Fonts, then update:
```css
:root {
  --header-font: 'Your Font', serif;
  --body-font: 'Your Font', sans-serif;
}
```

### Add Content
- Portfolio images: Edit arrays in `client/src/pages/*.jsx`
- About text: Edit `client/src/pages/Home.jsx`
- Blog posts: Edit `client/src/pages/Blog.jsx`

---

## 📱 Mobile Testing

The site is fully responsive. Test on:
- Desktop (1400px+)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

---

## ❓ Troubleshooting

### Port Already in Use?
```bash
# Kill the process
lsof -ti:3000 | xargs kill
lsof -ti:5000 | xargs kill
```

### Dependencies Issues?
```bash
# Clean install
rm -rf node_modules package-lock.json
rm -rf client/node_modules client/package-lock.json
rm -rf server/node_modules server/package-lock.json
npm run install-all
```

### Still Having Issues?
Check the full README.md for detailed documentation.

---

## 🎉 You're Ready!

Your photography portfolio website is now running. Start customizing and make it your own!
