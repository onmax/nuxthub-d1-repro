// This file imports hub:db at module load time (common pattern)
// On Cloudflare Workers with D1, this causes "DB binding not found" error
// because D1 bindings are only available in request context
import { db } from 'hub:db'

export function getUsers() {
  return db.query.users.findMany()
}
