# Feature modules

Planned MVP domains: `admissions`, `academics`, `finance`, `activities`, `people`, `content`, and `audit`.

Every server mutation must verify the authenticated user and role. Database tables exposed through Supabase's Data API require explicit grants and RLS policies; browser code must use only the publishable key.
