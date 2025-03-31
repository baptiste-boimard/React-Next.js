/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from '@/db/client'
import { articles } from '@/db/schema'
import Link from 'next/link'

export default async function BlogPage() {
  const allArticles = await db.select().from(articles)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <ul className="space-y-2">
        {allArticles.map((article: any) => (
          <li key={article.id}>
            <Link href={`/blog/${article.id}`} className="text-blue-600 underline">
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
