# Dockerfile otimizado para produção
FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Build da aplicação
FROM base AS builder
WORKDIR /app

# Aceitar argumentos de build para otimização
ARG NODE_OPTIONS="--max-old-space-size=200"
ARG UV_THREADPOOL_SIZE=1

COPY package.json yarn.lock* ./
# Configurar yarn para usar menos recursos
ENV YARN_CACHE_FOLDER=/tmp/yarn_cache_mini
ENV NODE_OPTIONS=${NODE_OPTIONS}
ENV UV_THREADPOOL_SIZE=${UV_THREADPOOL_SIZE}

RUN yarn install --frozen-lockfile --network-timeout 100000 --prefer-offline
COPY . .

# Definir variáveis de ambiente para o build
ENV NEXT_PUBLIC_API_BASE_URL=https://api.katiacasaes.com.br/
RUN yarn build

# Instalar apenas dependências de produção
FROM base AS deps
COPY package.json yarn.lock* ./
ENV YARN_CACHE_FOLDER=/tmp/yarn_cache_prod
ENV NODE_OPTIONS="--max-old-space-size=150"
RUN yarn install --production --frozen-lockfile --prefer-offline

# Imagem final
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Criar usuário não-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar arquivos necessários
COPY --from=deps --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/next.config.mjs ./next.config.mjs

USER nextjs
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["yarn", "start"]
