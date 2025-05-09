
# 💬 Chat App

A **Realtime Chat Application** built with **NodeJS** (backend) and **ReactJS** (frontend), featuring authentication, file upload, and real-time messaging using **Socket.io**.

## 🚀 Features

- 🔐 **Authentication & Authorization**:  
  - JWT-based authentication.  
  - Secure password hashing with bcryptjs.

- 💬 **Realtime Chat**:  
  - Bi-directional messaging using Socket.io.  
  - Typing indicators and message status updates.  
  - Online/offline presence detection.

- 📁 **File Uploads**:  
  - Image upload & storage via Cloudinary.  
  - Support for file previews.

- 🔒 **Security & Validation**:  
  - Input validation with express-validator.  
  - Data encryption using crypto-js.  
  - Protected routes and role-based access.

- 🗄️ **Database**:  
  - MongoDB (via Mongoose) for storing user & message data.  
  - Efficient querying & indexing.

- 🌐 **Frontend**:  
  - Built with ReactJS + Vite.  
  - Zustand for state management.  
  - TailwindCSS + DaisyUI for responsive UI.  
  - Realtime updates with socket.io-client.

## 🛠 Tech Stack

| Layer       | Technologies                                                                 |
|-------------|-------------------------------------------------------------------------------|
| **Backend** | NodeJS, ExpressJS, MongoDB (Mongoose), bcryptjs, JWT, Cloudinary, Socket.io |
| **Frontend**| ReactJS, Vite, Zustand, TailwindCSS, DaisyUI, Socket.io-client               |
| **Other**   | express-validator, crypto-js                                                 |

## 📂 Folder Structure

### Backend

```
/backend
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
└── index.js
```

### Frontend

```
/frontend
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── store/
│   ├── utils/
│   └── main.jsx
└── index.html
```

## 🖥️ How to Run

### 1️⃣ Backend

```bash
cd backend
npm install
npm run dev
```

### 2️⃣ Frontend

```bash
cd frontend
npm install
npm run dev
```

## ⚙️ Environment Variables

Create a `.env` file in `/backend` with the following:

```
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## ✅ Future Improvements

- Push notifications
- Video/voice call integration
- Group chat
- Read receipts

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

[MIT](LICENSE)
