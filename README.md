# Landing v4 (GitHub Pages)

Лендинг конференции/конгресса для размещения на GitHub Pages.

## Структура
- Основная (английская) версия: `/index.html`
- Русская версия: `/ru/index.html`
- Совместимость со старой ссылкой: `/en/` перенаправляет на главную

## Быстрый запуск на GitHub Pages
1. Загрузите содержимое архива в корень репозитория (чтобы `index.html` лежал в корне).
2. В репозитории откройте: **Settings → Pages**
   - Source: *Deploy from a branch*
   - Branch: `main`
   - Folder: `/(root)`
3. После деплоя сайт будет доступен по адресу вида:
   `https://<username>.github.io/<repo>/`

## Что обычно правят
- Ссылки на формы регистрации/подачи материалов (Яндекс‑формы) — в `index.html` и `ru/index.html`
- Контактный e‑mail: `biotech-congress@yandex.ru` (замените при необходимости в обоих файлах)

## Файлы для авторов
- Шаблоны:
  - `assets/docs/abstract_template_en.docx`
  - `assets/docs/abstract_template_ru.docx`
- Требования (PDF):
  - `assets/docs/requirements_en.pdf`
  - `assets/docs/requirements_ru.pdf`

## OG‑картинка (превью для Telegram/WhatsApp)
- `assets/og/og.png` (подключена в `<head>` обеих страниц)

## Карта (Место проведения)
Используется встраивание OpenStreetMap + кнопка «Открыть в Яндекс.Картах».
Координаты и адрес редактируются в секции `#venue`.

