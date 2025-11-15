import React from 'react'

export default function FeaturedBooks() {
  const books = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      price: "$14.99",
      image: "📖",
      category: "Fiction",
      rating: 4.8,
      reviews: 2543
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      price: "$16.99",
      image: "📚",
      category: "Self-Help",
      rating: 4.9,
      reviews: 5201
    },
    {
      id: 3,
      title: "Project Hail Mary",
      author: "Andy Weir",
      price: "$15.99",
      image: "🚀",
      category: "Sci-Fi",
      rating: 4.7,
      reviews: 3421
    },
    {
      id: 4,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: "$14.99",
      image: "🔍",
      category: "Thriller",
      rating: 4.6,
      reviews: 4123
    },
    {
      id: 5,
      title: "Educated",
      author: "Tara Westover",
      price: "$17.99",
      image: "🎓",
      category: "Memoir",
      rating: 4.8,
      reviews: 6234
    },
    {
      id: 6,
      title: "The Seven Husbands",
      author: "Taylor Jenkins Reid",
      price: "$16.99",
      image: "💫",
      category: "Fiction",
      rating: 4.7,
      reviews: 3876
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Books</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked selections from our bestselling collection. Discover the stories everyone is talking about.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="group bg-white border border-amber-100 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Book Image */}
              <div className="relative h-48 bg-linear-to-br from-amber-100 to-orange-100 flex items-center justify-center overflow-hidden">
                <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {book.image}
                </div>
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  New
                </div>
              </div>

              {/* Book Info */}
              <div className="p-6">
                <p className="text-sm text-amber-600 font-semibold mb-2">{book.category}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                  {book.title}
                </h3>
                <p className="text-gray-600 mb-4">{book.author}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {'⭐'.repeat(Math.floor(book.rating))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {book.rating} ({book.reviews} reviews)
                  </span>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-700">{book.price}</span>
                  <button className="px-4 py-2 bg-linear-to-r from-amber-600 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 border-2 border-amber-600 text-amber-600 font-bold rounded-lg hover:bg-amber-50 transition-all duration-300 text-lg">
            View All Books
          </button>
        </div>
      </div>
    </section>
  )
}
