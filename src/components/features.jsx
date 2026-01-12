import React from 'react'
import Fadeup from './FadeUp'
import Online from './OnlineDoctor'

export default function Features() {
  return (
    <section id="features" className="py-4 px-6 bg-white">
    <Fadeup className='delay-200'>  <div className="text-center mb-1">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Why Thousands Trust<br/>MediCare
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-sm">
          Comprehensive healthcare management designed with simplicity and <br/> security in mind.
        </p>
      </div></Fadeup>

      <Fadeup className='delay-200'>
         
         <div className='flex justify-center items-center pb-2 mb-6 border-1 rounded-3xl bg-indigo-50 border-purple-500'><Online /></div>
            
      </Fadeup>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-center">
        
      <Fadeup className='delay-200'>  <div className=" bg-indigo-50 rounded-3xl p-8 flex flex-col items-center justify-center border border-purple-400 overflow-hidden max-w-[350px] min-h-[300px]">
          <div className="text-center ">
          <div className='font-bold text-2xl'>Easy Appointment Booking</div>
          <p className="text-md text-gray-500 mt-2">Find doctors and book visits within seconds. Browse by speciality, location and availability.</p>
          <div className='hover:text-gray-700 mt-2 text-lg transition-transform duration-200 hover:-translate-y-[2px]'>Learn More → </div>
          </div>
        </div></Fadeup>

      <Fadeup className='delay-200'> <div className="bg-indigo-50 rounded-3xl p-8 flex flex-col items-center justify-center border border-purple-400 overflow-hidden max-w-[350px] min-h-[300px]">
          <div className="text-center ">
            <h3 className="font-bold text-2xl">Digital Health Records</h3>
            <p className="text-md text-gray-500 mt-2">Access and share your prescriptions, lab results and medical history secuerly with just one tap.
            </p>
            <div className='hover:text-gray-700 mt-2 text-lg transition-transform duration-200 hover:-translate-y-[2px]'>Learn More → </div>
          </div>
        </div></Fadeup>
        
       <Fadeup className='delay-200'>  <div className="bg-indigo-50 rounded-3xl p-8 flex flex-col items-center justify-center border border-purple-400 overflow-hidden max-w-[350px] min-h-[300px]">
          <div className="text-center ">
            <h3 className="font-bold text-2xl">Instant Telehealth</h3>
            <p className="text-md text-gray-500 mt-2">Video consult with certified doctors anytime, anywhere. No waiting rooms required.</p>
            <div className='hover:text-gray-700 mt-2 text-lg transition-transform duration-200 hover:-translate-y-[2px]'>Learn More → </div>
          </div>
        </div></Fadeup>

       <Fadeup className='delay-200'> <div className="bg-indigo-50 rounded-3xl p-8 flex flex-col items-center justify-center border border-purple-400 overflow-hidden max-w-[350px] min-h-[300px]">
          <div className="text-center ">
            <h3 className="font-bold text-2xl">Health Tracker</h3>
            <p className="text-md text-gray-500 mt-2">Login and give some description once we will give you medication and sleep reminders that keep you on track.</p>
            <div className='hover:text-gray-700 mt-2 text-lg transition-transform duration-200 hover:-translate-y-[2px]'>Learn More → </div>
          </div>
        </div></Fadeup>

       <Fadeup className='delay-200'> <div className="bg-indigo-50 rounded-3xl p-8 flex flex-col items-center justify-center border border-purple-400 overflow-hidden max-w-[350px] min-h-[300px]">
          <div className="text-center ">
            <h3 className="font-bold text-2xl">Secure & Encrypted</h3>
            <p className="text-md text-gray-500 mt-2">HIPPA-complaint data security with end to end encryption and privacy controls.</p>
            <div className='hover:text-gray-700 mt-2 text-lg transition-transform duration-200 hover:-translate-y-[2px]'>Learn More → </div>
          </div>
        </div></Fadeup>

       <Fadeup className='delay-200'>  <div className="bg-indigo-50 rounded-3xl p-8 flex flex-col items-center justify-center border border-purple-400 overflow-hidden max-w-[350px] min-h-[300px]">
          <div className="text-center ">
            <h3 className="font-bold text-2xl">Experianced Doctors</h3>
            <p className="text-md text-gray-500 mt-2">You can get advices or medical prescriptions from certified doctors through both online and offline.</p>
            <div className='hover:text-gray-700 mt-2 text-lg transition-transform duration-200 hover:-translate-y-[2px]'>Learn More → </div>
          </div>
        </div></Fadeup>
        
      </div>
    <Fadeup className='delay-200'>  <div className="text-center mt-12">
        <button className="bg-gradient-to-br from-[#9B7CF4] via-[#7E74E8] to-[#C58AF3] text-white px-8 py-3 rounded-full font-semibold hover:cursor-pointer  text-sm hover:bg-purple-900 transition-transform duration-200 hover:-translate-y-[2px] shadow-2xl flex items-center gap-2 mx-auto">
          Explore Full Features <p className='text-xl'>→</p>
        </button>
      </div></Fadeup>
    </section>
  )
}
