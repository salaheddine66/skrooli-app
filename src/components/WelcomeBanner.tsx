'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function WelcomeBanner() {
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setEmail(user.email)
      }
    }

    fetchUser()
  }, [])

  return (
    <div className="p-4 bg-blue-100 rounded mb-4">
      {email ? `👋 Welcome, ${email}` : '🕵️ Not logged in'}
    </div>
  )
}
