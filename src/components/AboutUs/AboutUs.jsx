import React from "react";
import "../AboutUs/AboutUs.css";
import Logo from '../../Images/MedWings Logo.png'
const AboutUs = () => {
  return (
    <div className="AboutUs my-5">
      <div className="About_image">
        <img src={Logo} alt="" />
      </div>
      <div className="About_content">
        <h1 className="About_heading">MedWings</h1>
        <p className="text-[1.5rem] m-[auto]">
          MedWings is an online e-commerce platform that offers a wide range of
          prescription medications and healthcare products. What sets it apart
          is its prescription reader technology, allowing users to securely
          upload and verify their prescriptions. With a user-friendly interface,
          professional guidance, and a focus on safety and compliance, MedWings
          provides a convenient and reliable way for customers to access the
          healthcare products they need.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
