# NuxtHub D1 Binding Bug Repro

Repro for [nuxt-hub/core#692](https://github.com/nuxt-hub/core/issues/692). Fix: [PR #694](https://github.com/nuxt-hub/core/pull/694)

## Repro

```bash
git clone https://github.com/onmax/nuxthub-d1-repro.git && cd nuxthub-d1-repro
pnpm install && NITRO_PRESET=cloudflare-module pnpm build
cat node_modules/.cache/nuxt/.nuxt/hub/db.mjs
```

## Branches

- `main` - shows bug (binding accessed at module load)
- `with-fix` - shows fix (lazy Proxy)
- [PR diff](https://github.com/onmax/nuxthub-d1-repro/pull/1)
