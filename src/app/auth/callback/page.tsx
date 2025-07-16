'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const handleAuth = async () => {
      const { error } = await supabase.auth.getSession()
      if (error) {
        console.error(error)
      }
      router.push('/') // Redirect to homepage after login
    }

    handleAuth()
  }, [router])

  return <p className="p-6">Signing you in...</p>
}
