'use server'

import { db } from '@/db/client'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm'
import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


// Signup
export async function register(formData: FormData) {
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  const hash = await bcrypt.hash(password, 10)
  await db.insert(users).values({ username, password: hash })

  const cookieStore = cookies() as ReturnType<typeof cookies>
  ;(await cookieStore).set('session', username)
}

// Login
export async function login(formData: FormData) {
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  const user = await db.query.users.findFirst({
    where: eq(users.username, username),
  })

  if (!user) {
    console.error("Utilisateur inconnu")
    return
  }

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) {
    console.error("Mot de passe invalide")
    return
  }

  const cookieStore = cookies() as ReturnType<typeof cookies>
  ;(await cookieStore).set('session', username)
  redirect('/')
}
