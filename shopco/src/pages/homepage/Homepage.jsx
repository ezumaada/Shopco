import React from 'react'
import TopBanner from '../../components/topbanner/TopBanner';
import Navbar from '../../components/navbar/Navbar';

const Homepage = () => {
  return (
    <div>
        <TopBanner />
        <Navbar/>
        {/* Add your homepage content here */}
      <h1>Welcome to Shopco!</h1>
    </div>
  )
}

export default Homepage