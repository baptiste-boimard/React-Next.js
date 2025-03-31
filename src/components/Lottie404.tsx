'use client'

import Lottie from 'lottie-react'
import animation404 from '../app/lotties/animation.json'

export default function Lottie404() {
  return (
    <div className="w-[300px] h-[300px]">
      <Lottie animationData={animation404} loop />
    </div>
  )
}
