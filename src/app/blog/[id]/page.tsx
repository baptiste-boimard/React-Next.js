import { db } from '@/db/client'
import { articles } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { notFound } from 'next/navigation'

export const revalidate = 60

type Props = {
  params: {
    id: string
  }
}

export default async function ArticlePage({ params }: Props) {
  const id = parseInt(params.id)

  // 🚫 Si l'id n'est pas un nombre valide : 404
  if (isNaN(id)) {
    return notFound()
  }

  const article = await db
    .select()
    .from(articles)
    .where(eq(articles.id, id))
    .then(res => res[0])

  if (!article) return notFound()

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-lg">{article.content}</p>
    </div>
  )
}
