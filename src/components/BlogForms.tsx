/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import { createArticle, updateArticle } from '@/lib/actions/blog'
import Editor from './Editor'

export function CreateForm() {
  const [content, setContent] = useState('')

  return (
    <form action={createArticle} className="space-y-4 bg-white p-4 rounded shadow">
      <input
        name="title"
        placeholder="Titre de l'article"
        className="w-full border border-gray-300 p-2 rounded font-medium bg-white text-black placeholder:text-black placeholder:opacity-100"
      />
      <input type="hidden" name="content" value={content} />
      <Editor content={content} onChange={setContent} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Créer
      </button>
    </form>
  )
}

export function EditForm({ article }: { article: any }) {
  const [content, setContent] = useState(article.content)
  const update = updateArticle.bind(null, article.id)

  return (
    <form action={update} className="space-y-4 bg-gray-50 p-4 rounded border shadow">
      <input
        name="title"
        defaultValue={article.title}
        className="w-full border border-gray-300 p-2 rounded font-medium bg-white text-black placeholder:text-black placeholder:opacity-100"
      />
      <input type="hidden" name="content" value={content} />
      <Editor content={content} onChange={setContent} />
      <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
        Mettre à jour
      </button>
    </form>
  )
}
