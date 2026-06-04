# The Enclave Milton — Site C (`theenclavemiltontowns.com`)

GEO-heavy alternate landing site for The Enclave Milton by Sundial Homes. Forked from Site B with distinct typography (Fraunces + Plus Jakarta Sans), editorial location tables, and rewritten copy.

## Domain & leads

| Constant | Value |
|----------|--------|
| Canonical | `https://www.theenclavemiltontowns.com` |
| Supabase `source` | `theenclavemiltontowns.com` |
| `form_name` | `Site C Registration` (hidden) |
| Leads table | `enclave` (shared with Site A & B) |

## Local development

```bash
cp .env.example .env.local
# Add SUPABASE_SERVICE_ROLE_KEY from Site A Vercel or Supabase Dashboard → Settings → API
npm install && npm run dev
```

## Deploy (Vercel)

1. New project or import repo; domain `www.theenclavemiltontowns.com` (apex → www).
2. Set `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, optional `REGISTRATION_WEBHOOK_URL`.
3. `npm run build` or push to `main`.

## Pages

- `/` — collections, GEO location hub (5 question-first sections), 35+ FAQs
- `/floor-plans` + 15 SSG model pages
- `/schools-and-area` — full school, commute, shopping, recreation, healthcare tables
- `/api/register` → `public.enclave`
