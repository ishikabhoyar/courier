import React from 'react'

const Choose = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-pink-100 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <p className="text-gray-600 text-lg font-medium mb-4">Why Choose Us-</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8">
              We Provide Timely And Cost-Effective Service!
            </h2>
          </div>
          
          {/* Right Content */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Location Pin Icon */}
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <button className="mt-8 bg-red-600 text-white px-8 py-3 font-semibold text-lg hover:bg-red-700 transition-colors duration-300">
                CONTACT NOW
              </button>
            </div>
          </div>
        </div>

        {/* Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Deliveries on Schedule</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our logistics services are meticulously designed to ensure that your shipments We prioritize your schedule, ensuring that your shipments reach their destination
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Budget-Friendly Solutions</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Cost-effectiveness is at the core of our service philosophy. Benefit from our competitive rates and transparent pricing structures that help you optimize your logistics expenses
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Reliability You Can Trust</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              When you choose us, you choose reliability. Our commitment to excellence ensures shipments with precision and care is unwavering. Rest easy knowing that your goods are in safe hands
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Package Icon */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Delivery For Any Special Occasion
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Cost-effectiveness is at the core of our service philosophy. Benefit from our competitive rates and transparent pricing structures that help you optimize your logistics expenses
            </p>
            <button className="bg-red-600 text-white px-8 py-3 font-semibold text-lg hover:bg-red-700 transition-colors duration-300">
              CONTACT NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Choose
