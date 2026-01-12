import React from 'react'
import icon from './assets/icon.png'
import Fadeup from './FadeUp'

export default function Footer() {
  return (
  <Fadeup className='delay-200'>  <div className="bg-gradient-to-br from-[#9B7CF4] via-[#7E74E8] to-[#C58AF3] text-white pt-16 pb-8 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
        

        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-4">
            <div className=" p-1.5 ">
            <img src={ icon } alt='icon' className='h-9 w-9 rounded-full' />
            </div>
            <p className="text-2xl font-bold tracking-tight">MediCare</p>
          </div>
          <p className="text-gray-100 text-sm leading-relaxed">
            Your personal health companion for a healthier, organized life.
          </p>
        </div>

        <div className="w-full md:w-auto">
          <p className="font-bold mb-4 text-lg">Stay Updated</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input type='text' placeholder='Enter your Gmail' className='bg-gray-100 text-gray-700 rounded-2xl  border-gray-800 border-1 transition-transform duration-200 hover:-translate-y-[2px] px-6 py-3'/>
            <a href="#" className="bg-gray-200 hover:bg-purple-600 hover:text-gray-100 text-purple-500 border-gray-800 border-1 transition-transform duration-200 hover:-translate-y-[2px] px-6 py-3 rounded-2xl  text-center text-xl flex items-center justify-center">
              Subscribe 
            </a>
          </div>
        </div>
      </div>

      <div className="h-[1px] bg-gray-800 w-full mb-12"></div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        
        <div>
          <div className="flex gap-3 mb-6">
            
            <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center border border-gray-800 hover:bg-purple-500
            text-purple-700 text-bold hover:text-gray-50 ">
              <p className="text-xs">IG</p>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center border border-gray-800 hover:bg-purple-500  text-purple-700 text-bold hover:text-gray-50 ">
              <p className="text-xs">FB</p>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center border border-gray-800 hover:bg-purple-500  text-purple-700 text-bold hover:text-gray-50 ">
              <p className="text-xs">X</p>
            </a>
          </div>
          <p className="text-gray-200 text-xs">© 2025 Curely Inc. All rights reserved.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
          <div className="flex flex-col gap-3">
            <p className="font-bold">Company</p>
            <a href="#" className="text-gray-200 hover:text-white hover:text-lg">About</a>
            <a href="#" className="text-gray-200 hover:text-white hover:text-lg">Blog</a>
            <a href="#" className="text-gray-200 hover:text-white hover:text-lg">Press</a>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold">Help</p>
            <a href="#" className="text-gray-200 hover:text-white hover:text-lg">Support</a>
            <a href="#" className="text-gray-200 hover:text-white hover:text-lg">Privacy Policy</a>
            <a href="#" className="text-gray-200 hover:text-white hover:text-lg">Terms</a>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold">Contact Info</p>
            <p className="text-gray-200">pokemon@medicare.app</p>
            <p className="text-gray-200">Ash ketchum, Pallet Town</p>
          </div>
        </div>

      </div>
    </div> </Fadeup>
  )
}
