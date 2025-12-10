import { getUsers } from '../utils/db'

export default defineEventHandler(() => getUsers())
