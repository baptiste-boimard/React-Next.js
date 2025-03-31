'use client'

import { useState, useTransition } from 'react'
import { sendContactForm } from './actions'
import toast from 'react-hot-toast'

export default function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string[]>>({})
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    toast.promise(
      new Promise<void>((resolve, reject) => {
        startTransition(async () => {
          const res = await sendContactForm(formData)
          if (res.success) {
            setErrors({})
            resolve()
          } else {
            setErrors(res.errors || {})
            reject()
          }
        })
      }),
      {
        loading: 'Envoi en cours...',
        success: 'Message envoyé !',
        error: 'Erreur de validation !',
      }
    )
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contactez-nous</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Nom</label>
          <input name="name" className="border p-2 w-full" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name[0]}</p>}
        </div>

        <div>
          <label className="block">Email</label>
          <input name="email" type="email" className="border p-2 w-full" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email[0]}</p>}
        </div>

        <div>
          <label className="block">Message</label>
          <textarea name="message" className="border p-2 w-full" rows={4}></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message[0]}</p>}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Envoyer
        </button>
      </form>
    </div>
  )
}
