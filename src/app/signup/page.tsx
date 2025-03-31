import { register } from '@/lib/actions/auth'

export default function SignupPage() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Créer un compte</h1>
      <form action={register} className="flex flex-col space-y-4">
        <input name="username" placeholder="Nom d'utilisateur" className="border p-2 rounded" />
        <input type="password" name="password" placeholder="Mot de passe" className="border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          S&apos;inscrire
        </button>
      </form>
    </div>
  )
}
