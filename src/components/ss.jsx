import React from 'react'
import ss1 from './assets/ss1.png'
import ss2 from './assets/ss2.png'
import ss3 from './assets/ss3.png'
import Fadeup from './FadeUp'

export default function Ss() {
  return (
    <section className=' bg-gradient-to-r from-[#E2D9FF] via-[#F1F3FF] to-[#FFE3CF]'>
      <Fadeup className='delay-200'> <div className="text-center py-10 mb-6">  
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Why Thousands Trust<br/>MediCare
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-sm">
          See how our App MediCare cares about our Health.
        </p>
       </div> </Fadeup>

      <div className='pb-10 flex gap-6 flex-wrap justify-center items-center'>
    <Fadeup className='delay-200'>   <img src={ ss1 } className='w-300px h-auto max-h-[400px] object-cover rounded-xl drop-shadow-xl' /> </Fadeup>
    <Fadeup className='delay-200'>   <img src={ ss2 } className='w-300px h-auto max-h-[400px] object-cover rounded-xl drop-shadow-xl' /> </Fadeup>
    <Fadeup className='delay-200'>  <img src={ ss3 } className='w-300px h-auto max-h-[400px] object-cover rounded-xl drop-shadow-xl' />  </Fadeup>
      </div> 
    </section>
  )
}
