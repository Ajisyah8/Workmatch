/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Work from './WorkDiv/Work';
import Perusahaan from './Perusahaan/Perusahaan';
import Kontak from './Kontak/Kontak'
import Tentang from './Tentang/Tentang';
import Login from './login/Login';
import Footer from './Footer/Footer';
import Register from './Register/Register';
import Verification from './Verification/Verifivation';

const App = () => {
  return (
    <Router>
      <div className='w-[85%] m-auto bg-zinc-50'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/perusahaan" element={<Perusahaan />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verification" element={<Verification />}></Route>
           <Route path="/register" element={<Register />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
