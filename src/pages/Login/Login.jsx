import React from 'react'
import '../Login/Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Login_img from '../../Images/Login_Logo.png'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Login = () => {
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const handlesubmit=()=>{

    }
  return (
    <>
    <div className="login_heading">
        <h1><u>MedWings</u></h1>
    </div>
    <div className='Login_page'>
      <div className="Login_image">
        <img src={Login_img} alt="" />
      </div>
      <div className="Login_form">
        <h2>LogIn</h2>
        <input type="text" placeholder='Username' onChange={(e)=>{
            setusername(e.target.value)
        }}/>
        <br />
        <input type="password" placeholder='Password' onChange={(e)=>{
            setpassword(e.target.value)
        }}/>
        <br />
        <Link>
        <button className='login_button'>
            LogIn
        </button>
        <br />
        </Link>
        <Link to=''>
        <button>
            Sign Up
        </button>
        </Link>
      </div>
    </div>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default Login