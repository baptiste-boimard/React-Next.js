/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'

export default function Lottie404() {
  const [animationData, setAnimationData] = useState<any>(null)

  useEffect(() => {
    fetch('/lotties/animation.json')
      .then((res) => res.json())
      .then(setAnimationData)
  }, [])

  if (!animationData) return null

  return (
    <div className="w-[300px] h-[300px]">
      <Lottie animationData={animationData} loop />
    </div>
  )
}
