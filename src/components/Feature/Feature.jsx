import React from 'react'
import feature1 from '../../Images/Feature1.png'
import feature2 from '../../Images/Feature2.png'
import feature3 from '../../Images/Feature3.png'
import './Feature.css'
const Feature = () => {
  return (
    <div className='Features'>
        <div className="fhead">
            <h1>What We are Famous for ?</h1>
        </div>
        <div className="feature">
            <div className="feature_one">
                <img src={feature1} alt="" />
            </div>
            <div className="feature_one">
                <img src={feature2} alt="" />
            </div>
            <div className="feature_one">
                <img src={feature3} alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Feature
