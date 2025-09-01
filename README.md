# 💬 ChatApp

A real-time chat application built with **MERN Stack** (MongoDB, Express, React, Node.js) and **Socket.IO**.  
It demonstrates how to build a full-stack chat system with authentication, Redux Toolkit state management, and instant messaging.

---

## 🚀 Features
- 🔐 User authentication (login/register)
- 🟢 Online/offline user status
- 💬 Real-time 1-to-1 messaging with Socket.IO
- 📡 State management using Redux Toolkit
- 🎨 Modern UI (React + TailwindCSS)
- ⚡ Fast frontend bundling with Vite
- 🗄️ MongoDB for message storage

---

## 🛠️ Tech Stack
- **Frontend:** React, Redux Toolkit, TailwindCSS, Vite  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Real-time:** Socket.IO  

---

## 📂 Project Structure
ChatApp/
│── frontend/ # React + Redux + TailwindCSS (Client-side)
│ └── src/ # Components, Pages, Redux slices, socket.js
│
│── backend/ # Node.js + Express + MongoDB (Server-side)
│ ├── models/ # User, Message schemas
│ ├── routes/ # Auth, Message APIs
│ └── server.js # Express + Socket.IO setup
│
│── README.md # Documentation
│── .gitignore # Git ignored files 
---

## 📝 How It Works
1. User registers/logs in → stored in **MongoDB**.  
2. Frontend connects to backend via **Socket.IO**.  
3. Messages are saved in DB and delivered instantly in real-time.  
4. Redux manages app state (auth, users, chats).  

---

## 🔰 Why Use This Project?
- Learn **MERN stack** with real-time features.  
- Understand **Socket.IO** for instant communication.  
- Beginner-friendly code structure.  
- Easy to extend (group chat, file sharing).  
