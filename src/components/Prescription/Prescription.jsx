import React from 'react'
import '../Prescription/Prescription.css'
import Pimage from '../../Images/Prescription_img.png'
const Prescription = () => {
  return (
    <div className='Prescription'>
      <div className="pupload">
        <h1>Upload Your <br />Prescription Here </h1>
        <input type="file" />
      </div>
      <div className="pimage">
        <img src={Pimage} alt="" />
      </div>
    </div>
  )
}

export default Prescription