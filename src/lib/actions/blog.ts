'use server'

import { db } from '@/db/client'
import { articles } from '@/db/schema'
import { revalidatePath } from 'next/cache'
import { eq } from 'drizzle-orm'

export async function createArticle(formData: FormData) {
  const title = formData.get('title') as string
  const content = formData.get('content') as string

  await db.insert(articles).values({ title, content })
  revalidatePath('/blog') // 🧼 revalider la liste
}

export async function updateArticle(id: number, formData: FormData) {
  const title = formData.get('title') as string
  const content = formData.get('content') as string

  await db.update(articles)
    .set({ title, content })
    .where(eq(articles.id, id))

  revalidatePath(`/blog/${id}`) // 🧠 invalide la page ISR
}
