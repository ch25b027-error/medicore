import React from 'react'
import icon from './assets/icon.png'
import Fadeup from './FadeUp'
import Hamburger from './hamburger';






const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white/70 backdrop-blur-md border-b border-gray-100">

      <div className="flex items-center gap-2">
        <img src={icon} className="h-6" alt="logo" />
        <span className="text-xl font-bold text-gray-900 tracking-tight">MediCare</span>
      </div>

    <div className='flex gap-6'>
        <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-600">
        <li className="hover:text-purple-600 cursor-pointer"><a href='#hero'>Home</a></li>
        <li className="hover:text-purple-600 cursor-pointer "><a href='#features'>Features</a></li>
        <li className="hover:text-purple-600 cursor-pointer "><a href='#price'>Pricing</a></li>
        <li className="hover:text-purple-600 cursor-pointer "><a href='#review'>Reviews</a></li>
      </ul>
      <div>
        <button className="bg-gradient-to-br from-[#9B7CF4] via-[#7E74E8] to-[#C58AF3] hover:cursor-pointer  text-sm hover:bg-purple-900 transition-transform duration-200 hover:-translate-y-[2px] text-white px-5 py-2.5 rounded-full text-sm  font-semibold shadow-md">
          Get Started
        </button>
      </div>
      <div className='lg:hidden md:hidden'> <Hamburger /> </div>
    </div>  
    </nav>
  );
};

export default Header;