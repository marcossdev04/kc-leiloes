#!/bin/bash

# Script simples para gerenciar o deploy
set -e

echo "🐳 KC Leilões - Deploy Script"

case "${1:-help}" in
    "build")
        echo "🔨 Building Docker image..."
        docker compose build --no-cache
        echo "✅ Build complete!"
        ;;
    "start")
        echo "🚀 Starting application..."
        docker compose up -d
        echo "✅ Application started on port 3000!"
        echo "🌐 Ready for tunnel: cloudflared tunnel run --url http://localhost:3000 your-tunnel"
        ;;
    "stop")
        echo "🛑 Stopping application..."
        docker compose down
        echo "✅ Application stopped!"
        ;;
    "restart")
        echo "🔄 Restarting application..."
        docker compose restart
        echo "✅ Application restarted!"
        ;;
    "logs")
        echo "📋 Showing logs..."
        docker compose logs -f
        ;;
    "status")
        echo "📊 Application status:"
        docker compose ps
        ;;
    "deploy-extreme")
        echo "🚀 EXTREME LOW MEMORY DEPLOY - Aggressive optimization..."
        
        # Matar todos os processos desnecessários
        echo "💀 Killing unnecessary processes..."
        sudo pkill -f node || true
        sudo pkill -f yarn || true
        docker system prune -af --volumes
        
        # Verificar memória disponível
        MEM_AVAILABLE=$(free -m | awk 'NR==2{printf "%.0f", $7}')
        echo "📊 Available memory: ${MEM_AVAILABLE}MB"
        
        # Criar swap massivo de 2GB
        echo "📁 Creating 2GB emergency swap..."
        sudo swapoff -a 2>/dev/null || true
        sudo dd if=/dev/zero of=/tmp/emergency_swap bs=1M count=2048 status=progress
        sudo chmod 600 /tmp/emergency_swap
        sudo mkswap /tmp/emergency_swap
        sudo swapon /tmp/emergency_swap
        
        # Configurar limites extremos do kernel
        echo "⚙️ Setting extreme kernel limits..."
        echo 1 | sudo tee /proc/sys/vm/overcommit_memory
        echo 50 | sudo tee /proc/sys/vm/swappiness
        
        # Build com configurações extremas
        echo "🔨 Building with EXTREME memory constraints..."
        export NODE_OPTIONS="--max-old-space-size=256 --gc-interval=100"
        export UV_THREADPOOL_SIZE=1
        export YARN_CACHE_FOLDER=/dev/shm/yarn_cache
        
        # Build direto com Docker, não compose
        docker build \
            --no-cache \
            --memory=400m \
            --memory-swap=2g \
            --build-arg NODE_OPTIONS="--max-old-space-size=256" \
            --build-arg UV_THREADPOOL_SIZE=1 \
            -t kc-leiloes-app .
        
        # Parar tudo e limpar novamente
        docker compose down 2>/dev/null || true
        docker system prune -f
        
        # Subir com compose usando a imagem já buildada
        docker compose up -d
        
        # Restaurar configurações do sistema
        echo "🔄 Restoring system settings..."
        echo 0 | sudo tee /proc/sys/vm/overcommit_memory
        echo 60 | sudo tee /proc/sys/vm/swappiness
        
        # Remover swap de emergência
        sudo swapoff /tmp/emergency_swap
        sudo rm /tmp/emergency_swap
        
        echo "✅ EXTREME deploy complete! App running on port 3000"
        echo "⚠️  If this worked, your server is running on fumes!"
        ;;
    "deploy")
        echo "🚀 Full deploy (build + start)..."
        docker compose build --no-cache
        docker compose up -d
        echo "✅ Deploy complete! App running on port 3000"
        ;;
    *)
        echo "Usage: ./deploy.sh [command]"
        echo ""
        echo "Commands:"
        echo "  build         - Build Docker image"
        echo "  start         - Start application"
        echo "  stop          - Stop application"
        echo "  restart       - Restart application"
        echo "  logs          - Show logs"
        echo "  status        - Show status"
        echo "  deploy        - Build and start (recommended)"
        echo "  deploy-extreme - EXTREME low memory deploy (1GB RAM)"
        echo ""
        echo "After starting, use: cloudflared tunnel run --url http://localhost:3000 your-tunnel"
        ;;
esac
