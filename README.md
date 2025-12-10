# NuxtHub D1 Binding Bug - WITH FIX

Uses `@nuxthub/core` from [PR #694](https://github.com/nuxt-hub/core/pull/694) with lazy D1 binding.

## Verify

```bash
git clone -b with-fix https://github.com/onmax/nuxthub-d1-repro.git && cd nuxthub-d1-repro
pnpm install && NITRO_PRESET=cloudflare-module pnpm build
cat node_modules/.cache/nuxt/.nuxt/hub/db.mjs
```

## Links

- [Issue #692](https://github.com/nuxt-hub/core/issues/692)
- [Fix PR #694](https://github.com/nuxt-hub/core/pull/694)
- [Diff between branches](https://github.com/onmax/nuxthub-d1-repro/pull/1)
