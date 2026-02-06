import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Jewelry from './pages/Jewelry';
import Watches from './pages/Watches';
import OnFigure from './pages/OnFigure';
import Videography from './pages/Videography';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jewelry-photographer" element={<Jewelry />} />
            <Route path="/watch-photographer" element={<Watches />} />
            <Route path="/on-figure" element={<OnFigure />} />
            <Route path="/jewelry-videographer-watch-videographer" element={<Videography />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
