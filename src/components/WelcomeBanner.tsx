'use client'

import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'

export default function WelcomeBanner() {
  const { user, loading } = useAuth()

  if (loading) return null

  return (
    <div className="bg-gray-100 p-4 text-center border-b border-gray-300">
      {user ? (
        <div className="flex justify-between items-center max-w-2xl mx-auto">
          <p className="text-sm">👋 Welcome, {user.email}</p>
          <form action="/logout" method="post">
            <button className="text-blue-600 hover:underline text-sm">Logout</button>
          </form>
        </div>
      ) : (
        <p className="text-sm">
          🕵️ Not logged in – <Link href="/login" className="underline">Log in</Link>
        </p>
      )}
    </div>
  )
}
