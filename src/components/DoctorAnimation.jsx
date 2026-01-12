import React from 'react'
import Lottie from "lottie-react"
import animationData from './assets/Medicine.json'

export default function DoctorAnimation() {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className='w-160 h-160 '
      />
  )
}
