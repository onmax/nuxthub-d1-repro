# NuxtHub D1 Binding Bug - WITH FIX

This branch demonstrates the fix for [nuxt-hub/core#692](https://github.com/nuxt-hub/core/issues/692).

## What's different

Uses `@nuxthub/core` from PR #694 which includes lazy D1 binding access.

## Verify the fix

```bash
pnpm install
NITRO_PRESET=cloudflare-module pnpm build

# Check generated code - binding is now lazy:
cat node_modules/.cache/nuxt/.nuxt/hub/db.mjs
```

**Before (bug):**
```js
const binding = process.env.DB || globalThis.__env__?.DB || globalThis.DB
const db = drizzle(binding, { schema })
```

**After (fix):**
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

The binding is now only accessed when actually querying the database, not at module load time.

## Links

- Issue: https://github.com/nuxt-hub/core/issues/692
- Fix PR: https://github.com/nuxt-hub/core/pull/694
