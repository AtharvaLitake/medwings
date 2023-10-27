import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import AboutUs from './components/AboutUs/AboutUs'
import Login from './pages/login/Login';
import SignUp from './pages/SignUp/SignUp';
import Medicine from './pages/Equipment/Equipment';
import Equipment from './pages/Equipment/Equipment'

function App({router}) {


  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="med" element={<Medicine/>} />
        <Route path="eqp" element={<Equipment/>} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
