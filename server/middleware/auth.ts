// Middleware that uses the db util - triggers the bug
// The import chain: middleware -> utils/db -> hub:db
// hub:db accesses D1 binding at module load time = FAIL on CF Workers
import { getUsers } from '../utils/db'

export default defineEventHandler(async (event) => {
  // This line isn't even reached - the error happens at import time
  const users = await getUsers()
  event.context.userCount = users.length
})
