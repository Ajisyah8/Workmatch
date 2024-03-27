/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// Login.jsx
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState(''); // State untuk notifikasi berhasil login
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email: email,
        password: password,
      }, {
        withCredentials: true
      });

      if (response.data) {
        localStorage.setItem('account', JSON.stringify(response.data));
        setSuccessMsg('Login berhasil!'); // Set notifikasi berhasil login
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        setMsg(response.data.msg);
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }

  return (
    <div className="flex items-center justify-center h-screen  bg-gray-400 rounded-lg p-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[400px]">
        <h2 className="text-2xl mb-4">Login</h2>
        {successMsg && <p className='text-green-600 text-center'>{successMsg}</p>}
        <p className='has-text-centered'>{msg}</p>
        <form onSubmit={ Auth }>
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Username or Email"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border  border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </form>
        <p className="mt-4">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
