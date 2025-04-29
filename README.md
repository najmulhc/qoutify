
# 📝 Qoutify - Quote Management API (Built with NestJS)

**Qoutify** is a lightweight REST API for managing inspirational quotes. It's built using **NestJS** with a focus on clean architecture, modularity, and best practices like DTO validation and a file-based repository.

This project is designed to simulate real-world backend systems and is ideal for demonstrating fundamental concepts like routing, validation, dependency injection, and file-based persistence — perfect as a first step toward full-stack/backend mastery.

---

## 🚀 Features

- 📚 Get all quotes
- 🧠 Retrieve a random quote
- 🔍 Get a quote by ID
- ➕ Add a new quote (with validation)
- 📝 Edit an existing quote
- ❌ Delete a quote
- 🗃️ File-based JSON storage (no DB required)
- 🛡️ Robust input validation using DTOs + `class-validator`

---

## 🏗️ Tech Stack

| Tool | Purpose |
|------|---------|
| [NestJS](https://nestjs.com/) | Backend framework |
| TypeScript | Language |
| `fs` module | File-based persistence |
| `class-validator` & `class-transformer` | DTO validation | 

---

## 🧰 Project Structure

```
qoutify/
│
├── db/                   # JSON file that stores all quotes
├── src/
│   ├── quotes/
│   │   ├── dtos/         # DTOs with validation logic
│   │   ├── quotes.controller.ts
│   │   ├── quotes.service.ts
│   │   ├── quotes.repository.ts
│   │   └── quotes.module.ts
│   └── main.ts           # Application entry point
├── README.md             # You're reading it!
```

---

## 🛠️ Installation & Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/najmulhc/qoutify.git
   cd qoutify
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the server in dev mode:**
   ```bash
   npm run start:dev
   ```

4. API will be live at:
   ```
   http://localhost:3000
   ```

---

## 📡 API Endpoints

> All endpoints are prefixed with `/quotes`

| Method | Endpoint               | Description                      |
|--------|------------------------|----------------------------------|
| GET    | `/quotes`              | Get all quotes                   |
| GET    | `/quotes/:id`          | Get a quote by ID                |
| GET    | `/quotes/random`       | Get a random quote               |
| POST   | `/quotes`              | Add a new quote                  |
| PATCH  | `/quotes/:id`          | Edit a quote                     |
| DELETE | `/quotes/:id`          | Delete a quote                   |

---

## 📥 Example Payloads

### ➕ POST `/quotes`

```json
{
  "author": "Albert Einstein",
  "content": "Imagination is more important than knowledge."
}
```

### 🛠 PATCH `/quotes/42`

```json
{
  "author": "Einstein",
  "content": "Creativity is intelligence having fun."
}
```

---

## 🧪 Validation Rules (DTOs)

| Field   | Type     | Rules                          |
|---------|----------|-------------------------------|
| author  | `string` | Required, non-empty, min 2     |
| content | `string` | Required, non-empty, min 5     |

Handled using `class-validator` decorators in the DTOs like:

```ts
@IsString()
@MinLength(2, { message: "Author name too short" })
```

---

## 🧠 Learning Outcomes

- NestJS architecture: Modules, Services, Controllers
- DTO-based validation
- File-based data persistence
- RESTful API design
- Error handling and clean code

---

## 🛣️ Future Improvements

- Switch from JSON file to MongoDB/PostgreSQL
- Add Swagger API docs (`@nestjs/swagger`)
- Add request logging middleware
- Add authentication (`passport-jwt`)
- Add unit tests using Jest

---

## 🧑‍💻 Author

**Najmul Huda Chowdhury**  
📍 University of Dhaka | 🇧🇩  
🔗 [LinkedIn](https://www.linkedin.com/in/najmulhc)  
🌱 FAANG-ready SDE-in-the-making

---

## ⭐ Star This Repo

If this helped you learn something, smash that ⭐ on GitHub to support the grind!
