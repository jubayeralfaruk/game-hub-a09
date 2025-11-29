# 🎮 GameHub

A modern and interactive game exploration web application built using
**React**, **React Router**, **Firebase Authentication**, and
**TailwindCSS**.\
GameHub allows users to browse games, view detailed information,
authenticate with email/password or Google, and maintain a personalized
game library --- all inside a clean and responsive UI.

## 🚀 Purpose of the GameHub Project

The purpose of **GameHub** is to provide a simple, engaging, and
user-friendly platform where users can:

-   Discover games by category\
-   View detailed game information\
-   Save their favorite games\
-   Authenticate securely\
-   Customize their profile

It is designed for all types of gamers, making the process of exploring
and managing games **easy, fast, and visually appealing**.

## 🌐 Live Demo

🔗 **https://game-library-4282b.web.app/**

## 📌 Features

### 🔹 Core Features

-   Game Listing Page\
-   Game Details Page\
-   Dynamic Routing\
-   Search, Sort & Category Filtering\
-   Add to Favorites / Library\
-   Loader & Data Loading States

### 🔹 Authentication

-   Register with Email\
-   Login with Email\
-   Google Login\
-   Password Reset\
-   Protected Routes\
-   User Profile & Edit Profile

### 🔹 UI & UX

-   Fully Responsive Design\
-   Error Page (404)\
-   Clean Modern UI (DaisyUI + TailwindCSS)

## 📦 Used npm Packages

  Package Name
  --------------------
  `react`
  `react-router-dom`
  `react-icons`
  `framer-motion`
  `react-toastify`
  `firebase`
  `daisyui`
  `tailwindcss`
  `vite`

## 📁 Project Setup & Installation

### 1️⃣ Clone the Repository

``` sh
git clone https://github.com/jubayeralfaruk/game-hub-a09
cd gamehub
```

### 2️⃣ Install Dependencies

``` sh
npm install
```

### 3️⃣ Firebase Configuration

Create a file named **`.env.local`** in the root folder and add:

``` env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4️⃣ Start the Development Server

``` sh
npm run dev
```

### 5️⃣ Build for Production

``` sh
npm run build
```

## 📂 Folder Structure

    src/
     ├── components/
     ├── pages/
     ├── layouts/
     ├── firebase/
     ├── hooks/
     ├── router/
     ├── assets/
     └── App.jsx

## 👨‍💻 Technologies Used

-   React + Vite\
-   TailwindCSS & DaisyUI\
-   Firebase Authentication\
-   Framer Motion\
-   React Toastify

## 🙌 Contribution

Pull requests are welcome. For major changes, please open an issue first
to discuss what you'd like to update.
