import React from 'react'

const Hero = () => {
  return (
    <div className="bg-red-600 min-h-screen">
      {/* Header Section */}
      
      
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