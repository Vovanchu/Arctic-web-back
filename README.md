# 📦 Snippet Vault — Backend

Node.js + Express + TypeScript + MongoDB REST API для управління сніпетами коду та команд.

> **Стек:** Node.js 20 · TypeScript · Express.js · Mongoose · dotenv · ESLint + Prettier

---

## 🚀 Запуск локально

### 1. Перейти у папку бекенду

```bash
cd backend
```

### 2. Встановити залежності

```bash
npm install
```

### 3. Створити файл змінних оточення

```bash
cp .env.example .env
```

### 4. Відредагувати `.env`

```env
MONGODB_URI="mongodb+srv://<user>:<password>@cluster.mongodb.net/snippet-vault"
PORT=4000
```

### 5. Запустити dev-сервер

```bash
npm run dev
```

API доступне за адресою: [http://localhost:4000](http://localhost:4000)

---

## 🌐 Змінні оточення

| Змінна        | Опис                                         | Приклад                                                     |
| ------------- | -------------------------------------------- | ----------------------------------------------------------- |
| `MONGODB_URI` | Connection string до MongoDB Atlas або local | `mongodb+srv://user:pass@cluster.mongodb.net/snippet-vault` |
| `PORT`        | Порт, на якому запускається сервер           | `4000`                                                      |

### `.env.example`

```env
MONGODB_URI="mongodb+srv://<user>:<password>@cluster.mongodb.net/snippet-vault"
PORT=4000
```

> ⚠️ Ніколи не комітьте `.env` у репозиторій. Файл вже додано до `.gitignore`.

---

## 📡 API — приклади запитів

Базовий URL: `http://localhost:4000`

### Отримати всі сніпети

```bash
curl http://localhost:4000/snippets
```

### Отримати один сніпет за ID

```bash
curl http://localhost:4000/snippets/<id>
```

### Створити сніпет

```bash
curl -X POST http://localhost:4000/snippets \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Snippet",
    "content": "console.log(\"Hello\")",
    "tags": ["js"],
    "type": "command"
  }'
```

### Оновити сніпет

```bash
curl -X PUT http://localhost:4000/snippets/<id> \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Title",
    "content": "alert(\"Hi\")",
    "tags": ["js"],
    "type": "command"
  }'
```

### Видалити сніпет

```bash
curl -X DELETE http://localhost:4000/snippets/<id>
```

### Формат відповіді (приклад)

```json
{
  "_id": "664f1a2b3c4d5e6f7a8b9c0d",
  "title": "My Snippet",
  "content": "console.log(\"Hello\")",
  "tags": ["js"],
  "type": "command",
  "createdAt": "2024-05-23T10:00:00.000Z",
  "updatedAt": "2024-05-23T10:00:00.000Z"
}
```

---

## 🏗️ Білд та продакшн

### Зібрати production build

```bash
npm run build
```

TypeScript компілюється у папку `dist/`.

### Запустити production сервер

```bash
npm start
```

---

## ☁️ Деплой на Render

1. Створити новий **Web Service** у [Render](https://render.com)
2. Підключити репозиторій
3. Вказати налаштування:

| Параметр      | Значення        |
| ------------- | --------------- |
| Build Command | `npm run build` |
| Start Command | `npm start`     |
| Node Version  | `20`            |

4. У розділі **Environment Variables** додати:

```
MONGODB_URI  =  mongodb+srv://<user>:<password>@cluster.mongodb.net/snippet-vault
PORT         =  4000
```

> Render автоматично перезапускає сервер при кожному push у підключену гілку.

---

## 📁 Структура проекту

```
backend/
├── src/
│   ├── config/         # Підключення нашої бази даних
│   ├── models/         # Mongoose схеми (Snippet)
│   ├── routes/         # Express роути (/snippets)
│   └── index.ts        # Точка входу, підключення до MongoDB
├── .env.example
├── package.json
├── tsconfig.json
└── .gitignore
```

---

## ✅ Основні можливості

- CRUD операції для сніпетів (GET / POST / PUT / DELETE)
- Підключення до MongoDB через Mongoose
- Валідація вхідних даних
- TypeScript з суворою типізацією
- ESLint + Prettier для якості коду
