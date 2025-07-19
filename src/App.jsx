import React from 'react'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Whatsapp from './components/Whatsapp'
import Choose from './components/Choose'
import FAQ from './components/FAQ'
import Testimonial from './components/Testimonial'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* About Us Section */}
      <AboutUs />
      
      {/* WhatsApp Section */}
      <Whatsapp />
      
      {/* Why Choose Us Section */}
      <Choose />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Testimonial Section */}
      <Testimonial />
      
      {/* Contact Section */}
      <Contact />

      {/* Blogs Section */}
      <Blogs />

      {/* WhatsApp Section */}
      <Whatsapp />

      {/* Footer Section */}
      <Footer />

      
    </div>
  )
}

export default App