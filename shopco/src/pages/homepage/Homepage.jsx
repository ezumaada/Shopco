import React from 'react'
import TopBanner from '../../components/topbanner/TopBanner';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import BrowseSection from '../../components/browsesection/BrowseSection';
import Testimonials from '../../components/testimonials/Testimonials';
import NewsLetter from '../../components/newsletter/NewsLetter';
import Footer from '../../components/footer/Footer';



const Homepage = () => {
  return (
    <div>
        <TopBanner />
        <Navbar/>
        
      
      <Header/>
      <BrowseSection/>
      <Testimonials/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Homepage