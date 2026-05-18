# HireMind AI

HireMind AI is a modern AI-powered mock interview preparation platform built using React, Firebase, Tailwind CSS, and Framer Motion. The application helps users practice interviews, generate technical questions, analyze performance, and manage their professional profile through an interactive dashboard.

---

## Features

- Firebase Authentication (Signup/Login)
- Protected Routes
- AI Mock Interview Simulation
- Interview Question Generator
- Analytics Dashboard
- Professional User Settings Page
- Persistent Login Sessions
- Responsive Modern UI
- Animated Dashboard with Framer Motion
- SaaS-style Interface Design

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Framer Motion
- Recharts
- Lucide React Icons

### Backend / Services
- Firebase Authentication

### Deployment
- Vercel

---

## Project Structure

```txt
src/
│
├── components/
│   ├── Navbar.jsx
│   └── ProtectedRoute.jsx
│
├── context/
│   └── AuthContext.jsx
│
├── pages/
│   ├── Analytics.jsx
│   ├── Dashboard.jsx
│   ├── Generate.jsx
│   ├── Interview.jsx
│   ├── Login.jsx
│   ├── Settings.jsx
│   └── Signup.jsx
│
├── firebase.js
├── App.jsx
├── main.jsx
├── index.css
└── App.css