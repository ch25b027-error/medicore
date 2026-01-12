import React from 'react'
import hero from './assets/hero.png'
import Fadeup from './FadeUp'
import Anime from './DoctorAnimation'


export default function Hero() {
  return (
    <div>
      <section id='hero' className="relative flex flex-col items-center justify-center px-6 pt-26 pb-3 text-center overflow-hidden 
        bg-gradient-to-r from-[#E2D9FF] via-[#F1F3FF] to-[#FFE3CF] text-center mb-16">

    <Fadeup className='delay-200'> <div className="mb-6 px-4 py-2 border border-gray-200 rounded-full bg-white/50 backdrop-blur-sm text-sm font-medium text-gray-500">
        Best Medical Service
      </div>

      <h1 className="max-w-4xl text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
        Manage Your Health Anytime, <br /> Anywhere.
      </h1>

      <p className="max-w-2xl text-lg text-gray-600 mb-10 leading-relaxed">
        Curely helps you book appointments, track wellness, consult doctors, and manage reports — all in one simple app.
      </p></Fadeup>

    <Fadeup className='delay-200'>  <div className="flex flex-wrap justify-center gap-4">
        <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl  transition-transform duration-200 hover:-translate-y-[2px] hover:cursor-pointer hover:bg-gray-600 shadow-xl">
          <div className="text-left">
            <p className="text-[10px] uppercase leading-none">Download on the</p>
            <p className="text-xl font-semibold leading-tight">App Store</p>
          </div>
        </button>
        <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl  transition-transform duration-200 hover:-translate-y-[2px] hover:cursor-pointer hover:bg-gray-600 shadow-xl">
          <div className="text-left">
            <p className="text-[10px] uppercase leading-none">Get it on</p>
            <p className="text-xl font-semibold leading-tight">Google Play</p>
          </div>
        </button>
      </div></Fadeup>
    <Fadeup className='delay-200'>  <div className='mt-12 w-full max-w-[900px] mx-auto px-4 flex justify-center'>
        < img src={ hero } className='w-full block md:hidden h-auto max-h-[300px] object-cover rounded-2xl drop-shadow-2xl' />
        <div className='hidden md:block drop-shadow-2xl'>
        < Anime /> </div>
      </div></Fadeup>
    </section>
    </div>
  )
}
