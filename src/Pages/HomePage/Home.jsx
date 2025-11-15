import React from 'react'
import Hero from './Sections/Hero/Hero'
import FeaturedBooks from './Sections/FeaturedBooks/FeaturedBooks'
import Categories from './Sections/Categories/Categories'
import Testimonials from './Sections/Testimonials/Testimonials'
import Newsletter from './Sections/Newsletter/Newsletter'

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <FeaturedBooks />
      <Categories />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
