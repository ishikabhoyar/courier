import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact <span className="text-red-600">Us</span></h1>
        
        <div className="text-center text-gray-600 mb-10">
          <p>
            Whether you need Quotation of Small parcel, Heavy shipment or you are looking 
            to open an account in Translink Express. You can Simply Fill the Form and our 
            Team will Contact you.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-sm border p-6">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                  <input 
                    type="text" 
                    id="firstName"
                    placeholder="Please Provide First Name" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    placeholder="Enter Provide Last Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">Contact Number*</label>
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center px-3 bg-gray-50 border border-gray-300 border-r-0 rounded-l-md">
                      <span className="flex items-center">
                        <img src="/india-flag.png" alt="India flag" className="h-4 w-5 mr-1" />
                        <span className="text-gray-500">+</span>
                      </span>
                    </div>
                    <input 
                      type="tel" 
                      id="contactNumber" 
                      placeholder="Enter Mobile No"
                      className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-1 focus:ring-blue-500" 
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter Email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" 
                  />
                </div>
              </div>
              
              <div className="flex items-center">
                <input type="checkbox" id="whatsapp" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                <label htmlFor="whatsapp" className="ml-2 block text-sm text-gray-700">Same on WhatsApp</label>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="pickupOrigin" className="block text-sm font-medium text-gray-700 mb-1">Pickup Origin*</label>
                  <input 
                    type="text" 
                    id="pickupOrigin" 
                    placeholder="Enter Pickup Location"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" 
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Destination*</label>
                  <input 
                    type="text" 
                    id="destination" 
                    placeholder="Enter Destination"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" 
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  placeholder="Enter Your Message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full md:w-auto px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
          
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="bg-yellow-400 rounded-lg overflow-hidden h-full relative">
              {/* Instead of using the image as a background and overlaying text, 
                  we'll use a solid yellow background matching the design */}
              <div className="flex flex-col justify-between h-full p-8 text-white">
                <div>
                  <h2 className="text-4xl font-bold mb-2 text-white">
                    Fast Delivery, <br />
                    Great Rates Ship <br />
                    With Translink <br />
                    Express Today!
                  </h2>
                  
                  <div className="mt-8">
                    <a 
                      href="tel:+919833897003" 
                      className="inline-block bg-red-600 text-white px-6 py-3 font-bold rounded-md"
                    >
                      Call Now : +91 9833897003
                    </a>
                  </div>
                </div>
                
                <div className="mt-8 flex items-center space-x-8">
                  <div className="flex items-center">
                    <div className="bg-white p-2 rounded-lg mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">FREE</p>
                      <p className="text-sm font-bold">PICKUP</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-white p-2 rounded-lg mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">DOORSTEP</p>
                      <p className="text-sm font-bold">PACKING</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Add a person image at the bottom right */}
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
                <img 
                  src="/contact.png" 
                  alt="Translink Express Delivery Services" 
                  className="object-contain object-bottom"
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Contact