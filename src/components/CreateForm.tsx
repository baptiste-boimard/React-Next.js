'use client'

import { useState } from 'react'
import { createArticle } from '@/lib/actions/blog'
import Editor from '@/components/Editor'

export function CreateForm() {
  const [content, setContent] = useState('')

  return (
    <form action={createArticle} className="space-y-4">
      <input name="title" placeholder="Titre" className="w-full border border-gray-300 p-2 rounded font-medium bg-white text-black placeholder:text-black placeholder:opacity-100" />
      <input type="hidden" name="content" value={content} />
      <Editor content={content} onChange={setContent} />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Créer</button>
    </form>
  )
}
