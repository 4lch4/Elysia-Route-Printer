import { Elysia } from 'elysia'
import { printRoutes } from 'elysia-route-printer'

export const app = new Elysia().get('/hello', () => 'OK').listen(8080)

printRoutes(app)

console.log('Server is online!')