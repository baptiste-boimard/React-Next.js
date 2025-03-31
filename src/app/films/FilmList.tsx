/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function FilmList() {
  await new Promise((r) => setTimeout(r, 3000)) // simulate delay
  const res = await fetch('https://ghibliapi.vercel.app/films', {
    cache: 'no-store',
  })
  const data = await res.json()

  return (
    <ul className="list-disc pl-5">
      {data.slice(0, 10).map((film: any) => (
        <li key={film.id}>{film.title}</li>
      ))}
    </ul>
  )
}
