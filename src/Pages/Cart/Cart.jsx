import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import toast, { Toaster } from 'react-hot-toast'

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart()

  const handleQuantityChange = (bookId, newQuantity) => {
    if (newQuantity < 1) return
    updateQuantity(bookId, newQuantity)
  }

  if (cartItems.length === 0) {
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
          }}
        />
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-linear-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent mb-3">
              Shopping Cart
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="text-center text-gray-600 mt-16 bg-white rounded-2xl p-12 shadow-lg max-w-md mx-auto">
            <div className="text-6xl mb-4">🛒</div>
            <p className="text-2xl font-semibold text-gray-800 mb-2">Your cart is empty</p>
            <p className="text-gray-600 mb-6">Add some books to get started!</p>
            <Link 
              to="/books"
              className="inline-block bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Browse Books
            </Link>
          </div>
        </div>
      </div>
    )
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
        }}
      />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-linear-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent mb-3">
            Shopping Cart
          </h1>
          <p className="text-gray-600 text-lg">{cartItems.length} item(s) in your cart</p>
          <div className="w-24 h-1 bg-linear-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item._id} className="bg-white rounded-xl shadow-lg p-6 border border-amber-100 hover:shadow-xl transition-all duration-300">
                <div className="flex gap-6">
                  {/* Book Image */}
                  <div className="shrink-0">
                    <img 
                      src={item.coverImage} 
                      alt={item.title}
                      className="w-24 h-32 object-cover rounded-lg shadow-md"
                    />
                  </div>

                  {/* Book Info */}
                  <div className="grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600 mb-2">by {item.author}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs bg-linear-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full font-semibold">
                        {item.category}
                      </span>
                      <div className="flex items-center">
                        <span className="text-yellow-500 text-sm mr-1">★</span>
                        <span className="text-sm font-semibold">{item.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                          className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold text-gray-700 transition-colors"
                        >
                          -
                        </button>
                        <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                          className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold text-gray-700 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      {/* Price and Remove */}
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item._id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart Button */}
            <button
              onClick={clearCart}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-100 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span className="font-semibold">${(getCartTotal() * 0.1).toFixed(2)}</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-xl font-bold text-gray-800">
                  <span>Total</span>
                  <span className="bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    ${(getCartTotal() * 1.1).toFixed(2)}
                  </span>
                </div>
              </div>

              <button className="w-full bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mb-3">
                Proceed to Checkout
              </button>

              <Link 
                to="/books"
                className="block w-full text-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
