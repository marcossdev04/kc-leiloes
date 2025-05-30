# 🐳 KC Leilões - Deploy Simples com Docker

Configuração simples para deploy usando Docker + Cloudflare Tunnel.

## 🚀 Como usar

### 1. Deploy completo (recomendado)
```bash
./deploy.sh deploy
```

### 2. Comandos individuais
```bash
# Build da imagem
./deploy.sh build

# Iniciar aplicação
./deploy.sh start

# Parar aplicação
./deploy.sh stop

# Ver logs
./deploy.sh logs

# Status
./deploy.sh status
```

### 3. Configurar tunnel
Após a aplicação estar rodando na porta 8000:

```bash
# No servidor
cloudflared tunnel run --url http://localhost:3000 seu-tunnel-name
```

## 📁 Arquivos criados

- `Dockerfile` - Imagem otimizada para produção
- `docker-compose.yml` - Orquestração simples
- `.dockerignore` - Otimização do build
- `deploy.sh` - Script de gerenciamento
- `next.config.mjs` - Atualizado com `output: 'standalone'`

## 🌐 Acesso

- **Local**: http://localhost:3000
- **Tunnel**: Via URL do Cloudflare após configurar

## 📊 Monitoramento

```bash
# Ver status dos containers
./deploy.sh status

# Ver logs em tempo real
./deploy.sh logs
```

Simples e direto ao ponto! 🎯
