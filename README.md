# Elysia Route Printer

This is a simple tool to print the routes of an API made with the Elysia framework.

## Usage

```typescript
import { Elysia } from 'elysia'
import { printRoutes } from 'elysia-route-printer'

export const app = new Elysia().get('/hello', () => 'OK').listen(8080)

printRoutes(app.routes)

console.log('Server is online!')
```
