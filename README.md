# Malex School Portal

Responsive public website and role-based school management portal for Malex International School, Enugu.

## Start locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The public homepage, admissions entry route, and portal entry route are scaffolded. Supabase, Paystack, and email integration remain disconnected until credentials and the PRD's open policy decisions are supplied.

The demo photography is sourced from Unsplash and stored locally for predictable performance. Replace it with approved Malex photography before launch.

## Architecture

- Next.js App Router, React, TypeScript, Tailwind CSS v4
- `src/app` for routes and layouts; `src/features` for domain modules
- Supabase planned for Postgres, Auth, RLS, and private Storage
- Paystack planned for verified NGN payments and signed webhooks

Before data implementation, define the role-policy matrix, enable RLS on every exposed table, and test positive and negative access paths for every role.
