import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    pickupOrigin: '',
    destination: '',
    message: '',
    whatsappSame: false,
    acceptTerms: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black py-16 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Form */}
          <div className="relative z-10">
            {/* Header */}
            <div className="mb-8">
              <p className="text-gray-400 text-lg font-medium mb-4">Contact Us-</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                Schedule Your Effortless Delivery For Exceptional Service.
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Contact us today to experience the difference of working with a trusted courier provider.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Row - First Name & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              {/* Second Row - Contact Number & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              {/* Third Row - Pick Up Origin & Destination */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Pick Up Origin
                  </label>
                  <input
                    type="text"
                    name="pickupOrigin"
                    value={formData.pickupOrigin}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Destination
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Enter your message here..."
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="whatsappSame"
                    id="whatsappSame"
                    checked={formData.whatsappSame}
                    onChange={handleChange}
                    className="w-4 h-4 text-red-600 bg-transparent border-2 border-gray-600 rounded focus:ring-red-600 focus:ring-2"
                  />
                  <label htmlFor="whatsappSame" className="ml-3 text-white text-sm">
                    Contact Number Is Same On WhatsApp
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="w-4 h-4 text-red-600 bg-transparent border-2 border-gray-600 rounded focus:ring-red-600 focus:ring-2"
                    required
                  />
                  <label htmlFor="acceptTerms" className="ml-3 text-white text-sm">
                    I Am Accepting <span className="text-red-600">T&C</span> Of Deliver
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-red-600 text-white px-8 py-4 font-bold text-lg hover:bg-red-700 transition-colors duration-300 rounded-lg"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Right - Globe Graphic */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative">
              {/* Main Globe Circle */}
              <div className="w-80 h-80 relative">
                {/* Globe base */}
                <div className="w-full h-full rounded-full border-2 border-red-600 opacity-30"></div>
                
                {/* Dotted pattern overlay */}
                <div className="absolute inset-0 rounded-full" style={{
                  background: `radial-gradient(circle at 30% 40%, transparent 2px, rgba(220, 38, 38, 0.1) 2px, rgba(220, 38, 38, 0.1) 4px, transparent 4px),
                              radial-gradient(circle at 70% 60%, transparent 2px, rgba(220, 38, 38, 0.1) 2px, rgba(220, 38, 38, 0.1) 4px, transparent 4px)`,
                  backgroundSize: '20px 20px'
                }}>
                </div>
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                  <path d="M50 160 Q160 50 270 160" stroke="rgba(220, 38, 38, 0.3)" strokeWidth="2" fill="none" />
                  <path d="M160 50 Q270 160 160 270" stroke="rgba(220, 38, 38, 0.3)" strokeWidth="2" fill="none" />
                  <path d="M270 160 Q160 270 50 160" stroke="rgba(220, 38, 38, 0.3)" strokeWidth="2" fill="none" />
                  
                  {/* Location dots */}
                  <circle cx="80" cy="120" r="4" fill="#DC2626" />
                  <circle cx="200" cy="80" r="4" fill="#DC2626" />
                  <circle cx="240" cy="200" r="4" fill="#DC2626" />
                  <circle cx="120" cy="240" r="4" fill="#DC2626" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact