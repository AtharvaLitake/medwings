import React from 'react'
import './Welcome.css'
import logo from '../../Images/Medicine-amico.png'


const Welcome = () => {
  return (
    <div className='flex flex-col items-center justify-evenly m-4 border-spacing-1 rounded lg:flex-row'>
     <img src={logo} className='contain w-[40%] h-[100%]' alt="" />
     
     <div>
      
     <p className='text-black text-[5rem] text-center my-4 mx-1'>
          Welcome to MedWings
        </p>
     <button>
      
     </button>
     </div>
     
    </div>
  );
}

export default Welcome
