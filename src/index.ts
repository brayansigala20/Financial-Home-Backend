import express from 'express'

const app = express()

const PORT = 3000

app.use(express.json())

app.get('/api/hello', (_req, res) => {
  res.json({
    message: 'Hola desde el backend desde el servidor prueba 2'
  })
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend ejecutándose en http://localhost:${PORT}`)
})