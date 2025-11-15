import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export default function Navbar({ onSearch }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()
  const { getCartCount } = useCart()
  
  const isBookPage = location.pathname === '/books'
  const cartCount = getCartCount()

  const handleSearch = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    if (onSearch && isBookPage) {
      onSearch(query)
    }
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (onSearch && isBookPage) {
      onSearch(searchQuery)
    }
  }

  return (
    <nav className="bg-linear-to-r from-amber-50 to-orange-50 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 shrink-0">
            <div className="w-10 h-10 bg-linear-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">📚</span>
            </div>
            <span className="text-2xl font-bold bg-linear-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
              BookStore
            </span>
          </Link>

          {/* Search Bar - Hidden on mobile and only shown on Books page */}
          {isBookPage && (
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <form onSubmit={handleSearchSubmit} className="w-full relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Search books by title or author..."
                  className="w-full px-4 py-2 rounded-lg border-2 border-amber-200 focus:border-amber-500 focus:outline-none transition-colors bg-white text-sm"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-600 hover:text-amber-700 transition-colors">
                  🔍
                </button>
              </form>
            </div>
          )}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/" className="px-4 py-2 text-amber-900 hover:bg-amber-100 rounded-lg transition-colors font-medium">
              Home
            </Link>
            <Link to="/books" className="px-4 py-2 text-amber-900 hover:bg-amber-100 rounded-lg transition-colors font-medium">
              Books
            </Link>
            <Link to="/add-book" className="px-4 py-2 text-amber-900 hover:bg-amber-100 rounded-lg transition-colors font-medium">
              Add Book
            </Link>
            <Link to="/" className="px-4 py-2 text-amber-900 hover:bg-amber-100 rounded-lg transition-colors font-medium">
              Categories
            </Link>
            <Link to="/" className="px-4 py-2 text-amber-900 hover:bg-amber-100 rounded-lg transition-colors font-medium">
              About
            </Link>
            <Link to="/" className="px-4 py-2 text-amber-900 hover:bg-amber-100 rounded-lg transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <Link to="/cart" className="relative p-2 text-amber-900 hover:bg-amber-100 rounded-lg transition-colors">
              🛒
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Wishlist Icon */}
            <button className="p-2 text-amber-900 hover:bg-amber-100 rounded-lg transition-colors hidden sm:block">
              ❤️
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="p-2 text-amber-900 hover:bg-amber-100 rounded-lg transition-colors"
              >
                👤
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-amber-200">
                  <Link to="/" className="block px-4 py-2 text-amber-900 hover:bg-amber-50 transition-colors">
                    My Account
                  </Link>
                  <Link to="/" className="block px-4 py-2 text-amber-900 hover:bg-amber-50 transition-colors">
                    My Orders
                  </Link>
                  <Link to="/" className="block px-4 py-2 text-amber-900 hover:bg-amber-50 transition-colors">
                    Wishlist
                  </Link>
                  <hr className="border-amber-100" />
                  <button className="w-full text-left px-4 py-2 text-amber-900 hover:bg-amber-50 transition-colors font-medium">
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-amber-900 hover:bg-amber-100 rounded-lg transition-colors"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-amber-200">
            <div className="flex flex-col space-y-2 mt-4">
              {isBookPage && (
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Search books..."
                  className="px-4 py-2 rounded-lg border-2 border-amber-200 focus:border-amber-500 focus:outline-none w-full text-sm"
                />
              )}
              <Link to="/" className="block px-4 py-2 text-amber-900 hover:bg-amber-100 rounded-lg transition-colors font-medium">
                Home
              </Link>
              <Link to="/books" className="block px-4 py-2 text-amber-900 hover:bg-amber-100 rounded-lg transition-colors font-medium">
                Books
              </Link>
              <Link to="/add-book" className="block px-4 py-2 text-amber-900 hover:bg-amber-100 rounded-lg transition-colors font-medium">
                Add Book
              </Link>
              <Link to="/" className="block px-4 py-2 text-amber-900 hover:bg-amber-100 rounded-lg transition-colors font-medium">
                Categories
              </Link>
              <Link to="/" className="block px-4 py-2 text-amber-900 hover:bg-amber-100 rounded-lg transition-colors font-medium">
                About
              </Link>
              <Link to="/" className="block px-4 py-2 text-amber-900 hover:bg-amber-100 rounded-lg transition-colors font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
