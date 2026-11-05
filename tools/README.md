# Служебные файлы

`og.html` — исходник картинки для превью в соцсетях (`assets/og.png`, 1200×630).
Пересобрать после правок (Git Bash, из папки проекта):

```bash
"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --disable-gpu --hide-scrollbars --window-size=1200,630 --virtual-time-budget=8000 --screenshot="$(cygpath -w "$PWD/assets/og.png")" "file:///$(cygpath -m "$PWD/tools/og.html")"
```

Контакты и список сайтов-витрин меняются в `assets/projects.js`.
Папка `designs/` — архив 5 вариантов дизайна (выбран вариант 5).
