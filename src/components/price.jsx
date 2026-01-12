import React from 'react'
import Fadeup from './FadeUp'
import Light from './light'

export default function Price() {
  return (
    <section id='price' className="py-12 bg-white px-6">
      
    <Fadeup className='delay-200'>  <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Flexible Plans for Every <br /> User
        </h2>
        <p className="text-gray-500 text-sm">
          Start free, upgrade anytime. No hidden fees, cancel whenever.
        </p>
      </div></Fadeup>

      <div className='max-w-full mx-auto flex flex-row justify-center gap-6 items-center flex-wrap'>

      <Fadeup className='delay-200'> <div className='max-h-[600px] max-w-[400px] bg-indigo-50 rounded-3xl p-8 flex flex-col border border-purple-400 overflow-hidden'>
          <h1 className='text-2xl'>*Basic</h1>
          <div className='flex items-center gap-6'>
          <a className='text-4xl md:text-5xl font-bold text-black mb-4'>Free</a><a className='text-md text-gray-500'>(Forever)</a>
          </div>
          <p className='text-md text-gray-500'>->Book upto 2 appointments/month</p>
          <br/>
           <p className='text-md text-gray-500'>->Basic health tracking</p>
          <br/>
           <p className='text-md text-gray-500'>->Secure messaging</p>
          <br/>
           <p className='text-md text-gray-500'>->Digital prescription</p>
          <br/>
          <br/>
          <br/>
          <br/>

          <div className="text-center mt-12">
        <button className="bg-white text-purple-600 px-8 py-3 border-purple-600 border-2 rounded-full font-semibold hover:cursor-pointer  text-sm hover:bg-purple-600 hover:text-white transition-transform duration-200 hover:-translate-y-[2px] shadow-2xl flex items-center gap-2 mx-auto">
          Get Started
        </button>
      </div>
        </div></Fadeup>
      
      <Fadeup className='delay-200'><div className='max-h-[600px] max-w-[400px] border-indigo-50 rounded-3xl p-8 flex flex-col border bg-gradient-to-br from-[#9B7CF4] via-[#7E74E8] to-[#C58AF3] overflow-hidden'>
          <h1 className='text-2xl text-gray-50'>*Premium</h1>
          <div className='flex items-center gap-6'>
          <a className='text-4xl md:text-5xl font-bold text-indigo-50 mb-4'>$9.99</a><a className='text-md text-indigo-100'>per month</a>
          </div>
          <p className='text-md text-gray-50'>->Unlimited appointments</p>
          <br/>
           <p className='text-md text-gray-50'>->Advanced health analytics</p>
          <br/>
           <p className='text-md text-gray-50'>->video consultation</p>
          <br/>
           <p className='text-md text-gray-50'>->Family profiles(can used for upto 4)</p>
          <br/>
           <p className='text-md text-gray-50'>->Priority support</p>
          <br/>
           <p className='text-md text-gray-50'>->Lab result integration</p>
          <br/>
          <div className="text-center mt-6">
              <div className="absolute -translate-y-26 translate-x-12 z-10"><Light /></div>
        <button className="bg-white relative z-10 text-purple-600 px-8 py-3 border-white border-2 rounded-full font-semibold hover:cursor-pointer  text-sm hover:bg-purple-600 hover:text-white transition-transform duration-200 hover:-translate-y-[2px] shadow-2xl flex items-center gap-2 mx-auto">
         Get Started
        </button>
      </div>
        </div></Fadeup>

      <Fadeup className='delay-200'> <div className='max-h-[600px] max-w-[400px] bg-indigo-50 rounded-3xl p-8 flex flex-col border border-purple-400 overflow-hidden'>
          <h1 className='text-2xl'>*Family</h1>
          <div className='flex items-center gap-6'>
          <a className='text-4xl md:text-5xl font-bold text-black mb-4'>$19.99</a><a className='text-md text-gray-500'>per month</a>
          </div>
          <p className='text-md text-gray-500'>->Everything in premium</p>
          <br/>
           <p className='text-md text-gray-500'>->Unlimited pofiles for family members</p>
          <br/>
           <p className='text-md text-gray-500'>->Shared health dashboard</p>
          <br/>
           <p className='text-md text-gray-500'>->Medication management</p>
          <br/>
           <p className='text-md text-gray-500'>->Emergency contact</p>
          <br/>
           <p className='text-md text-gray-500'>->24/7 nurse hotline</p>
          <br/>

          <div className="text-center mt-6">
        <button className="bg-white text-purple-600 px-8 py-3 border-purple-600 border-2 rounded-full font-semibold hover:cursor-pointer  text-sm hover:bg-purple-600 hover:text-white transition-transform duration-200 hover:-translate-y-[2px] shadow-2xl flex items-center gap-2 mx-auto">
          Get Started
        </button>
      </div>
        </div></Fadeup>  
        </div>

    <Fadeup className='delay-200'>  <div className="text-center mt-12">
        <button className="bg-gradient-to-br from-[#9B7CF4] via-[#7E74E8] to-[#C58AF3] text-white px-8 py-3 rounded-full font-semibold hover:cursor-pointer  text-sm hover:bg-purple-900 transition-transform duration-200 hover:-translate-y-[2px] shadow-2xl flex items-center gap-2 mx-auto">
          Explore Full Features <p className='text-xl'>→</p>
        </button>
      </div> </Fadeup>

    </section>
  )
}
