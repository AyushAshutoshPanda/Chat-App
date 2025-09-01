# ⚛️ ChatApp Frontend

This is the **frontend** of the ChatApp project, built with **React + Vite**.  
It provides a modern, fast, and responsive UI for real-time messaging using **Socket.IO** and **Redux Toolkit**.

---

## 🚀 Features
- 🔐 User authentication (Login/Register)
- 🟢 Online/offline user status
- 💬 Real-time 1-to-1 chat
- 📡 Global state management with Redux Toolkit
- 🎨 Responsive UI with TailwindCSS
- ⚡ Lightning-fast development with Vite + HMR

---

## 🛠️ Tech Stack
- **React** – UI library  
- **Redux Toolkit** – State management  
- **TailwindCSS** – Styling  
- **Vite** – Development & bundling  
- **Socket.IO Client** – Real-time communication  

---

## 📂 Project Structure
frontend/
│── public/ # Static assets
│── src/
│ ├── components/ # Reusable UI components (Navbar, ChatBox, etc.)
│ ├── pages/ # Page components (Login, Register, Chat)
│ ├── redux/ # Redux slices (userSlice, messageSlice, socketSlice)
│ ├── socket.js # Socket.IO client setup
│ ├── App.jsx # Main app component
│ └── main.jsx # Entry point
│
│── vite.config.js # Vite configuration
│── package.json # Dependencies & scripts
---
Install dependencies
npm install
Start development server
npm run dev
App will run at http://localhost:5173/
📝 Notes

Make sure the backend server is running before testing chat features.

Update the API base URL in config if required.

Designed to work seamlessly with the backend (Node.js + Express + MongoDB).
