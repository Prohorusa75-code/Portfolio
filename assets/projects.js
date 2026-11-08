/* Общие данные для всех вариантов лендинга.
   Здесь меняем контакты и список сайтов-витрин для главной страницы (index.html).
   Сайт-витрина с live: true получает пометку «online» и открывается в новой вкладке. */

window.SITE = {
  brand: 'PROHOR',
  role: 'Веб-разработчик',
  telegram: 'prohorsite'          // ник в Telegram без @ — единственный способ связи
};

window.PROJECTS = [
  {
    id: 'alleya', name: 'АЛЛЕЯ', type: 'Лендинг-погружение', logo: 'АЛЛЕЯ',
    headline: 'СЕЗОН ЗАКРЫТ', cta: 'Записаться',
    url: 'https://prohorusa75-code.github.io/alleya/', live: true, img: 'assets/works/alleya.jpg',
    t: { bg: '#eaf3f5', fg: '#06232e', ac: '#ff5a1f', ff: "'Sofia Sans Extra Condensed',sans-serif", shape: 'berg' }
  },
  {
    id: 'glad', name: 'Гладь', type: 'Химчистка: калькулятор + заявка', logo: 'гладь*',
    headline: 'Гладь.', cta: 'Вызвать курьера',
    url: 'https://prohorusa75-code.github.io/glad/', live: true, img: 'assets/works/glad.jpg',
    t: { bg: '#050608', fg: '#edeef2', ac: '#ffffff', ff: "'Manrope',sans-serif", shape: 'blob' }
  },
  {
    id: 'vet', name: 'Лапа', type: 'Ветклиника: врачи + запись', logo: 'Лапа',
    headline: 'Здесь лечат с любовью', cta: 'Записаться',
    url: 'https://prohorusa75-code.github.io/vet/', live: true, img: 'assets/works/vet.jpg',
    t: { bg: '#fff7ee', fg: '#2b1d14', ac: '#c94f2c', ff: "'Manrope',sans-serif", shape: 'blob' }
  },
  {
    id: 'remont', name: 'Чистовик', type: 'Ремонт: «до/после» + смета', logo: 'Чистовик',
    headline: 'Ремонт с ценой, которая не растёт', cta: 'Рассчитать',
    url: 'https://prohorusa75-code.github.io/remont/', live: true, img: 'assets/works/remont.jpg',
    t: { bg: '#f3f0e8', fg: '#1c1d1c', ac: '#ff6a1a', ff: "'Onest',sans-serif", shape: 'tiles' }
  },
  {
    id: 'chrome', name: 'CHROME', type: 'Автосервис: смета + запись', logo: 'CHROME',
    headline: 'Сервис уровня вашего автомобиля', cta: 'Записаться',
    url: 'https://prohorusa75-code.github.io/chrome/', live: true, img: 'assets/works/chrome.jpg?v=2',
    t: { bg: '#08080a', fg: '#ededf0', ac: '#f4f4f6', ff: "'Manrope',sans-serif", shape: 'blob' }
  }
];

/* Шрифты для мини-превью сайтов */
(function () {
  var l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = 'https://fonts.googleapis.com/css2?family=Sofia+Sans+Extra+Condensed:wght@800&family=Manrope:wght@700&family=Unbounded:wght@700&family=Onest:wght@700&display=swap';
  document.head.appendChild(l);

  var s = document.createElement('style');
  s.textContent = [
    '.pt{container-type:inline-size;position:relative;aspect-ratio:16/10;border-radius:inherit;overflow:hidden;background:var(--bg);color:var(--fg);font-family:var(--ff);isolation:isolate}',
    '.pt-nav{display:flex;align-items:center;gap:3.2cqw;padding:4.4cqw 5.5cqw 0}',
    '.pt-nav b{font-size:3.6cqw;font-weight:700;letter-spacing:.02em;margin-right:auto}',
    '.pt-nav i{width:6cqw;height:.9cqw;border-radius:9px;background:currentColor;opacity:.35}',
    '.pt-nav span{width:10cqw;height:4cqw;border-radius:99px;background:var(--ac)}',
    '.pt-body{display:grid;grid-template-columns:1.25fr 1fr;gap:4cqw;align-items:center;padding:6cqw 5.5cqw 0}',
    '.pt-text small{display:block;font-size:2.5cqw;opacity:.6;margin-bottom:1.6cqw;font-family:system-ui,sans-serif;letter-spacing:.04em;text-transform:uppercase}',
    '.pt-text h4{margin:0;font-size:6.6cqw;line-height:1.02;font-weight:700;letter-spacing:-.01em}',
    '.pt-text p{height:1cqw;width:80%;border-radius:9px;background:currentColor;opacity:.25;margin:3.2cqw 0 0}',
    '.pt-text p.s{width:55%;margin-top:1.6cqw}',
    '.pt-cta{display:inline-block;margin-top:4cqw;padding:1.8cqw 4cqw;border-radius:99px;background:var(--ac);color:#111;font:700 2.6cqw/1 system-ui,sans-serif}',
    '.pt-art{aspect-ratio:1/1.05;width:100%;position:relative}',
    '.pt-arch{border-radius:50% 50% 4cqw 4cqw/38% 38% 4cqw 4cqw;background:repeating-linear-gradient(180deg,transparent 0 22%,#00000030 22% 23.5%),linear-gradient(160deg,#c89466,#7a5234);box-shadow:inset 0 0 0 1.4cqw #f6eadb22}',
    '.pt-cup{border-radius:50%;background:radial-gradient(circle at 50% 50%,#d8a16b 0 26%,#6b3b1c 27% 52%,#f7efe4 53% 64%,transparent 65%),radial-gradient(circle at 50% 50%,#fff 0 70%,transparent 71%);filter:drop-shadow(0 2cqw 2cqw #3b241633)}',
    '.pt-blob{border-radius:42% 58% 63% 37%/45% 40% 60% 55%;background:linear-gradient(140deg,#7fd7e2,#13a3b5);box-shadow:inset -2cqw -2cqw 5cqw #0e3a4a33}',
    '.pt-blob:after{content:"";position:absolute;inset:26% 30%;border-radius:40% 40% 46% 46%;background:#fff;opacity:.9}',
    '.pt-slash{background:linear-gradient(115deg,transparent 0 30%,var(--ac) 30% 52%,transparent 52% 60%,#ffffff22 60% 72%,transparent 72%)}',
    '.pt-pole{border-radius:6cqw;width:52%;margin:auto;background:repeating-linear-gradient(135deg,#c9a25a 0 9%,#f2ece2 9% 18%,#8b2b22 18% 27%,#f2ece2 27% 36%);box-shadow:inset 0 0 0 1cqw #00000033}',
    '.pt-tiles{background:conic-gradient(from 90deg at 50% 50%,#ff6b1a 25%,#d9d4c7 0 50%,#1b1b1b 0 75%,#efeadf 0);background-size:50% 50%;border-radius:2cqw}',
    '.pt-berg{background:linear-gradient(180deg,#bcdde6 0 40%,#06232e 40% 42%,#145867 42% 70%,#0c3f4e 70%);clip-path:polygon(46% 0,58% 14%,63% 40%,96% 58%,84% 82%,52% 100%,18% 84%,4% 60%,34% 40%,38% 16%)}',
    '.pt-row{position:absolute;left:5.5cqw;right:5.5cqw;bottom:-6cqw;display:grid;grid-template-columns:repeat(3,1fr);gap:3cqw}',
    '.pt-row i{height:12cqw;border-radius:2.4cqw;background:currentColor;opacity:.08}'
  ].join('');
  document.head.appendChild(s);
})();

window.renderThumb = function (p) {
  var t = p.t;
  // готовый сайт — показываем настоящий скриншот, заглушку рисуем кодом
  if (p.img) {
    return '<div class="pt" style="--bg:' + t.bg + '"><img src="' + p.img + '" alt="Скриншот сайта ' + p.name +
      '" loading="lazy" style="display:block;width:100%;height:100%;object-fit:cover;object-position:top"></div>';
  }
  return '<div class="pt" style="--bg:' + t.bg + ';--fg:' + t.fg + ';--ac:' + t.ac + ';--ff:' + t.ff + '">' +
    '<div class="pt-nav"><b>' + p.logo + '</b><i></i><i></i><i></i><span></span></div>' +
    '<div class="pt-body"><div class="pt-text"><small>' + p.type + '</small><h4>' + p.headline + '</h4><p></p><p class="s"></p>' +
    '<span class="pt-cta">' + p.cta + '</span></div><div class="pt-art pt-' + t.shape + '"></div></div>' +
    '<div class="pt-row"><i></i><i></i><i></i></div></div>';
};

window.tgLink = function () { return 'https://t.me/' + SITE.telegram; };
