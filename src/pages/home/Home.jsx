import React from 'react'
import HomeCarousel from './HomeCarousel'
import Welcome from '../../components/Welcome/Welcome'
import AboutUs from '../../components/AboutUs/AboutUs'
import Category from '../../components/Category/Category'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Prescription from '../../components/Prescription/Prescription'



const Home = () => {
  return (
    <div>
      <Navbar/>
      <HomeCarousel/>
      {/* <Welcome/> */}
      <Category/>
      <Prescription/>
      <AboutUs/>
      <Footer/>
      {/* <AboutUs/> */}
      {/* Home, Login Signup */}
    </div>
  )
}

export default Home
