

A full-stack task management app built using React (Frontend), Node.js + Express (Backend), and MongoDB (Database). Users can register, log in, and manage their tasks (CRUD). JWT is used for authentication.

---

## 📁 Project Structure

```
project-root/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
└── README.md
```

---

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone [https://github.com/yourusername/task-manager-mean.git](https://github.com/khushi89012/management.git)

```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

#### Create a `.env` file

```env
PORT=5000
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```

#### Start Backend Server

```bash
npm start
```

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

#### Start React App

```bash
npm start
```

---

## 🛠️ Features

- Register and Login (JWT authentication)
- Create, Read, Update, Delete tasks
- Filter tasks by status (pending/completed)
- Protected Routes for dashboard access
- Logout support
- Responsive UI with basic styling

---

## 📬 API Flow

### Auth APIs

- `POST /api/auth/register` — Register user  
  **Payload**:
  ```json
  {
    "username": "john",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

- `POST /api/auth/login` — Login user  
  **Payload**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
  **Response**: Returns JWT token

### Task APIs (Protected with JWT)

- `GET /api/tasks` — Get all tasks of user
- `POST /api/tasks` — Create task  
  **Payload**:
  ```json
  {
    "title": "Test Task",
    "description": "Sample description",
    "status": "pending"
  }
  ```
- `PUT /api/tasks/:id` — Update task
- `DELETE /api/tasks/:id` — Delete task

**Note**: Set JWT token in `Authorization` header as:  
```
Authorization: Bearer <token>
```
![image](https://github.com/user-attachments/assets/3ecd6a44-8f0d-4aee-b650-4658a6fc8245)
![image](https://github.com/user-attachments/assets/3b7d6ba5-31b1-447f-ae28-bb329bd857ad)
![image](https://github.com/user-attachments/assets/376b32bb-1df4-47fa-855b-f8566f66168f)




