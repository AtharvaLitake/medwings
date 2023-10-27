import React from 'react'
import HomeCarousel from './HomeCarousel'
import Welcome from '../../components/Welcome/Welcome'
import AboutUs from '../../components/AboutUs/AboutUs'
import Category from '../../components/Category/Category'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Prescription from '../../components/Prescription/Prescription'
import Medicine from '../Medicine/Medicine'
import Feature from '../../components/Feature/Feature'



const Home = () => {
  return (
    <div>
      <Navbar/>
      <HomeCarousel/>
      <Category/>
      <Feature></Feature>
      <Prescription/>
      <AboutUs/>
    </div>
  )
}

export default Home
