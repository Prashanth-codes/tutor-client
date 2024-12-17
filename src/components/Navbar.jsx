import React from 'react';
import { Link } from "react-router-dom";
import logo from '../pages/assets/logo.jpg';
const Navbar = () => {
  return (
    <nav className='bg-white shadow-md fixed top-0 left-0 w-full h-[90px] z-50'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <div className='text-2xl font-bold text-blue-600'>
          <Link to="/" className='flex'><img src={logo} alt="logo" className='w-[100px] h-[70px] rounded-full border-2 border-blue-200'/><p className='mt-4 ml-1'>RK Home & Online Tutors</p></Link>
        </div>
        <ul className='flex justify-center items-center space-x-10 text-gray-600 font-bold'>
          <li>
            <Link to="/" className='hover:text-blue-600'>Home</Link>
          </li>
          <li>
            <Link to="/search-tutor" className='hover:text-blue-600'>Search Tutor</Link>
          </li>
          <li>
            <Link to="/join-tutor" className='hover:text-blue-600'>Join as Tutor</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
