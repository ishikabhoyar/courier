import React from 'react'

const Hero = () => {
  return (
    <div className="bg-red-600 min-h-screen">
      {/* Header Section */}
      <div className="bg-white px-8 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-red-600 tracking-wide">
              THROUGH EXPRESS
            </h1>
            <p className="text-lg text-gray-600 mt-1">
              International Courier Services
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Red Hero Section */}
      <div className="bg-red-600 flex-1 min-h-[calc(100vh-120px)] flex items-center justify-center">
        {/* You can add hero content here like main heading, CTA buttons, etc. */}
        <div className="text-center text-white px-8">
          {/* This space can be used for hero content like main tagline, buttons */}
        </div>
      </div>
    </div>
  )
}

export default Hero