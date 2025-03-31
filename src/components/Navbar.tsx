'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const hasSession = document.cookie.includes('session=')
    setIsLoggedIn(hasSession)
  }, [pathname])
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex gap-4">
      <Link href="/">Accueil</Link>
      <Link href="/a-propos">À propos</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/pokemon">Pokemon</Link>
      <Link href="/films">Films</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/signup">Inscription</Link>
      <Link href="/login">Connexion</Link>

      {isLoggedIn && (
        <Link href="/admin" className="text-green-400 font-semibold">Admin</Link>
      )}
    </nav>
  )
}
