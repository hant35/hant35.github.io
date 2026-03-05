#!/bin/bash
# Script public trang web CommaPilot qua Cloudflare Tunnel

PORT=8080
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"

cleanup() {
    echo ""
    echo "Đang dừng server..."
    kill $SERVER_PID 2>/dev/null
    exit 0
}
trap cleanup SIGINT SIGTERM

echo "🚀 CommaPilot - Cloudflare Tunnel"
echo "================================"
echo ""
echo "Đang khởi động server tại http://localhost:$PORT"
echo "Đang tạo tunnel... (URL public sẽ hiển thị bên dưới)"
echo ""

cd "$PROJECT_DIR"
python3 -m http.server $PORT &
SERVER_PID=$!

sleep 2
cloudflared tunnel --url "http://localhost:$PORT"
