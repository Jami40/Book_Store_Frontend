import React from 'react'

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Fiction",
      icon: "📖",
      count: "2.5K Books",
      color: "from-pink-400 to-red-400"
    },
    {
      id: 2,
      name: "Science",
      icon: "🔬",
      count: "1.8K Books",
      color: "from-blue-400 to-cyan-400"
    },
    {
      id: 3,
      name: "Technology",
      icon: "💻",
      count: "3.2K Books",
      color: "from-purple-400 to-indigo-400"
    },
    {
      id: 4,
      name: "History",
      icon: "📜",
      count: "2.1K Books",
      color: "from-amber-400 to-yellow-400"
    },
    {
      id: 5,
      name: "Self-Help",
      icon: "💡",
      count: "1.5K Books",
      color: "from-green-400 to-emerald-400"
    },
    {
      id: 6,
      name: "Mystery",
      icon: "🔍",
      count: "2.8K Books",
      color: "from-gray-400 to-slate-400"
    },
    {
      id: 7,
      name: "Romance",
      icon: "💕",
      count: "2.0K Books",
      color: "from-rose-400 to-pink-400"
    },
    {
      id: 8,
      name: "Fantasy",
      icon: "🐉",
      count: "2.3K Books",
      color: "from-violet-400 to-purple-400"
    }
  ]

  return (
    <section className="py-20 bg-linear-to-r from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explore <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Categories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse books by genre and find exactly what you're looking for
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-56"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-linear-to-br ${category.color} group-hover:scale-110 transition-transform duration-500`}></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center text-center p-6">
                <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-white/80 text-sm font-semibold">
                  {category.count}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-bold text-sm">Explore →</span>
                </div>
              </div>

              {/* Border effect */}
              <div className="absolute inset-0 border-2 border-white/20 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-gray-600 mb-6">
            Use our advanced search filter or browse our complete collection of over 50,000 titles
          </p>
          <button className="px-6 py-3 bg-linear-to-r from-amber-600 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300">
            Search Now
          </button>
        </div>
      </div>
    </section>
  )
}
