# NuxtHub D1 Binding Bug Repro

Minimal reproduction for [nuxt-hub/core#692](https://github.com/nuxt-hub/core/issues/692).

## Problem

D1 binding accessed at module load time. On Cloudflare Workers, bindings are only available in request context, causing `DB binding not found` error when deployed to Cloudflare (works locally with `wrangler dev` because local mode is more lenient).

## Repro Steps

```bash
pnpm install
NITRO_PRESET=cloudflare-module pnpm build

# Check generated code - binding accessed at module load:
cat node_modules/.cache/nuxt/.nuxt/hub/db.mjs
# Output shows: const binding = process.env.DB || globalThis.__env__?.DB || globalThis.DB
# This runs at import time, before request context exists

# Deploy to Cloudflare (will fail in production)
pnpm wrangler deploy
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
