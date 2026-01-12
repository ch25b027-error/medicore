import React from 'react'
import Lottie from "lottie-react"
import animationData from './assets/lightning(neon).json'

export default function Light() {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className='w-46 h-46 '
      />
  )
}