#!/bin/bash

# Script simples para gerenciar o deploy
set -e

echo "🐳 KC Leilões - Deploy Script"

case "${1:-help}" in
    "build")
        echo "🔨 Building Docker image..."
        docker-compose build --no-cache
        echo "✅ Build complete!"
        ;;
    "start")
        echo "🚀 Starting application..."
        docker-compose up -d
        echo "✅ Application started on port 3000!"
        echo "🌐 Ready for tunnel: cloudflared tunnel run --url http://localhost:3000 your-tunnel"
        ;;
    "stop")
        echo "🛑 Stopping application..."
        docker-compose down
        echo "✅ Application stopped!"
        ;;
    "restart")
        echo "🔄 Restarting application..."
        docker-compose restart
        echo "✅ Application restarted!"
        ;;
    "logs")
        echo "📋 Showing logs..."
        docker-compose logs -f
        ;;
    "status")
        echo "📊 Application status:"
        docker-compose ps
        ;;
    "deploy")
        echo "🚀 Full deploy (build + start)..."
        docker-compose build --no-cache
        docker-compose up -d
        echo "✅ Deploy complete! App running on port 3000"
        ;;
    *)
        echo "Usage: ./deploy.sh [command]"
        echo ""
        echo "Commands:"
        echo "  build    - Build Docker image"
        echo "  start    - Start application"
        echo "  stop     - Stop application"
        echo "  restart  - Restart application"
        echo "  logs     - Show logs"
        echo "  status   - Show status"
        echo "  deploy   - Build and start (recommended)"
        echo ""
        echo "After starting, use: cloudflared tunnel run --url http://localhost:3000 your-tunnel"
        ;;
esac
