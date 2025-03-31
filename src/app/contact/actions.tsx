'use server'

import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Le nom est requis (min 2 caractères)'),
  email: z.string().email('Adresse email invalide'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
})

export async function sendContactForm(formData: FormData) {
  const values = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  }

  const result = schema.safeParse(values)

  await new Promise((r) => setTimeout(r, 2000)) // simulate loading

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    }
  }

  // (Tu pourrais ici envoyer un email, enregistrer en BDD, etc.)
  return { success: true }
}
