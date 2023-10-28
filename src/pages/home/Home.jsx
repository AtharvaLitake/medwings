import React from 'react'
import HomeCarousel from './HomeCarousel'
import AboutUs from '../../components/AboutUs/AboutUs'
import Category from '../../components/Category/Category'
import Navbar from '../../components/navbar/Navbar'
import Prescription from '../../components/Prescription/Prescription'
import Feature from '../../components/Feature/Feature'
import Footer from '../../components/footer/Footer'



const Home = () => {
  return (
    <div>
      <Navbar/>
      <HomeCarousel/>
      <Category/>
      <Feature></Feature>
      <Prescription/>
      <AboutUs/>
      <Footer></Footer>
    </div>
  )
}

export default Home
