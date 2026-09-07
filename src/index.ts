import express from 'express'

const app = express()

const PORT = 3000

app.use(express.json())

app.get('/api/', (_req, res) => {
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend ejecutándose en http://localhost:${PORT}`)
})