import Lottie404 from '../components/Lottie404'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <Lottie404 />
      <h1 className="text-3xl font-bold mt-4 text-red-600">Erreur 404</h1>
      <p className="mt-2 text-lg">Oups ! La page que vous cherchez n&apos;existe pas.</p>
    </div>
  )
}
