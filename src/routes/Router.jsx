import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import App as the home page
import App from '../App';

// Import pages
import AboutUs from '../pages/AboutUs';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Services from '../pages/Services';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<App />} />
        
        {/* Define route for AboutUs page */}
        <Route path="/about" element={<AboutUs />} />
        
        {/* Other pages */}
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        
        {/* Redirect all other undefined routes to your home/main page */}
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
