# Skrooli

🚀 Skrooli is a modern social platform prototype for high-quality scrolling content, inspired by TikTok and Instagram.

## Getting Started

Run the development server:

```bash
npm run dev
```

[ User Browser / Mobile ]
│
▼
[ Vercel + Next.js ]
│
┌───────┼────────────────────────────────────┐
│ ▼ │
│ API Routes (/api/...) │
│ │ │
│ ▼ │
│ [ Supabase: DB + Auth + Storage ] │
│ │ │
│ ▼ │
│ PostgreSQL + Row-Level Security │
│ │ │
│ Real-Time + Edge Functions │
└────────────────────────────────────────────┘

Database Design (Visual Reference)
users ─────┬────────> posts ─────┐
│ ├────> comments
└─────> follows └────> likes
↳ moderation_queue

skrooli-app/
├── app/
│ ├── page.tsx # Landing page (can be feed later)
│ ├── upload/ # Upload page (form)
│ └── profile/ # User profile page
├── components/
│ ├── PostCard.tsx # UI for displaying a post
│ └── Navbar.tsx # Navigation bar
├── lib/
│ └── supabaseClient.ts # Supabase client
├── types/
│ └── database.types.ts # Types from Supabase
├── .env.local
├── tailwind.config.js
└── next.config.js
