# Contenedor 2: API del portafolio (Node.js + Express)
FROM node:22-alpine

ENV NODE_ENV=production
WORKDIR /app

# Solo dependencias de producción, instaladas desde el lockfile
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY server.js projects.json ./

# Carpeta de datos propiedad del usuario sin privilegios
RUN mkdir -p /app/data && chown -R node:node /app/data
USER node

EXPOSE 3000

HEALTHCHECK --interval=10s --timeout=3s --retries=5 \
  CMD wget -qO- http://127.0.0.1:3000/api/health || exit 1

CMD ["node", "server.js"]
