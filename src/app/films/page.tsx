import { Suspense } from 'react'
import FilmList from './FilmList'

export default function FilmsPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Films Studio Ghibli</h1>
      <Suspense fallback={<p>Chargement...</p>}>
        <FilmList />
      </Suspense>
    </div>
  )
}
