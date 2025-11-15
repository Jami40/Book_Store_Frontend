import React, { useState } from 'react'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Book Lover",
      image: "👩",
      rating: 5,
      text: "BookStore has completely transformed my reading habits! The collection is amazing and the customer service is top-notch. I've found so many hidden gems here.",
      verified: true
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Student",
      image: "👨",
      rating: 5,
      text: "As a student, I appreciate the affordable prices and quick delivery. The book quality is excellent and I love their personalized recommendations!",
      verified: true
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Book Club Organizer",
      image: "👩‍🦰",
      rating: 5,
      text: "Running a book club is so much easier with BookStore! We get group discounts and their monthly book selections are perfect for our discussions.",
      verified: true
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Avid Reader",
      image: "👨‍🦱",
      rating: 5,
      text: "I've tried many bookstores, but BookStore stands out with their unique collection and excellent recommendations. Highly recommended!",
      verified: true
    }
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Readers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've found their next favorite book
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Featured testimonial */}
            <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-8 lg:p-10 border-2 border-amber-200 relative">
              {/* Quote icon */}
              <div className="absolute top-4 left-4 text-4xl opacity-20">❝</div>

              {/* Content */}
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <span key={i} className="text-2xl">⭐</span>
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-xl text-gray-800 mb-8 leading-relaxed">
                  "{testimonials[activeIndex].text}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{testimonials[activeIndex].image}</div>
                  <div>
                    <p className="font-bold text-lg text-gray-900">
                      {testimonials[activeIndex].name}
                      {testimonials[activeIndex].verified && (
                        <span className="ml-2">✓</span>
                      )}
                    </p>
                    <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Testimonial cards grid */}
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  onClick={() => setActiveIndex(index)}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 transform ${
                    index === activeIndex
                      ? 'bg-amber-100 border-2 border-amber-600 scale-105'
                      : 'bg-gray-50 border-2 border-gray-200 hover:border-amber-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{testimonial.image}</div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 truncate">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-lg">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-amber-100 hover:bg-amber-600 hover:text-white text-amber-600 rounded-full transition-all duration-300 font-bold text-xl"
            >
              ←
            </button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-amber-600 w-8'
                    : 'bg-gray-300 hover:bg-amber-400'
                }`}
              />
            ))}
            <button
              onClick={nextTestimonial}
              className="p-3 bg-amber-100 hover:bg-amber-600 hover:text-white text-amber-600 rounded-full transition-all duration-300 font-bold text-xl"
            >
              →
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-5xl font-bold text-amber-700 mb-2">10K+</p>
            <p className="text-xl text-gray-600">5-Star Reviews</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-amber-700 mb-2">98%</p>
            <p className="text-xl text-gray-600">Customer Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-amber-700 mb-2">50K+</p>
            <p className="text-xl text-gray-600">Active Readers</p>
          </div>
        </div>
      </div>
    </section>
  )
}
