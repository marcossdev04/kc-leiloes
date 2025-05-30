# Dockerfile simples para produção
FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Build da aplicação usando yarn
FROM base AS builder
WORKDIR /app
COPY package.json yarn.lock* ./
RUN yarn install --frozen-lockfile
COPY . .
# Definir variáveis de ambiente para o build
ENV NEXT_PUBLIC_API_BASE_URL=https://api.katiacasaes.com.br/
RUN yarn build

# Instalar apenas dependências de produção
FROM base AS deps
COPY package.json yarn.lock* ./
RUN yarn install --production --frozen-lockfile

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
