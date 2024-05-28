This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Microsoft To Do List Clone

This is a Microsoft To Do list clone built with Next.js, Firebase, and Tailwind CSS.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features
- User authentication
- Add, edit, delete tasks
- Mark tasks as completed
- Responsive design

## Tech Stack
- **Framework**: [Next.js](https://nextjs.org/)
- **Backend**: [Firebase](https://firebase.google.com/)
    - Firestore for database
    - Firebase Auth for authentication
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/)

## Prerequisites
- Node.js (>= 14.x)
- npm or yarn
- Firebase account

## Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/microsoft-todo-clone.git
   cd microsoft-todo-clone

- ## Configuration
### Firebase Setup

- Go to the Firebase Console.
- Create a new project.
- Enable Firestore and Firebase Authentication (email/password).
- Add Firebase Config

- Create a .env.local file in the root directory.
Add your Firebase project configuration:


1. NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
2. NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
3. NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
4. NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
5. NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
6. NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
7. Running the Application

## Start the development server


```sh npm run dev```
# or
yarn dev
Open your browser
Navigate to http://localhost:3000 to see the application in action.

Deployment
Build the application

sh
Copy code
npm run build
# or
yarn build
Start the production server

sh
Copy code
npm start
# or
yarn start
Deploy to Vercel

If you want to deploy to Vercel, follow their deployment guide.
Connect your GitHub repository and Vercel will handle the rest.
Contributing
Contributions are welcome! Please open an issue or submit a pull request.

License
This project is licensed under the MIT License.

