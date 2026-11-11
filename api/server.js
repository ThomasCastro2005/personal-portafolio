import express from 'express'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { hostname } from 'node:os'
import path from 'node:path'

const PORT = Number(process.env.PORT ?? 3000)
const DATA_DIR = process.env.DATA_DIR ?? './data'
const APP_NAME = process.env.APP_NAME ?? 'portafolio-api'
const MESSAGES_FILE = path.join(DATA_DIR, 'mensajes.json')

const projects = JSON.parse(await readFile(new URL('./projects.json', import.meta.url), 'utf8'))

const app = express()
app.disable('x-powered-by')
app.use(express.json({ limit: '10kb' }))

// Cabeceras básicas de seguridad para todas las respuestas
app.use((_req, res, next) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'no-referrer',
  })
  next()
})

// Registro simple de peticiones: permite ver en `docker compose logs api`
// que las llamadas llegan desde el contenedor web
app.use((req, _res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.originalUrl} desde ${req.ip}`)
  next()
})

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', servicio: APP_NAME, contenedor: hostname(), fecha: new Date().toISOString() })
})

app.get('/api/projects', (_req, res) => {
  res.json(projects)
})

async function readMessages() {
  try {
    return JSON.parse(await readFile(MESSAGES_FILE, 'utf8'))
  } catch {
    return []
  }
}

app.get('/api/contact', async (_req, res) => {
  const messages = await readMessages()
  res.json({ total: messages.length })
})

app.post('/api/contact', async (req, res) => {
  const { nombre, email, mensaje } = req.body ?? {}
  const isText = (v, max) => typeof v === 'string' && v.trim().length > 0 && v.length <= max
  if (!isText(nombre, 80) || !isText(mensaje, 1000) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email ?? '')) {
    return res.status(400).json({ error: 'Datos inválidos: nombre, email y mensaje son obligatorios' })
  }
  const messages = await readMessages()
  messages.push({ nombre: nombre.trim(), email, mensaje: mensaje.trim(), fecha: new Date().toISOString() })
  await mkdir(DATA_DIR, { recursive: true })
  await writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2))
  res.status(201).json({ ok: true, total: messages.length })
})

app.use((_req, res) => res.status(404).json({ error: 'No encontrado' }))

const server = app.listen(PORT, () => {
  console.log(`${APP_NAME} escuchando en el puerto ${PORT}`)
})

// Apagado ordenado cuando Docker detiene el contenedor
for (const signal of ['SIGTERM', 'SIGINT']) {
  process.on(signal, () => server.close(() => process.exit(0)))
}
