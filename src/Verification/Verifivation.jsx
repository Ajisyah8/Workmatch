import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Verification = () => {
  const navigate = useNavigate();
  const [biodata, setBiodata] = useState({
    fullName: '',
    email: '',
    address: '',
    phoneNumber: '',
    birthDate: '',
    major: '',
    // ... dan field lainnya sesuai kebutuhan
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBiodata({ ...biodata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(biodata), // Kirim data formulir ke backend
      });
  
      if (response.ok) {
        // Tangani keberhasilan simpan data
        const responseData = await response.json();
        console.log(responseData.msg); // Tampilkan pesan keberhasilan dari server
        
        // Tampilkan notifikasi berhasil mengambil program
        toast.success('Successfully obtained program!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        localStorage.setItem('verifiedData', JSON.stringify(biodata));
  
        // Redirect ke halaman utama setelah verifikasi berhasil
        navigate('/');
      } else {
        // Tangani kegagalan simpan data
        console.error('Failed to save verification data');
        toast.error('Failed to save verification data. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while saving data. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400 rounded-lg p-4">
  <div className="bg-white p-5 rounded-lg shadow-2xl w-[500px] my-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={biodata.fullName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={biodata.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={biodata.address}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-blue-500 resize-none h-32"
              placeholder="Enter your address"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={biodata.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="birthDate" className="block text-gray-700 font-semibold mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={biodata.birthDate}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
           <label htmlFor="major" className="block text-gray-700 font-semibold mb-2">
                Major
            </label>
            <input
              type="text"
              id="major"
              name="major" // Ubah "name" menjadi "major"
              value={biodata.major}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your Major"
              />
            </div>
          {/* Tambahkan isian lainnya */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
          >
            Complete Verification
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verification;
