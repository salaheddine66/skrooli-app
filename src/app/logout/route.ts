// src/app/logout/route.ts
import { NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies as getCookies } from 'next/headers'

export async function POST() {
  const cookies = getCookies() // ✅ Appel correct
  const supabase = createRouteHandlerClient({ cookies })

  await supabase.auth.signOut()

  return NextResponse.redirect(new URL('/', process.env.NEXT_PUBLIC_SITE_URL)) // redirection propre
}
