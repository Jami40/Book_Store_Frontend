import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

export default function AddBook() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    price: '',
    coverImage: '',
    rating: '',
    publishedYear: '',
    isbn: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const loadingToast = toast.loading('Adding book...')

    try {
      // Convert numeric fields
      const bookData = {
        ...formData,
        price: parseFloat(formData.price),
        rating: parseFloat(formData.rating),
        publishedYear: parseInt(formData.publishedYear)
      }

      const response = await fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to add book')
      }

      toast.success('Book added successfully!', { id: loadingToast })
      
      // Reset form
      setFormData({
        title: '',
        author: '',
        category: '',
        description: '',
        price: '',
        coverImage: '',
        rating: '',
        publishedYear: '',
        isbn: ''
      })

      // Navigate to books page after 1 second
      setTimeout(() => {
        navigate('/books')
      }, 1000)

    } catch (err) {
      toast.error('Error adding book: ' + err.message, { id: loadingToast })
      console.error('Add book error:', err)
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-yellow-50 py-12">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-linear-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent mb-3">
            Add New Book
          </h1>
          <p className="text-gray-600 text-lg">Fill in the details to add a new book to the collection</p>
          <div className="w-24 h-1 bg-linear-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="Enter book title"
                  required
                />
              </div>

              {/* Author */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Author <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="Enter author name"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Non-Fiction">Non-Fiction</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Romance">Romance</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Biography">Biography</option>
                  <option value="Science">Science</option>
                  <option value="History">History</option>
                  <option value="Self-Help">Self-Help</option>
                  <option value="Mystery">Mystery</option>
                </select>
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Price ($) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="price"
                  step="0.01"
                  min="0"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="0.00"
                  required
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Rating (0-5) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="rating"
                  step="0.1"
                  min="0"
                  max="5"
                  value={formData.rating}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="0.0"
                  required
                />
              </div>

              {/* Published Year */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Published Year <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="publishedYear"
                  min="1000"
                  max={new Date().getFullYear()}
                  value={formData.publishedYear}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="2024"
                  required
                />
              </div>

              {/* ISBN */}
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  ISBN <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="isbn"
                  value={formData.isbn}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="978-0-123-45678-9"
                  required
                />
              </div>

              {/* Cover Image URL */}
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Cover Image URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  name="coverImage"
                  value={formData.coverImage}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="https://example.com/book-cover.jpg"
                  required
                />
                {formData.coverImage && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-600 mb-2">Preview:</p>
                    <img 
                      src={formData.coverImage} 
                      alt="Cover preview" 
                      className="h-48 w-auto rounded-lg shadow-md"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="Enter a detailed description of the book..."
                  required
                ></textarea>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                type="button"
                onClick={() => navigate('/books')}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
