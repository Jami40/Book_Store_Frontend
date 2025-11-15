import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useCart } from '../../context/CartContext'

export default function Books() {
  const { searchQuery } = useOutletContext() || { searchQuery: '' }
  const { addToCart } = useCart()
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    // Filter books based on search query
    if (searchQuery) {
      const filtered = books.filter(book => 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredBooks(filtered)
    } else {
      setFilteredBooks(books)
    }
  }, [searchQuery, books]);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/books');
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      setBooks(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching books:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (bookId) => {
    if (!window.confirm('Are you sure you want to delete this book?')) {
      return;
    }

    const loadingToast = toast.loading('Deleting book...');

    try {
      const response = await fetch(`http://localhost:3000/books/${bookId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete book');
      }

      // Remove book from state
      setBooks(books.filter(book => book._id !== bookId));
      setSelectedBook(null);
      toast.success('Book deleted successfully!', { id: loadingToast });
    } catch (err) {
      toast.error('Error deleting book: ' + err.message, { id: loadingToast });
      console.error('Delete error:', err);
    }
  };

  const handleEdit = (book) => {
    setEditForm(book);
    setIsEditing(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const loadingToast = toast.loading('Updating book...');

    try {
      const response = await fetch(`http://localhost:3000/books/${editForm._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editForm),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update book');
      }

      // Update book in state
      setBooks(books.map(book => book._id === editForm._id ? editForm : book));
      setSelectedBook(editForm);
      setIsEditing(false);
      toast.success('Book updated successfully!', { id: loadingToast });
    } catch (err) {
      toast.error('Error updating book: ' + err.message, { id: loadingToast });
      console.error('Update error:', err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl font-semibold">Loading books...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
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
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-linear-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent mb-3">
            {searchQuery ? 'Search Results' : 'All Books'}
          </h1>
          <p className="text-gray-600 text-lg">
            {searchQuery ? `Found ${filteredBooks.length} book(s) matching "${searchQuery}"` : 'Discover your next great read'}
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <div 
              key={book._id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-amber-100 hover:border-amber-300 flex flex-col h-full group"
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={book.coverImage} 
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-sm mr-1">★</span>
                    <span className="text-sm font-bold text-gray-800">{book.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-5 flex flex-col grow">
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 min-h-14 group-hover:text-amber-700 transition-colors">
                  {book.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3 font-medium">
                  by {book.author}
                </p>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-linear-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full font-semibold shadow-sm">
                    {book.category}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    📅 {book.publishedYear}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 grow">
                  {book.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4 pb-4 border-t border-gray-100 pt-4">
                    <span className="text-2xl font-bold bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      ${book.price}
                    </span>
                    <button className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setSelectedBook(book)}
                      className="flex-1 bg-white border-2 border-amber-600 text-amber-600 hover:bg-amber-50 font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      Details
                    </button>
                    <button 
                      onClick={() => addToCart(book)}
                      className="flex-1 bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                      Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredBooks.length === 0 && (
          <div className="text-center text-gray-600 mt-16 bg-white rounded-2xl p-12 shadow-lg max-w-md mx-auto">
            <div className="text-6xl mb-4">{searchQuery ? '🔍' : '📚'}</div>
            <p className="text-2xl font-semibold text-gray-800 mb-2">
              {searchQuery ? 'No books found' : 'No books available'}
            </p>
            <p className="text-gray-600">
              {searchQuery ? `No books match "${searchQuery}". Try a different search term.` : 'Please add some books to get started.'}
            </p>
          </div>
        )}
      </div>

      {/* Book Details Modal */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={() => setSelectedBook(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-2xl font-bold text-gray-800">Book Details</h2>
              <button 
                onClick={() => setSelectedBook(null)}
                className="text-gray-500 hover:text-gray-700 text-3xl leading-none hover:bg-gray-100 w-10 h-10 rounded-full transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Book Cover */}
                <div className="flex justify-center">
                  <div className="w-full max-w-md">
                    <img 
                      src={selectedBook.coverImage} 
                      alt={selectedBook.title}
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>
                </div>
                
                {/* Book Information */}
                <div className="flex flex-col">
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">{selectedBook.title}</h1>
                  <p className="text-xl text-gray-600 mb-4">by <span className="font-semibold text-amber-700">{selectedBook.author}</span></p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center bg-yellow-50 px-3 py-2 rounded-lg">
                      <span className="text-yellow-500 text-lg mr-1">★</span>
                      <span className="text-lg font-bold text-gray-800">{selectedBook.rating}</span>
                      <span className="text-gray-500 ml-1">/5</span>
                    </div>
                    <span className="bg-linear-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-sm">
                      {selectedBook.category}
                    </span>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">Description</h3>
                      <p className="text-gray-700 leading-relaxed">{selectedBook.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">Published Year</h3>
                        <p className="text-gray-800 font-semibold">{selectedBook.publishedYear}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">ISBN</h3>
                        <p className="text-gray-800 font-mono text-sm">{selectedBook.isbn}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-600 text-lg">Price:</span>
                      <span className="text-4xl font-bold bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        ${selectedBook.price}
                      </span>
                    </div>
                    
                    <div className="flex gap-3 mb-4">
                      <button 
                        onClick={() => addToCart(selectedBook)}
                        className="flex-1 bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        Add to Cart
                      </button>
                      <button className="p-4 text-red-500 hover:bg-red-50 rounded-xl transition-colors border-2 border-red-200 hover:border-red-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>

                    <div className="flex gap-3">
                      <button 
                        onClick={() => handleEdit(selectedBook)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                        Edit Book
                      </button>
                      <button 
                        onClick={() => handleDelete(selectedBook._id)}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Delete Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Book Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={() => setIsEditing(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-2xl font-bold text-gray-800">Edit Book</h2>
              <button 
                onClick={() => setIsEditing(false)}
                className="text-gray-500 hover:text-gray-700 text-3xl leading-none hover:bg-gray-100 w-10 h-10 rounded-full transition-colors"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleEditSubmit} className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={editForm.title || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Author</label>
                  <input
                    type="text"
                    name="author"
                    value={editForm.author || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                  <input
                    type="text"
                    name="category"
                    value={editForm.category || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Price</label>
                  <input
                    type="number"
                    name="price"
                    step="0.01"
                    value={editForm.price || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Rating</label>
                  <input
                    type="number"
                    name="rating"
                    step="0.1"
                    min="0"
                    max="5"
                    value={editForm.rating || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Published Year</label>
                  <input
                    type="number"
                    name="publishedYear"
                    value={editForm.publishedYear || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Cover Image URL</label>
                  <input
                    type="url"
                    name="coverImage"
                    value={editForm.coverImage || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">ISBN</label>
                  <input
                    type="text"
                    name="isbn"
                    value={editForm.isbn || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                  <textarea
                    name="description"
                    value={editForm.description || ''}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
