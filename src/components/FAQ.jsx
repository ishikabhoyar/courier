import React, { useState } from 'react'

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(3) // Set question 4 as initially open to match the design

  const faqs = [
    {
      id: 1,
      question: "Why is my package delayed?",
      answer: "Package delays can occur due to various factors including weather conditions, high volume during peak seasons, customs clearance for international shipments, or unexpected transportation issues. We monitor all shipments closely and will notify you of any significant delays."
    },
    {
      id: 2,
      question: "What do I do if tracking page doesn't show the expected date of arrival?",
      answer: "If the tracking page doesn't show an expected delivery date, it could mean the package is still in transit or there's a delay in updating the system. Please contact our customer service team with your tracking number, and we'll provide you with the most current information about your shipment."
    },
    {
      id: 3,
      question: "How can I get the contact number of my delivery partner?",
      answer: "For security and privacy reasons, we don't directly share delivery partner contact details. However, our customer service team can facilitate communication between you and the delivery partner when necessary. You can also use our tracking system to get real-time updates about your delivery."
    },
    {
      id: 4,
      question: "What should I do if I am not available at the time of delivery?",
      answer: "We prefer delivering your shipment to you in person. However, if you are not available to receive the same, please direct our delivery partner to the alternative person when they call you. You can also share your neighbour's details with us by logging into our tracking page."
    },
    {
      id: 5,
      question: "My shipment has been returned/cancelled. What should I do?",
      answer: "If your shipment has been returned or cancelled, please contact our customer service team immediately. We'll investigate the reason for the return/cancellation and help you with re-scheduling the delivery or processing a refund if applicable. Make sure to have your tracking number ready when you contact us."
    }
  ]

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black py-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
          Frequently Asked Questions?
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-l-4 border-gray-600 hover:border-red-600 transition-colors duration-300">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full text-left p-6 text-white hover:bg-gray-800/50 transition-colors duration-300 focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg lg:text-xl font-medium pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-2xl text-gray-400 flex-shrink-0">
                    {openFAQ === faq.id ? '−' : '+'}
                  </span>
                </div>
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-6 pb-6">
                  <div className="border-l-2 border-red-600 pl-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ