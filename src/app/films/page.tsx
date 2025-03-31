/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Suspense } from 'react'
// import FilmList from './FilmList'

// export default function FilmsPage() {
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Films Studio Ghibli</h1>
//       <Suspense fallback={<p>Chargement...</p>}>
//         <FilmList />
//       </Suspense>
//     </div>
//   )
// }

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const FilmList = dynamic(() => import('./FilmList'), {
  suspense: true,
} as any)

export default function FilmsPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Films Studio Ghibli</h1>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-40">
            <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            <span className="ml-2">Chargement des films...</span>
          </div>
        }
      >
        <FilmList />
      </Suspense>
    </div>
  )
}
