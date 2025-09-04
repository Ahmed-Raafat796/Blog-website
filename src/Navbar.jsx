import React from 'react';
import { Link } from "react-router-dom";

const Navbar = ({ menuOpen, setMenuOpen }) => { 

  return (
     <div>
   {/* Navbar*/}
      <div className='w-full h-[60px] bg-black  relative'>
        <div className='flex justify-between items-center  text-amber-50 w-full h-full mr-4'>

            {/* Logo*/}
          
          <div>
            <Link to="/">
            <img src="/logo1.png" alt="logo" className='flex sm:ml-10 md:ml-3 lg:ml-4 w-auto h-20 hover:text-blue-800 cursor-pointer'/>
            </Link>
          </div>
          



         
          <ul className='hidden lg:flex gap-10 mr-10'>
            <Link to="/" className="hover:text-blue-300 cursor-pointer">Home</Link>
            <Link to="/about"className="hover:text-blue-300 cursor-pointer">About</Link>
            <Link to="/contact" className="hover:text-blue-300 cursor-pointer">Contact </Link>
          </ul>




          <div className="lg:hidden flex flex-col justify-center items-center space-y-1.5 cursor-pointer mr-10" onClick={() => setMenuOpen(!menuOpen)}>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
          </div>


      
      </div>
              {menuOpen && (
                <div className='absolute right-0 z-50'>
        <div className="  bg-black text-white flex flex-col  items-center py-4 space-y-4 w-30 rounded-xl">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/about" className="hover:text-blue-300">About</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact</Link>
        </div> </div>
      )}


      </div>

      </div>
  
)};

export default Navbar;