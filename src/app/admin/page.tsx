import { db } from '@/db/client'
import { articles } from '@/db/schema'
import { CreateForm, EditForm } from '../../components/BlogForms'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function AdminPage() {
  const session = (await cookies()).get('session')
  if (!session) redirect('/login')

  const existingArticles = await db.select().from(articles)

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🛠 Espace Admin</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2 text-blue-600">✍️ Créer un nouvel article</h2>
        <CreateForm />
      </section>

      <hr className="my-10 border-t-2 border-gray-300" />

      <section>
        <h2 className="text-xl font-semibold mb-4 text-green-700">📚 Modifier les articles existants</h2>
        <div className="space-y-10">
          {existingArticles.map((article) => (
            <EditForm key={article.id} article={article} />
          ))}
        </div>
      </section>
    </main>
  )
}
