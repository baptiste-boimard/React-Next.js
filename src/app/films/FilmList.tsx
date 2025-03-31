'use client'

import { useEffect, useState } from 'react'

export default function FilmList() {
  const [films, setFilms] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      // sleep de 3 secondes pour montrer le spinner
      await new Promise((r) => setTimeout(r, 3000))

      const res = await fetch('https://ghibliapi.vercel.app/films')
      const data = await res.json()
      setFilms(data)
      setLoading(false)
    }

    load()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <span className="ml-2">Chargement des films...</span>
      </div>
    )
  }

  return (
    <ul className="list-disc pl-5">
      {films.slice(0, 10).map((film) => (
        <li key={film.id}>{film.title}</li>
      ))}
    </ul>
  )
}
