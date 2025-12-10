# NuxtHub D1 Binding Bug Repro

Minimal reproduction for [nuxt-hub/core#692](https://github.com/nuxt-hub/core/issues/692).

## Problem

D1 binding accessed at module load time. On Cloudflare Workers, bindings are only available in request context, causing `DB binding not found` error.

## Repro Steps

```bash
pnpm install
NITRO_PRESET=cloudflare-module pnpm build
pnpm wrangler dev
# Visit http://localhost:8787 -> Error: DB binding not found
```

## Structure

```
server/
├── db/schema.ts          # Drizzle schema
├── utils/db.ts           # Imports hub:db at module level
├── middleware/auth.ts    # Imports utils/db -> triggers bug
└── api/users.get.ts      # API route
```

The bug triggers because middleware imports `utils/db.ts`, which imports `hub:db`. The D1 binding lookup happens immediately at import time, before any request context exists.

## Fix

PR: https://github.com/nuxt-hub/core/pull/694

Use Proxy for lazy binding access - binding only resolved when actually querying.
