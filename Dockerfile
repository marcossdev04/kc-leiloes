# Dockerfile simples para produção
FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Build da aplicação usando yarn
FROM base AS builder
WORKDIR /app

# Aceitar argumentos de build para otimização extrema
ARG NODE_OPTIONS="--max-old-space-size=400"
ARG UV_THREADPOOL_SIZE=2

COPY package.json yarn.lock* ./
RUN yarn install --frozen-lockfile
COPY . .

# Definir variáveis de ambiente para o build
ENV NEXT_PUBLIC_API_BASE_URL=https://api.katiacasaes.com.br/
# Aplicar limites de memória extremos
ENV NODE_OPTIONS=${NODE_OPTIONS}
ENV UV_THREADPOOL_SIZE=${UV_THREADPOOL_SIZE}
# Cache do yarn em RAM para economizar I/O
ENV YARN_CACHE_FOLDER=/dev/shm/yarn_cache

RUN yarn build

# Instalar apenas dependências de produção
FROM base AS deps
COPY package.json yarn.lock* ./
# Configurar yarn para usar menos memória
ENV YARN_CACHE_FOLDER=/dev/shm/yarn_cache
RUN yarn install --production --frozen-lockfile --network-timeout 100000

# Imagem final
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Criar usuário não-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar arquivos necessários
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
