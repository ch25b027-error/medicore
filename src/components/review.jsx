import React from 'react'
import Fadeup from './FadeUp'

export default function Review() {
  return (
     <div id='review' className="py-24 bg-gradient-to-r from-[#E2D9FF] via-[#F1F3FF] to-[#FFE3CF]">
    <Fadeup className='delay-200'>  <div className="text-center mb-16">
        <p className="text-4xl font-bold text-gray-900 mb-4">Real People. Real Results.</p>
        <p className="text-gray-500 text-sm">Thousands trust Curely for their healthcare needs</p>
      </div> </Fadeup>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 px-6">
        
     
      <Fadeup className='delay-200'>  <div className="bg-indigo-100 p-8 rounded-[30px] border border-purple-500">
          <div className="flex items-center gap-4 mb-4">
            <img src="https://ui-avatars.com/api/?name=Pikachu&background=random" className="w-12 h-12 rounded-full" alt="user" />
            <div>
              <p className="font-bold text-gray-900 text-sm">Pikachu</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            "I never thought seeing a doctor could be this easy. Curely made it simple and fast!"
          </p>
          <div className="flex gap-1 text-yellow-500 text-md">
            <p>Rating: 8.5</p>
          </div>
        </div></Fadeup>

      <Fadeup className='delay-200'>  <div className="bg-indigo-100 p-8 rounded-[30px] border border-purple-500">
          <div className="flex items-center gap-4 mb-4">
            <img src="https://ui-avatars.com/api/?name=Charmander&background=random" className="w-12 h-12 rounded-full" alt="user" />
            <div>
              <p className="font-bold text-gray-900 text-sm">Charmander</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            "Perfect for managing my parents' medications and appointments from one place."
          </p>
          <div className="flex gap-1 text-yellow-500 text-md">
            <p>Rating: 9</p>
          </div>
        </div></Fadeup>

      <Fadeup className='delay-200'> <div className="bg-indigo-100 p-8 rounded-[30px] border border-purple-500">
          <div className="flex items-center gap-4 mb-4">
            <img src="https://ui-avatars.com/api/?name=Squirtle&background=random" className="w-12 h-12 rounded-full" alt="user" />
            <div>
              <p className="font-bold text-gray-900 text-sm">Squirtle</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            "The telehealth feature saved me so much time. Professional doctors, great service!"
          </p>
          <div className="flex gap-1 text-yellow-500 text-md">
            <p>Rating: 8.5</p>
          </div>
        </div></Fadeup>

      <Fadeup className='delay-200'> <div className="bg-indigo-100 p-8 rounded-[30px] border border-purple-500">
          <div className="flex items-center gap-4 mb-4">
            <img src="https://ui-avatars.com/api/?name=Bulbasaur&background=random" className="w-12 h-12 rounded-full" alt="user" />
            <div>
              <p className="font-bold text-gray-900 text-sm">Bulbasaur</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            "The app is very easy to use which is very helpful for parents, great app for healthcare!"
          </p>
          <div className="flex gap-1 text-yellow-500 text-md">
            <p>Rating: 8</p>
          </div>
        </div></Fadeup>

      <Fadeup className='delay-200'>  <div className="bg-indigo-100 p-8 rounded-[30px] border border-purple-500">
          <div className="flex items-center gap-4 mb-4">
            <img src="https://ui-avatars.com/api/?name=Mewtwo&background=random" className="w-12 h-12 rounded-full" alt="user" />
            <div>
              <p className="font-bold text-gray-900 text-sm">Mewtwo</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            "I have been using this app for few months and it is amazingly good, keep up the work!"
          </p>
          <div className="flex gap-1 text-yellow-500 text-md">
            <p>Rating: 9.5</p>
          </div>
        </div></Fadeup>

      <Fadeup className='delay-200'>  <div className="bg-indigo-100 p-8 rounded-[30px] border border-purple-500">
          <div className="flex items-center gap-4 mb-4">
            <img src="https://ui-avatars.com/api/?name=Mew&background=random" className="w-12 h-12 rounded-full" alt="user" />
            <div>
              <p className="font-bold text-gray-900 text-sm">Mew</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            "The app have many features and price of premium pack is also worthful, great service!"
          </p>
          <div className="flex gap-1 text-yellow-500 text-md">
            <p>Rating: 8.5</p>
          </div>
        </div></Fadeup>


      </div>
    </div>
  )
}
