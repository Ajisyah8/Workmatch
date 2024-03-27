import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus(); // Memeriksa status login saat komponen dimuat
  }, []);

  const checkLoginStatus = () => {
    const account = JSON.parse(localStorage.getItem('account'));
    setIsLoggedIn(!!account);
  };

  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-black"><strong>Work</strong>Match</h1>
      </div>

      <div className='menu flex gap-8'>
        <li className="menulist text-[#6f6f6f] hover:text-black">
          <Link to="/">Work</Link>
        </li>
        <li className="menulist text-[#6f6f6f] hover:text-black">
          <Link to="/verification">Verification</Link>
        </li>
        <li className="menulist text-[#6f6f6f] hover:text-black">
          <Link to="/perusahaan">Perusahaan</Link>
        </li>
        <li className="menulist text-[#6f6f6f] hover:text-black">
          <Link to="/tentang">Tentang</Link>
        </li>
        <li className="menulist text-[#6f6f6f] hover:text-black">
          <Link to="/kontak">Kontak</Link>
        </li>
        {isLoggedIn ? null : (
          <li className="menulist text-[#6f6f6f] hover:text-black">
            <Link to="/login">Masuk</Link>
          </li>
        )}
      </div>
    </div>
  );
};

export default Navbar;
