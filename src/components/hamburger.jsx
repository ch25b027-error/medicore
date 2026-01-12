'use client' ;

import { useState } from "react";
import Hamburger from 'hamburger-react'
import React from 'react'

export default function hamburger() {
     const [open, setOpen] = useState(false);
  return ( <div>
    <Hamburger
      toggled={open}
      toggle={setOpen}
      size={24}
    />

    {open && <div className="fixed absolute top-0 right-0 w-[80%] h-screen pt-4 pr-8 backdrop-blur-xl text-gray-700 bg-gradient-to-br from-purple-100/98 via-blue-100/98 to-orange-100/98">
     <div className="flex justify-end pl-16">
      <Hamburger
      toggled={open}
      toggle={setOpen}
      size={24}
      
    />
    </div>
    <div className='grid text-center gap-6 bg-gradient-to-br '>
            <ul className="grid items-center gap-8 text-[15px] font-medium text-gray-600">
            <li className="hover:text-purple-600 cursor-pointer"><a href='#hero'>Home</a></li>
        <li className="hover:text-purple-600 cursor-pointer "><a href='#features'>Features</a></li>
        <li className="hover:text-purple-600 cursor-pointer "><a href='#price'>Pricing</a></li>
        <li className="hover:text-purple-600 cursor-pointer "><a href='#review'>Reviews</a></li>
          </ul>

         <div className="w-[90%] h-px bg-gray-400 mx-auto" /> 

          <div>
               <input type='text' placeholder='Search' className='bg-gray-100 text-gray-700 rounded-2xl  border-gray-800 border-1 transition-transform duration-200 hover:-translate-y-[2px] mb-5 px-3 py-1.5 '/>
            <button className="bg-gradient-to-br from-[#9B7CF4] via-[#7E74E8] to-[#C58AF3]  hover:cursor-pointer  text-sm hover:bg-purple-900 transition-transform duration-200 hover:-translate-y-[2px] text-white px-5 py-2.5 rounded-full text-sm  font-semibold shadow-md">
              Login Now
            </button>
          </div>
        </div>  

     </div>}
     </div>
  );
};


