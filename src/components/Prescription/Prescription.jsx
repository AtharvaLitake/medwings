import React, { useState } from 'react';
import '../Prescription/Prescription.css';
import Pimage from '../../Images/Prescription_img.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Prescription = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      const instance = axios.create({
        baseURL: 'http://98.70.49.141/api/',
        timeout: 1000,
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
      });

      instance.post('setPrescriptionOrder/', formData)
        .then(response => {
          toast.success(response.data.msg);
          setSelectedFile(null); // Clear the selectedFile state
          // Clear the file input value
          document.getElementById('fileInput').value = '';
          return response.data;
        })
        .catch(error => {
          toast.error('Error uploading prescription image');
          console.error('Error uploading prescription image:', error);
        });
    }
  };

  return (
    <div className="Prescription">
      <div className="pupload">
        <h1>Upload Your Prescription Here</h1>
        <input type="file" id="fileInput" accept="image/*" onChange={handleFileSelect} />
        <button onClick={handleUpload}>Upload</button>
      </div>
      <div className="pimage">
        <img src={Pimage} alt="" />
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Prescription;