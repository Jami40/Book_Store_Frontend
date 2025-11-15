import React from 'react'

export default function Hero() {
  return (
    <section className="relative bg-linear-to-r from-amber-50 via-orange-50 to-red-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-32"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Discover Your Next <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Favorite Book</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Explore thousands of books across all genres. Find bestsellers, hidden gems, and your next literary adventure. Join our community of book lovers today.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-linear-to-r from-amber-600 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                Start Exploring
              </button>
              <button className="px-8 py-4 border-2 border-amber-600 text-amber-600 font-bold rounded-lg hover:bg-amber-50 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-amber-200">
              <div>
                <p className="text-3xl font-bold text-amber-700">50K+</p>
                <p className="text-gray-600">Books Available</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-amber-700">10K+</p>
                <p className="text-gray-600">Happy Readers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-amber-700">100%</p>
                <p className="text-gray-600">Genuine</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Book stack animation background */}
              <div className="absolute inset-0 bg-linear-to-br from-amber-400 to-orange-400 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-linear-to-br from-orange-400 to-red-400 rounded-3xl transform -rotate-3 translate-x-4 translate-y-4"></div>
              
              {/* Main content area */}
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">📚</div>
                  <p className="text-2xl font-bold text-amber-900">Your Library Awaits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
