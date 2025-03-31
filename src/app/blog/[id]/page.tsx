/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from '@/db/client'
import { articles } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { notFound } from 'next/navigation'

export const revalidate = 60

export default async function ArticlePage(props: any) {
  const id = parseInt(props?.params?.id)

  // if (isNaN(id)) {
  //   return notFound()
  // }
  
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
