import express from 'express'
import gallery from './routes/gallery.router.js'

const app = express()
const PORT = process.env.PORT || 5001

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json()) // needed for axios requests
app.use(express.static('build'))

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/gallery', gallery)

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log('Listening on port: ', PORT)
})

export default app
