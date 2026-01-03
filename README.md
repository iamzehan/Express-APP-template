# 🚀 Express App Template

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-90A93A?style=for-the-badge\&logo=ejs\&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge\&logo=postgresql\&logoColor=white)

A **production-ready Express.js starter template** built to eliminate repetitive setup and help you start coding immediately.
Designed with **clean architecture**, **developer experience**, and **scalability** in mind.

---

## ✨ Features

This template comes preconfigured with everything you need for modern Express development:

* 🔁 **Live Reload** (development mode)
* 🧩 **EJS View Engine** setup
* 🐘 **PostgreSQL (`pg`)** integration
* ✅ **Express Validator** for request validation
* 🗂 **MVC Architecture** (Model–View–Controller)
* 🔐 **Dotenv** for environment variables
* 📁 **Static files** configuration
* 🔄 **JSON & URL-encoded** body parsing middleware
* 🧱 Clean, extensible project structure
* 🔐 Authentication with PassportJS
* 🔑 CSRF token for form data security.
* 🪪 User Authorization-based access middlewares for routes.
* ❗Error message handler with Connect-flash.
* 🍪 Session Cookie management
* 🗝️ Bycryptjs for password hashing


---

## 📦 Getting Started

Follow these steps to run the project locally.

### 1️⃣ Clone the repository

```bash
git clone https://github.com/iamzehan/Express-APP-template.git
```

### 2️⃣ Install dependencies

```bash
npm install
```
### 3️⃣ Create the session table in your PSQL Database
```
node src/models/session.js
```

### 4️⃣ Run the development server

```bash
npm run dev
```

### 5️⃣ Open in browser

```text
http://localhost:3000
```

---

## 🗂 Project Structure

```text
Express-APP-template/
├── src
    ├── auth/               # Handles authentication logic with passportjs
    ├── controllers/        # Request handlers (business logic)
    ├── models/             # Database logic and queries
    ├── routes/             # Application routes
    ├── views/              # EJS templates
    ├── public/             # Static assets (CSS, JS, images)
    ├── app.js              # App entry point
├── package.json
├── .env.example        # Environment variables example
└── README.md
```

---

## ⚙️ Available Scripts

| Command       | Description                                |
| ------------- | ------------------------------------------ |
| `npm run dev` | Starts development server with live reload |
| `npm start`   | Starts production server                   |

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

> Refer to `.env.example` for required variables.

---

## 🎯 Use Cases

This template is ideal for:

* Rapid prototyping
* REST APIs with server-side rendering
* PostgreSQL-backed Express apps
* Personal or production projects
* Learning clean Express architecture

---


## ⭐ Support

If this template helped you, consider giving the repo a ⭐ on GitHub — it really helps!

---
