import React from 'react'
import '../SignUp/SignUp.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login_img from '../../Images/Login_Logo.png'
import axios from 'axios'
const SignUp = () => {
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const handlesubmit=()=>{
      axios.post('http://98.70.49.141/api/signup/',{
        username:username,
        password:password
      }).then((response)=>{
        toast.success("Registeration Successful")
      })
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
        <h2>SignUp</h2>
        <input type="text" placeholder='Username' onChange={(e)=>{
            setusername(e.target.value)
        }}/>
        <br />
        <input type="password" placeholder='Password' onChange={(e)=>{
            setpassword(e.target.value)
        }}/>
        <br />
        <Link>
        <button className='login_button' onClick={handlesubmit}>
            Register <span>&nbsp;</span> <i class="fas fa-sign-in"></i>
        </button>
        <br />
        </Link>
      </div>
    </div>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default SignUp
