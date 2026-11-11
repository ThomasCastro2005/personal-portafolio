# Contenedor 1: web del portafolio (React + Vite servido con Nginx)

# Etapa 1: compilar el frontend
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etapa 2: servir los archivos estáticos con Nginx sin privilegios de root
FROM nginxinc/nginx-unprivileged:1.27-alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080

HEALTHCHECK --interval=10s --timeout=3s --retries=5 \
  CMD wget -qO- http://127.0.0.1:8080/ > /dev/null || exit 1
