import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      author: "Translink Express",
      date: "July 22, 2025",
      title: "How to Pack Fragile Items for International Shipping",
      excerpt: "Learn the best practices for packaging delicate items to ensure they arrive safely at their destination, no matter how far they need to travel.",
      image: "/blog1.jpg",
      category: "Packing Tips"
    },
    {
      id: 2,
      author: "Translink Express", 
      date: "July 15, 2025",
      title: "Understanding International Shipping Regulations",
      excerpt: "Navigate the complex world of international shipping laws, customs requirements, and documentation needed for smooth global deliveries.",
      image: "/blog2.jpg",
      category: "International Shipping"
    },
    {
      id: 3,
      author: "Translink Express",
      date: "July 10, 2025",
      title: "Cost-Effective Strategies for Business Shipping", 
      excerpt: "Discover how businesses can optimize their shipping operations to reduce costs while maintaining reliability and customer satisfaction.",
      image: "/blog3.jpg",
      category: "Business Solutions"
    },
    {
      id: 4,
      author: "Translink Express",
      date: "July 5, 2025",
      title: "The Environmental Impact of Courier Services",
      excerpt: "Exploring sustainable practices in the courier industry and how Translink Express is working to reduce our carbon footprint.",
      image: "/blog4.jpg",
      category: "Sustainability"
    },
    {
      id: 5,
      author: "Translink Express",
      date: "June 28, 2025",
      title: "Tracking Technology: The Future of Package Delivery",
      excerpt: "How advanced tracking systems are revolutionizing the courier industry and improving customer experience through real-time updates.",
      image: "/blog5.jpg",
      category: "Technology"
    },
    {
      id: 6,
      author: "Translink Express",
      date: "June 20, 2025",
      title: "Same-Day Delivery: Meeting Modern Consumer Expectations",
      excerpt: "The rise of same-day delivery services and how courier companies are adapting to meet increasing demands for speed and convenience.",
      image: "/blog6.jpg",
      category: "Delivery Services"
    }
  ]

  const categories = [
    "All Posts",
    "Packing Tips",
    "International Shipping",
    "Business Solutions",
    "Sustainability",
    "Technology",
    "Delivery Services"
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-100 to-indigo-100 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Blog</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Insights, tips, and news from the world of courier services and logistics
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
              <h3 className="font-bold text-xl mb-4 text-gray-800">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button 
                      className="text-gray-700 hover:text-red-600 transition-colors w-full text-left py-1"
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <h3 className="font-bold text-xl mb-4 text-gray-800">Recent Posts</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 3).map(post => (
                    <li key={post.id} className="border-b pb-3 last:border-0">
                      <a href="#" className="text-sm font-medium text-gray-700 hover:text-red-600">
                        {post.title}
                      </a>
                      <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Blog Posts */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border">
                  {/* Blog Image */}
                  <div className="w-full h-52 bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                      <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    
                    {/* Category Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="p-6">
                    {/* Date & Author */}
                    <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>By {post.author}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-red-600 transition-colors">
                      <a href="#">{post.title}</a>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    {/* Read More Button */}
                    <a 
                      href="#" 
                      className="inline-block text-red-600 font-bold text-sm hover:text-red-700 transition-colors duration-300"
                    >
                      Read More →
                    </a>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="inline-flex rounded-md shadow">
                <a href="#" className="py-2 px-4 border border-gray-300 bg-white rounded-l-md text-gray-700 hover:bg-gray-50">
                  Previous
                </a>
                <a href="#" className="py-2 px-4 border border-gray-300 bg-white text-red-600 font-medium">
                  1
                </a>
                <a href="#" className="py-2 px-4 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                  2
                </a>
                <a href="#" className="py-2 px-4 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                  3
                </a>
                <a href="#" className="py-2 px-4 border border-gray-300 bg-white rounded-r-md text-gray-700 hover:bg-gray-50">
                  Next
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-600 mb-6">
            Stay updated with the latest news and tips from the logistics industry
          </p>
          <form className="flex flex-col md:flex-row gap-2 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 flex-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <button 
              type="submit" 
              className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Blog
