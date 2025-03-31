'use client'

import Lottie from 'lottie-react'
import animation404 from '../../public/Animations/animation.json'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <div className="w-[300px] h-[300px]">
        <Lottie animationData={animation404} loop />
      </div>
      <h1 className="text-3xl font-bold mt-4 text-white-600">Erreur 404</h1>
      <p className="mt-2 text-lg">Oups ! La page que vous cherchez n&apos;existe pas.</p>
    </div>
  )
}
