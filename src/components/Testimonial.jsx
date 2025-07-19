import React from 'react'

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Kaylynn Workman",
      text: "Choosing Insurance for five years has been advantageous. Their personalized home insurance addresses my necessities precisely. Their customer service stands out – always swift."
    },
    {
      id: 2,
      name: "Phillip Levin",
      text: "I've been insured with Insurance for over five years now, and I couldn't be happier. They provided me with a customized home insurance policy that perfectly suits my needs."
    },
    {
      id: 3,
      name: "Zaire Rhiel Madsen",
      text: "Selecting Insurance as my provider for the past five years has undoubtedly proven to be a wise decision. Their meticulously crafted personalized home insurance."
    }
  ]

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-gray-600 text-lg font-medium mb-4">Testimonial-</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            What Our Customer Says?
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Quote Icon */}
              <div className="mb-6">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                {testimonial.text}
              </p>

              {/* Customer Name */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-2">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial