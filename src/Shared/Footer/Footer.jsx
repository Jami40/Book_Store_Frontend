import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-linear-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">📚</span>
              </div>
              <span className="text-2xl font-bold bg-linear-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                BookStore
              </span>
            </div>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Your ultimate destination for discovering and purchasing books across all genres and categories.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-xl">
                f
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-xl">
                𝕏
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-xl">
                📷
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-xl">
                in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  All Books
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  New Releases
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Coming Soon
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Fiction
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Non-Fiction
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Mystery & Thriller
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Science & Technology
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Self-Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Customer Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Returns & Exchange
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-12" />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Payment Methods */}
          <div>
            <h4 className="text-white font-semibold mb-4">We Accept</h4>
            <div className="flex gap-3 flex-wrap">
              <div className="bg-gray-800 px-3 py-2 rounded text-gray-400 text-xs font-semibold">
                💳 Visa
              </div>
              <div className="bg-gray-800 px-3 py-2 rounded text-gray-400 text-xs font-semibold">
                💳 MasterCard
              </div>
              <div className="bg-gray-800 px-3 py-2 rounded text-gray-400 text-xs font-semibold">
                🏦 Bank Transfer
              </div>
              <div className="bg-gray-800 px-3 py-2 rounded text-gray-400 text-xs font-semibold">
                📱 Digital Wallets
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-white font-semibold mb-4">Certifications</h4>
            <div className="flex gap-3 flex-wrap">
              <div className="bg-gray-800 px-3 py-2 rounded text-gray-400 text-xs font-semibold">
                ✓ SSL Secure
              </div>
              <div className="bg-gray-800 px-3 py-2 rounded text-gray-400 text-xs font-semibold">
                ✓ ISO 27001
              </div>
              <div className="bg-gray-800 px-3 py-2 rounded text-gray-400 text-xs font-semibold">
                ✓ GDPR Compliant
              </div>
            </div>
          </div>

          {/* Language */}
          <div>
            <h4 className="text-white font-semibold mb-4">Language</h4>
            <select className="w-full bg-gray-800 text-white border border-gray-700 rounded px-3 py-2 focus:outline-none focus:border-amber-500 transition-colors">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; 2025 BookStore. All rights reserved. Crafted with ❤️ for book lovers.
            </p>
            <div className="flex justify-center md:justify-end gap-6 text-sm">
              <Link to="/" className="text-gray-500 hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="text-gray-500 hover:text-amber-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/" className="text-gray-500 hover:text-amber-400 transition-colors">
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
