import React, { createContext, useContext, useState, useEffect } from 'react'
import toast from 'react-hot-toast'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('bookstoreCart')
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('bookstoreCart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (book) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === book._id)
      
      if (existingItem) {
        toast.success('Quantity updated in cart!')
        return prevItems.map((item) =>
          item._id === book._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        toast.success('Book added to cart!')
        return [...prevItems, { ...book, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (bookId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== bookId))
    toast.success('Book removed from cart!')
  }

  const updateQuantity = (bookId, quantity) => {
    if (quantity < 1) {
      removeFromCart(bookId)
      return
    }
    
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === bookId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
    toast.success('Cart cleared!')
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
