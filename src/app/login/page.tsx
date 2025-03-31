import { login } from '@/lib/actions/auth'

export default function LoginPage() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Connexion</h1>
      <form action={login} className="flex flex-col space-y-4">
        <input name="username" placeholder="Nom d'utilisateur" className="border p-2 rounded" />
        <input type="password" name="password" placeholder="Mot de passe" className="border p-2 rounded" />
        <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
          Se connecter
        </button>
      </form>
    </div>
  )
}
