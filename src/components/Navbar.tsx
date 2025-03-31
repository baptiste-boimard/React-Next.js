'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex gap-4">
      <Link href="/" className="hover:underline">Accueil</Link>
      <Link href="/a-propos" className="hover:underline">À propos</Link>
      <Link href="/contact" className="hover:underline">Contact</Link>
      <Link href="/pokemon" className="hover:underline">Pokemon</Link>
      <Link href="/films" className="hover:underline">Films</Link>
    </nav>
  )
}
