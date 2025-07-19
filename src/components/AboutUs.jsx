import React from 'react'

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 relative overflow-hidden">
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-gray-600 text-lg font-medium">About Us-</p>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Best Logistic Delivery Service In Town.
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Ultrices ullamcorper ut tincidunt eget ut. A mattis 
              amet tempor id ultricies sit. Vivamus 
              amet, enim auctor.
            </p>
            
            <button className="bg-red-600 text-white px-8 py-3 font-semibold text-lg hover:bg-red-700 transition-colors duration-300">
              ABOUT US
            </button>
          </div>

          {/* Right Visual Elements */}
          <div className="relative flex items-center justify-center">
            {/* Main Red Circle */}
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-red-600 rounded-full relative">
              {/* Location Pin Icon - Top Right */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Package Icon - Bottom Right */}
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
            </div>
            
            {/* Dotted Circle Background */}
            <div className="absolute w-[420px] h-[420px] lg:w-[500px] lg:h-[500px] border-2 border-dotted border-gray-300 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs