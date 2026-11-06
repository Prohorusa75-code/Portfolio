# Portfolio — сайт-портфолио PROHOR

Главная страница (`index.html`): кто я, витрины сайтов, контакты.

- Контакт (только Telegram @prohorsite) и список сайтов-витрин — `assets/projects.js`.
- QR-код Telegram — `assets/telegram-qr.png`.
- Картинка для соцсетей — `assets/og.png`, исходник и команда пересборки в `tools/`.
- `designs/` — 5 вариантов дизайна (выбран 5-й), доступны на сайте по адресу `/designs/`.

## Локально

```bash
python -m http.server 5520
```

## Публикация

Сайт публикуется через GitHub Pages: https://prohorusa75-code.github.io/Portfolio/
Порядок: правим и проверяем на компе → коммит и пуш в `main` → GitHub сам
обновляет сайт за 1–2 минуты.

`Dockerfile`, `docker-compose.yml` и `deploy/` — запасной вариант для своего
сервера (nginx-контейнер + автодеплой), сейчас не используются.
