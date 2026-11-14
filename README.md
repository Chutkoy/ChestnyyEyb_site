# 🎩 Честный Эйб (Chestnyy Eyb)

Исходный код официального сайта инди-студии разработки мобильных игр и приложений **«Честный Эйб»**.

**Живая версия:** [https://chestnyyeyb.ru/](https://chestnyyeyb.ru/)

## 🛹 О студии

Студия названа в честь 16-го президента США Авраама Линкольна, известного под прозвищем «Честный Эйб» (Honest Abe). Это независимая студия одного человека (Чуткого), который в одиночку пишет код, создаёт пиксель-арт, придумывает сюжеты и отвечает на письма.

**Философия:** Создание честных, глубоких и качественных игр и приложений для Android. Без конвейера. С душой.

## 🎮 Проекты

*   **HeroSkAge (В разработке):** Главная игра студии. Вселенная уличных экстремалов (скейтборды, BMX, ролики). Герои противостоят злой корпорации `Eidovyrex`.
*   **Рассказы дядюшки Эйба:** Читалка коротких авторских рассказов.
    *   [Google Play](https://play.google.com/store/apps/details?id=com.gameeyb.uncleabestories)
    *   [RuStore](https://www.rustore.ru/catalog/app/com.gameeyb.uncleabestories)
    *   [GetApps](https://global.app.mi.com/details?id=com.gameeyb.uncleabestories)
*   **КвадроТактика:** Тактическая игра в кубики.
    *   [Google Play](https://play.google.com/store/apps/details?id=com.gameeyb.quadrotactics)
    *   [RuStore](https://www.rustore.ru/catalog/app/com.gameeyb.quadrotactics)
    *   [GetApps](https://global.app.mi.com/details?id=com.gameeyb.quadrotactics)

## 🛠 Технологии

Сайт написан на чистом стеке без тяжёлых фреймворков для максимальной производительности и SEO:

*   **HTML5**
*   **CSS3** (Vanilla)
*   **JavaScript** (Vanilla, ES5-совместимый для широкой поддержки)
*   **Шрифты:** `.woff2` (единственный формат)

## ✨ Ключевые особенности

*   **Производительность:** 100/100 в PageSpeed Insights на десктопе, 98/100 на мобильных. Оптимизация шрифтов (`.woff2`, `preload`, `font-display: swap`), `lazy loading` изображений, критический CSS.
*   **Доступность (a11y):** Skip-link, `aria-label`, видимый фокус, поддержка `prefers-reduced-motion`, `prefers-contrast`, `forced-colors`. Отдельные файлы `a11y.css` и `a11y.js`.
*   **SEO:** Микроразметка `Organization`, `sitemap.xml`, `robots.txt`, `canonical`, Open Graph, Twitter Cards.
*   **AI-дружелюбность:** `llms.txt` для LLM, `ai-catalog.json` для AI-агентов, разрешение AI-краулеров в `robots.txt`.
*   **Безопасность:** Content Security Policy (CSP), `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`. Cookie-баннер с отложенной загрузкой Google Analytics.
*   **PWA-основа:** `manifest.json` с иконками, `theme-color`, `shortcuts`.

## 📁 Структура проекта

├── index.html # Главная страница
├── 404.html # Страница ошибки 404
├── manifest.json # Манифест PWA
├── robots.txt # Правила для краулеров
├── sitemap.xml # Карта сайта
├── llms.txt # Описание для LLM
├── ai-catalog.json # Каталог для AI-агентов
├── .htaccess # Настройки Apache (CSP, кэш, сжатие)
├── LICENSE # Лицензия MIT (только для кода)
├── README.md # Этот файл
├── about/ # О компании
├── contacts/ # Контакты
├── cooperation/ # Сотрудничество
├── copyright/ # Копирайт
├── development/ # Разработка
├── privacy/ # Политика конфиденциальности
├── requisites/ # Реквизиты
├── share/ # Поделиться
├── terms/ # Пользовательское соглашение
├── css/
│ ├── index.css # Стили главной
│ ├── page.css # Стили внутренних страниц
│ ├── cookie.css # Стили cookie-баннера
│ └── a11y.css # Стили доступности
├── js/
│ ├── index.js # Скрипты главной
│ ├── page.js # Скрипты внутренних страниц
│ ├── cookie.js # Логика cookie и GA
│ └── a11y.js # Улучшения доступности
├── fonts/
│ ├── Montserrat_0.woff2
│ ├── Montserrat_0.ttf
│ ├── BuyanRegular.woff2
│ └── BuyanRegular.ttf
└── images/
├── favicon/
├── Cookie/
├── Hero/
└── og/


## 🚀 Запуск локально

Так как это статический сайт, для локального запуска достаточно использовать любой локальный сервер. Например, через расширение **Live Server** в VS Code, или через Python:

```bash
python -m http.server 8000

Затем откройте http://localhost:8000 в браузере.

📄 Лицензия

• Код распространяется под лицензией MIT — см. файл LICENSE.
• Контент (тексты, изображения, персонажи, логотипы, истории) является интеллектуальной собственностью ООО «Честный Эйб» и защищён авторским правом. Подробнее — на странице Копирайт.

📬 Контакты
• Email: lincoln@chestnyyeyb.ru
• Telegram: @ChestnyyEyb
•  Сайт: https://chestnyyeyb.ru/
