import React from 'react'

const Whatsapp = () => {
  return (
    <div className="bg-red-600 py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-3xl lg:text-4xl font-light mb-2">
              <span className="font-bold">Yey!</span> Now You Can
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-4">
              WHATSAPP
            </h3>
            <p className="text-lg lg:text-xl font-light">
              TO BOOK YOUR PARCEL
            </p>
          </div>

          {/* Right Content - WhatsApp Number */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="text-center lg:text-right mb-4">
              <p className="text-white text-lg font-medium">
                WhatsApp Number
              </p>
            </div>
            <div className="bg-white px-8 py-4 rounded-lg shadow-lg">
              <p className="text-red-600 text-2xl lg:text-3xl font-bold">
                +91 8828216229
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whatsapp