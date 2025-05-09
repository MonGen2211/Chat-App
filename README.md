
<div style="text-align: left">

# 🚀 Chat App

![GitHub repo size](https://img.shields.io/github/repo-size/MonGen2211/Chat-App)
![GitHub issues](https://img.shields.io/github/issues/MonGen2211/Chat-App)
![GitHub forks](https://img.shields.io/github/forks/MonGen2211/Chat-App)
![GitHub stars](https://img.shields.io/github/stars/MonGen2211/Chat-App)

A **Realtime Chat Application** built with **NodeJS** (backend) and **ReactJS** (frontend), featuring authentication, file upload, and real-time messaging using **Socket.io**.

---

## 🖼️ Tech Stack & Icons

- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
- ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
- ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
- ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
- ![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![DaisyUI](https://img.shields.io/badge/DaisyUI-7B3AED?style=for-the-badge&logo=daisyui&logoColor=white)
- ![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)
- ![Zustand](https://img.shields.io/badge/Zustand-FFCD00?style=for-the-badge&logo=zustand&logoColor=black)
- ![Bcryptjs](https://img.shields.io/badge/bcryptjs-7B3F00?style=for-the-badge)
- ![Express Validator](https://img.shields.io/badge/express--validator-10A37F?style=for-the-badge)
- ![Crypto-js](https://img.shields.io/badge/CryptoJS-003366?style=for-the-badge)

---

## ✨ Features

- 🔐 **Authentication & Authorization**
  - JWT-based authentication
  - Secure password hashing with bcryptjs

- 💬 **Realtime Chat**
  - Bi-directional messaging using Socket.io
  - Typing indicators and message status updates
  - Online/offline presence detection

- 📁 **File Uploads**
  - Image upload & storage via Cloudinary
  - Support for file previews

- 🔒 **Security & Validation**
  - Input validation with express-validator
  - Data encryption using crypto-js
  - Protected routes and role-based access

- 🗄️ **Database**
  - MongoDB (via Mongoose) for storing user & message data
  - Efficient querying & indexing

- 🌐 **Frontend**
  - Built with ReactJS + Vite
  - Zustand for state management
  - TailwindCSS + DaisyUI for responsive UI
  - Realtime updates with socket.io-client

---

## 📂 Folder Structure

**Backend**
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

**Frontend**
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

---

## 🚦 How to Run

**Backend**
```bash
cd backend
npm install
npm run dev
```

**Frontend**
```bash
cd frontend
npm install
npm run dev
```

---

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

---

## 🚧 Future Improvements

- 📲 Push notifications
- 📹 Video/voice call integration
- 👥 Group chat
- ✔️ Read receipts

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

MIT

</div>
