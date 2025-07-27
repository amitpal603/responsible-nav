import React, { useState } from 'react';
import { RxCodesandboxLogo, RxCross1 } from "react-icons/rx";
import { FcSearch } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const troggle = () => {
    setOpen(!open);
  };

  const navLinks = [
    { to: '/', label: "Home" },
    { to: '/About', label: "About" },
    { to: '/Contact', label: "Contact" },
  ];

  const authLinks = [
    { to: '/Login', label: "Login" },
    { to: '/Sign-up', label: "Sign Up" },
  ];

  return (
    <>
      <div className='h-18 w-full bg-gradient-to-r from-purple-500 to-white flex justify-between items-center px-4'>
        {/* Logo */}
        <div className='text-4xl text-purple-800'>
          <RxCodesandboxLogo />
        </div>

        {/* Search Bar */}
        <div className='flex justify-center items-center'>
          <span 
          onClick={ () => alert('Please entered data...🫢')}
          className=' cursor-pointer rounded-l-md flex justify-center items-center text-3xl w-10 h-12 border-l-2 border-t-2 border-b-2 border-black'>
            <FcSearch />
          </span>
          <input
            className='h-12 w-[22rem] outline-none border-r-2 border-t-2 border-b-2 border-black pl-5 rounded-r-md'
            type="text"
            placeholder='Search...'
          />
        </div>

        {/* Desktop Menu */}
        <ul className='hidden lg:flex justify-center items-center gap-10'>
          {navLinks.map((link, index) => (
            <li key={index} className='text-[20px]'>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-[18px] ${isActive ? 'text-purple-400 font-bold' : 'text-gray-500'}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}

          {authLinks.map((link, index) => (
            <button
              key={index}
              className='px-3 py-2 bg-cyan-500 rounded-md hover:shadow-lg shadow-cyan-300'
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `${isActive ? 'font-bold text-white' : 'text-base text-black'}`
                }
              >
                {link.label}
              </NavLink>
            </button>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className='text-3xl font-bold lg:hidden ml-4' onClick={troggle}>
          {open ? <RxCross1 /> : <GiHamburgerMenu />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className=' relative lg:hidden'>
        <div
          className={` absolute top-0 left-0 w-full transition-all duration-500 overflow-hidden bg-gray-100 z-10 ${
            open ? 'max-h-screen opacity-100 pt-24' : 'max-h-0 opacity-0'
          }`}
        >
          <div className='flex flex-col items-center py-6 gap-5'>
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                onClick={troggle}
                className={({ isActive }) =>
                  `text-xl font-medium ${isActive ? 'text-purple-500' : 'text-gray-700'} hover:text-purple-500`
                }
              >
                {link.label}            
              </NavLink>
            ))}

            {authLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                onClick={troggle}
                className={({ isActive }) =>
                  `text-lg px-4 py-2 rounded-md bg-cyan-500 text-black ${
                    isActive ? 'font-bold text-white' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
