# NuxtHub D1 Binding Bug - WITH FIX

This branch demonstrates the fix for [nuxt-hub/core#692](https://github.com/nuxt-hub/core/issues/692).

## Quick Verify (copy-paste)

```bash
git clone -b with-fix https://github.com/onmax/nuxthub-d1-repro.git nuxthub-d1-repro-fix
cd nuxthub-d1-repro-fix
pnpm install
NITRO_PRESET=cloudflare-module pnpm build
cat node_modules/.cache/nuxt/.nuxt/hub/db.mjs
```

You'll see the fix - lazy binding via Proxy:
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

## What's different

Uses `@nuxthub/core` from PR #694 which includes lazy D1 binding access.

**Before (bug on `main` branch):**
```js
const binding = process.env.DB || globalThis.__env__?.DB || globalThis.DB
const db = drizzle(binding, { schema })  // <- runs immediately at import
```

**After (fix on this branch):**
Binding only accessed when actually querying the database, not at module load time.

## Links

- Issue: https://github.com/nuxt-hub/core/issues/692
- Fix PR: https://github.com/nuxt-hub/core/pull/694
- Branch with bug: [`main`](https://github.com/onmax/nuxthub-d1-repro/tree/main)
