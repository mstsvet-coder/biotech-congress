# Landing v5 (GitHub Pages) — Dark Premium

Статичный лендинг для GitHub Pages (без сборки/Node).  
**Главная страница — EN**, русская версия — `/ru/`.  
Дополнительно: `/en/` сделан как редирект на главную (на случай старых ссылок).

## Структура
- EN (main): `index.html`
- RU: `ru/index.html`
- Assets: `assets/`
  - CSS: `assets/css/style.css`
  - JS: `assets/js/main.js`
  - Images: `assets/img/`
  - OG images: `assets/og/`
  - Docs (templates, requirements): `assets/docs/`

## Публикация на GitHub Pages (быстро)
1. Загрузите содержимое архива в корень репозитория (так, чтобы `index.html` лежал в корне).
2. GitHub → **Settings → Pages**
3. **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main` (или `master`)
   - Folder: `/ (root)`
4. Сохранить. GitHub Pages покажет URL опубликованного сайта.

## Как подключить свой домен (если понадобится)
GitHub → Settings → Pages → Custom domain → указать домен → сохранить.  
У регистратора домена добавить DNS записи (обычно A/AAAA или CNAME) по инструкции GitHub.

## Где менять контент
- Тексты EN: `index.html`
- Тексты RU: `ru/index.html`
- Цвета/радиусы/отступы: `assets/css/style.css` (в начале файла есть переменные `:root`)
- Таймлайн/вкладки: `index.html` / `ru/index.html` (блок `#program`)
- Логотипы партнёров: `assets/img/` + секция `#partners`

## OG-картинка (превью в Telegram/WhatsApp)
- EN: `assets/og/og-en.jpg`
- RU: `assets/og/og-ru.jpg`

Если меняете URL сайта (например, подключили домен), обновите в `<head>`:
- `og:url`, `og:image`, `canonical`

## Про фотографии спикеров
В v5 для карточек “Experts & speakers” используются **нейтральные аватары‑плейсхолдеры** (генерируемые, без внешних прав).  
Если захотите заменить на реальные фото — положите файлы в `assets/img/speakers/` и замените пути в HTML.

## Контакты и формы
- Email: `biotech-congress@yandex.ru`
- Форма участника: https://forms.yandex.ru/u/69732daf95add52784b45f68/
- Форма подачи материалов: https://forms.yandex.ru/u/697336be02848f5046ce04f7/

---
Generated on 2026-02-17.
