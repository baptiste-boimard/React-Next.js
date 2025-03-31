/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import { updateArticle } from '@/lib/actions/blog'
import Editor from '@/components/Editor'

export function EditForm({ article }: { article: any }) {
  const [content, setContent] = useState(article.content)

  const update = updateArticle.bind(null, article.id)

  return (
    <form action={update} className="space-y-2 border-t pt-4 mt-4">
      <input name="title" defaultValue={article.title} className="border p-2 w-full" />
      <input type="hidden" name="content" value={content} />
      <Editor content={content} onChange={setContent} />
      <button type="submit" className="bg-yellow-600 text-white px-3 py-1 rounded">Modifier</button>
    </form>
  )
}
