import React from 'react'

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      author: "Kaylynn Workman",
      title: "Choosing Insurance for five years has been advantageous. Their personalized home insurance addresses my necessities precisely.",
      excerpt: "Choosing Insurance for five years has been advantageous. Their personalized home insurance addresses my necessities precisely.",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      author: "Phillip Levin", 
      title: "Choosing Insurance for five years has been advantageous. Their personalized home insurance addresses my necessities precisely.",
      excerpt: "Choosing Insurance for five years has been advantageous. Their personalized home insurance addresses my necessities precisely.",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      author: "Zaire Rhiel Madsen",
      title: "Choosing Insurance for five years has been advantageous. Their personalized home insurance addresses my necessities precisely.", 
      excerpt: "Choosing Insurance for five years has been advantageous. Their personalized home insurance addresses my necessities precisely.",
      image: "/api/placeholder/400/250"
    }
  ]

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-gray-600 text-lg font-medium mb-4">Blogs-</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            The World Of Logistics Explained!
          </h2>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              {/* Blog Image Placeholder */}
              <div className="w-full h-48 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Author */}
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {post.author}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <button className="text-red-600 font-bold text-sm hover:text-red-700 transition-colors duration-300 uppercase tracking-wide">
                  READ MORE
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-red-600 text-white px-8 py-3 font-semibold text-lg hover:bg-red-700 transition-colors duration-300 rounded-lg">
            VIEW ALL BLOGS
          </button>
        </div>
      </div>
    </div>
  )
}

export default Blogs