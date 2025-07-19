import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          {/* Left - Company Branding */}
          <div className="mb-8 lg:mb-0">
            <h1 className="text-3xl font-bold text-red-600 tracking-wide mb-1">
              THROUGH EXPRESS
            </h1>
            <p className="text-lg text-gray-600">
              International Courier Services
            </p>
          </div>

          {/* Right - Contact Information */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="text-right">
              <p className="text-gray-600 text-sm mb-1">Support Centre 24/7:</p>
              <p className="text-gray-800 font-semibold">+91 8828216229</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600 text-sm mb-1">Get In Touch With Us</p>
              <p className="text-gray-800 font-semibold">enquiry@deliver.com</p>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="border-gray-200 mb-12" />

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Services */}
          <div>
            <h3 className="text-gray-800 font-bold text-sm mb-4 uppercase tracking-wide">
              SERVICES
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">Express Parcel</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">Warehousing</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">Part Truckload</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">Full Truckload</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">Cross Border</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">Data Intelligence</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">Software Platform</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-gray-800 font-bold text-sm mb-4 uppercase tracking-wide">
              SOLUTIONS
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">D2C Brands</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">Personal Courier</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">B2B Enterprises</a></li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-gray-800 font-bold text-sm mb-4 uppercase tracking-wide">
              PARTNERS
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">Local Delivery Franchise</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">Delivery Partner</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">Courier & Sales Franchise</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">Fleet Owner</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-800 font-bold text-sm mb-4 uppercase tracking-wide">
              COMPANY
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">Governance</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">Investor Relations</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">ODR Portal</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">Press Release</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-gray-800 font-bold text-sm mb-4 uppercase tracking-wide">
              GET IN TOUCH
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">Raise A Query</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-gray-800 font-bold text-sm mb-4 uppercase tracking-wide">
              POLICIES
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">Fraud Disclaimer</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition-colors">ONDC Disclaimer</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end">
            {/* Left - Legal Information */}
            <div className="mb-6 lg:mb-0 max-w-2xl">
              <h4 className="text-gray-800 font-semibold text-sm mb-2">
                Information Security Policy
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                Deliver Is Committed To Safeguarding The Confidentiality, Integrity And Availability Of All Physical And Electronic Information Assets Of The Organization. We Ensure That The Regulatory, Operational And Contractual Requirements Are Fulfilled.
              </p>
              <h4 className="text-gray-800 font-semibold text-sm mb-2">
                Disclaimer
              </h4>
              <p className="text-gray-500 text-xs">
                Operational Metrics Listed Are As Of March 04, 2024
              </p>
            </div>

            {/* Right - Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer