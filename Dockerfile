# Статический сайт: nginx отдаёт HTML/CSS/JS из /usr/share/nginx/html.
FROM nginx:1.29-alpine

COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html robots.txt /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
COPY designs /usr/share/nginx/html/designs

HEALTHCHECK --interval=30s --timeout=3s CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1
