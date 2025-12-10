# NuxtHub D1 Binding Bug Repro

Minimal reproduction for [nuxt-hub/core#692](https://github.com/nuxt-hub/core/issues/692).

## Problem

D1 binding accessed at module load time. On Cloudflare Workers, bindings are only available in request context, causing `DB binding not found` error when deployed.

## Quick Repro (copy-paste)

```bash
git clone https://github.com/onmax/nuxthub-d1-repro.git
cd nuxthub-d1-repro
pnpm install
NITRO_PRESET=cloudflare-module pnpm build
cat node_modules/.cache/nuxt/.nuxt/hub/db.mjs
```

You'll see the bug - binding accessed at module load time:
```js
const binding = process.env.DB || globalThis.__env__?.DB || globalThis.DB
const db = drizzle(binding, { schema })  // <- runs immediately at import
```

## Verify the Fix

```bash
git checkout with-fix
pnpm install
NITRO_PRESET=cloudflare-module pnpm build
cat node_modules/.cache/nuxt/.nuxt/hub/db.mjs
```

With the fix - lazy binding via Proxy:
```js
let _db
function getDb() {
  if (!_db) {
    const binding = process.env.DB || globalThis.__env__?.DB || globalThis.DB
    if (!binding) throw new Error('DB binding not found')
    _db = drizzle(binding, { schema })
  }
  return _db
}
const db = new Proxy({}, { get(_, prop) { return getDb()[prop] } })
```

## Links

- Issue: https://github.com/nuxt-hub/core/issues/692
- Fix PR: https://github.com/nuxt-hub/core/pull/694
- Branch with fix: [`with-fix`](https://github.com/onmax/nuxthub-d1-repro/tree/with-fix)
