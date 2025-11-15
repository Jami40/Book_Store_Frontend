import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section className="py-20 bg-linear-to-r from-amber-600 to-orange-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-40"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-40"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Stay Updated with Latest Releases
          </h2>
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get exclusive deals, book recommendations, and updates about new releases straight to your inbox.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-300"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-amber-700 font-bold rounded-lg hover:bg-amber-50 transition-all duration-300 hover:shadow-lg whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          {/* Success message */}
          {subscribed && (
            <p className="mt-4 text-white font-semibold animate-pulse">
              ✓ Thanks for subscribing! Check your email for a special welcome offer.
            </p>
          )}

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-3xl mb-2">📧</p>
              <p className="text-white font-semibold">Weekly Picks</p>
              <p className="text-amber-50 text-sm mt-2">Handpicked books for your reading list</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-3xl mb-2">🎁</p>
              <p className="text-white font-semibold">Exclusive Deals</p>
              <p className="text-amber-50 text-sm mt-2">Special discounts for subscribers only</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-3xl mb-2">📰</p>
              <p className="text-white font-semibold">Author News</p>
              <p className="text-amber-50 text-sm mt-2">Updates from your favorite authors</p>
            </div>
          </div>

          {/* Privacy note */}
          <p className="mt-8 text-sm text-amber-50">
            We respect your privacy. Unsubscribe at any time. No spam, we promise!
          </p>
        </div>
      </div>
    </section>
  )
}
