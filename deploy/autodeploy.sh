#!/usr/bin/env bash
# Автодеплой: запускается таймером на сервере. Если в GitHub (ветка main)
# появился новый коммит — забирает его и пересобирает контейнер.
set -euo pipefail

APP_DIR=/opt/portfolio
BRANCH=main
cd "$APP_DIR"

git fetch --quiet origin "$BRANCH"
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse "origin/$BRANCH")

# Новый коммит или контейнер не запущен — разворачиваем.
if [ "$LOCAL" != "$REMOTE" ] || [ -z "$(docker compose ps -q --status running site)" ]; then
  git reset --hard --quiet "origin/$BRANCH"
  echo "$(date '+%F %T') deploy $(git rev-parse --short HEAD): $(git log -1 --format=%s)"
  docker compose up -d --build --remove-orphans
  docker image prune -f >/dev/null
fi
