'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import WelcomeBanner from '@/components/WelcomeBanner'

type Post = {
  id: string
  title: string
  media_url: string
  created_at: string
}

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClientComponentClient()
  const router = useRouter()

  useEffect(() => {
    const checkSessionAndFetch = async () => {
      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        router.push('/login')
        return
      }

      // User is authenticated → fetch posts
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('approved', true)
        .order('created_at', { ascending: false })

      if (error) {
        console.error(error)
      } else {
        setPosts(data || [])
      }

      setLoading(false)
    }

    checkSessionAndFetch()
  }, [supabase, router])

  if (loading) {
    return <p className="p-6">Loading...</p>
  }

  return (
    <main className="p-6">
      <WelcomeBanner />
      <h1 className="text-2xl font-bold mb-4">Skrooli Feed ✨</h1>

      {posts.length === 0 && <p>No posts yet.</p>}

      {posts.map((post) => (
        <div
          key={post.id}
          className="mb-6 border rounded p-4 shadow bg-white max-w-md"
        >
          <h2 className="font-semibold text-lg">{post.title}</h2>
          <video
            src={post.media_url}
            controls
            className="mt-2 rounded w-full"
          />
        </div>
      ))}
    </main>
  )
}
