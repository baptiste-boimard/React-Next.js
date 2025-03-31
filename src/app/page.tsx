import Image from 'next/image'

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl mb-4">Bienvenue sur la page d&apos;accueil !</h1>
      <Image
        src="/images/image.jpg"
        alt="Une belle image"
        width={400}
        height={400}
        className="rounded shadow-lg"
        priority
      />
    </div>
  )
}
