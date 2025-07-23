import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-red-600 tracking-wide">
                THROUGH EXPRESS
              </h1>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-600 px-3 py-2 font-medium transition-colors duration-200">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-red-600 px-3 py-2 font-medium transition-colors duration-200">
              About Us
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-red-600 px-3 py-2 font-medium transition-colors duration-200">
              Services
            </Link>
            <Link to="/blogs" className="text-gray-700 hover:text-red-600 px-3 py-2 font-medium transition-colors duration-200">
              Blogs
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-600 px-3 py-2 font-medium transition-colors duration-200">
              Contact Us
            </Link>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200">
              Track Order
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                /* Icon when menu is open */
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md font-medium">
              Home
            </Link>
            <Link to="/about" className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md font-medium">
              About Us
            </Link>
            <Link to="/services" className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md font-medium">
              Services
            </Link>
            <Link to="/blogs" className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md font-medium">
              Blogs
            </Link>
            <Link to="/contact" className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md font-medium">
              Contact Us
            </Link>
            <button className="w-full text-left bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition-colors duration-200">
              Track Order
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
