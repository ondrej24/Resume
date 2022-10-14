import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import Logo from "../assets/logo.png";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed bg-[#12093a] w-full h-[80px] flex justify-between items-center px-4 text-gray-300">

      {/* logo */}
      <div>
        <img src={Logo} alt="logo" style={{ height: '50px' }} />
      </div>

      {/* menu */}
      <div>
        <ul className='hidden lg:flex'>
          <li>
            <Link to="home" smooth={true} offset={50} duration={400}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={50} duration={400}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} offset={50} duration={400}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={50} duration={400}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* hamburger */}
      <div onClick={handleClick} className='cursor-pointer md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'md:hidden bg-[#12093a] flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0'}>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={400}>
            Home
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={400}>
            About
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={400}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={400}>
            Contact
          </Link>
        </li>
        <li className='flex gap-8 mt-8'>
          <a href='https://www.linkedin.com/in/ondrej-pollach/' className='flex w-full items-center justify-between'>
            <FaLinkedin size={'35px'} />
          </a>
          <a href='https://github.com/ondrej24' className='flex w-full items-center justify-between'>
            <FaGithub size={'35px'} />
          </a>
        </li>
      </ul>

      {/* social icons */}
      <div className='hidden lg:flex flex-col fixed top-[45%] left-0'>
        <ul>
          <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-95px] hover:ml-[-10px] duration-200 bg-blue-600'>
            <a href='https://www.linkedin.com/in/ondrej-pollach/' className='flex w-full items-center justify-between'>
              LinkedIn <FaLinkedin size={'25px'} />
            </a>
          </li>
          <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-95px] hover:ml-[-10px] duration-200 bg-gray-600'>
            <a href='https://github.com/ondrej24' className='flex w-full items-center justify-between'>
              GitHub <FaGithub size={'25px'} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar