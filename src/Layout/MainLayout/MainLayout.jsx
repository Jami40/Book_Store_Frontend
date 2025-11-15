import React, { useState } from 'react'
import Navbar from '../../Shared/Navbar/Navbar'
import Footer from '../../Shared/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <div>
        <Navbar onSearch={handleSearch} />
        <div>
            <Outlet context={{ searchQuery }} />
        </div>
        <Footer />
    </div>
  )
}
