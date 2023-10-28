import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import SignUp from './pages/SignUp/SignUp';
import Eqp from './pages/Eqp'
import Med from './pages/Med';
import Hyg from './pages/Hyg';
import Face_hair from './pages/Face_hair'
import Cart from './components/MyCart/MyCart';
function App({router}) {


  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="med" element={<Med/>} />
        <Route path="eqp" element={<Eqp/>} />
        <Route path="hyg" element={<Hyg/>} />
        <Route path="face" element={<Face_hair/>} />
        <Route path="cart" element={<Cart/>} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
