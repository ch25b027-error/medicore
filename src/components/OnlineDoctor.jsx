import React from 'react'
import Lottie from "lottie-react"
import animationData from "./assets/Online Doctor.json"

export default function Online() {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className='w-92 h-92 '
      />
  )
}