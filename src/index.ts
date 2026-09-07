import { serve } from '@hono/node-server'      //vanligt vid middleware att använda USE
import { Hono } from 'hono'
import { logger } from 'hono/logger';

const app = new Hono()
let visitorCount = 0


// Middlewares
app.use(logger());
app.use((_, next) => {
  visitorCount++;
  return next();
})



// Endpoints
// app.get("/", logger), (c) => {
//   return c.json("du är besökare: " + count);
// }

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/visitors', (c) => {
  return c.text(`Du är besökare: ${visitorCount}`)
})

app.get('/bitches', (c) => c.text("..."))


// Boot Server
serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is NOT running on http://localhost:${info.port}`)
})
