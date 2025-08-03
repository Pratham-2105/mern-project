MERN Stack Notes Application
A simple and intuitive MERN (MongoDB, Express.js, React, Node.js) stack application for creating, viewing, updating, and deleting notes. This project demonstrates a full-stack web application with a focus on clean architecture and modern development practices.

🚀 Live Demo
You can access the live deployed application here:
https://mern-project-fz7t.onrender.com/ 
(might take a minute to load)

✨ Features
Create Notes: Easily add new notes with a title and content.

View Notes: Display all your notes on a responsive homepage.

Note Details: Click on any note to view its full content and update it.

Update Notes: Modify existing notes with new titles or content.

Delete Notes: Remove notes that are no longer needed.

Responsive Design: Optimized for various screen sizes (mobile, tablet, desktop).

Toast Notifications: User-friendly feedback for actions (e.g., "Note created successfully!").

Rate Limiting: Basic rate limiting implemented on the backend to prevent abuse.

🛠️ Technologies Used
Backend:

Node.js: JavaScript runtime environment.

Express.js: Web framework for Node.js.

MongoDB: NoSQL database for storing notes.

Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.

dotenv: To load environment variables from a .env file.

cors: For enabling Cross-Origin Resource Sharing.

@upstash/ratelimit & @upstash/redis: For implementing rate limiting.

nodemon: For automatic server restarts during development.

Frontend:

React: JavaScript library for building user interfaces.

Vite: Fast frontend build tool.

React Router DOM: For declarative routing in React applications.

Axios: Promise-based HTTP client for making API requests.

Tailwind CSS: A utility-first CSS framework for rapid UI development.

DaisyUI: A Tailwind CSS component library for beautiful UI elements.

react-hot-toast: For elegant and responsive toast notifications.

lucide-react: A collection of beautiful open-source icons.

📦 Project Structure
.
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── .env
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── libs/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .eslintrc.cjs
│   ├── index.html
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── .github/
│   └── workflows/
│       └── deploy.yml (Optional: for CI/CD)
├── .gitignore
├── package.json (Root package.json for monorepo scripts)
└── README.md

⚙️ Setup and Installation
Follow these steps to set up the project locally.

Prerequisites
Node.js (v18 or higher recommended)

npm (v8 or higher recommended)

MongoDB Atlas account or local MongoDB instance

1. Clone the Repository
git clone https://github.com/Pratham-2105/mern-project.git
cd mern-project

2. Backend Setup
Navigate to the backend directory, install dependencies, and set up environment variables.

cd backend
npm install

Create a .env file in the backend directory and add your MongoDB connection URI:

MONGO_URI="YOUR_MONGODB_CONNECTION_STRING"
PORT=5001

Replace YOUR_MONGODB_CONNECTION_STRING with your actual MongoDB Atlas connection string.

3. Frontend Setup
Navigate to the frontend directory and install dependencies.

cd ../frontend
npm install

4. Running the Application Locally
Start the Backend
From the backend directory:

npm run dev

The backend server will start on http://localhost:5001.

Start the Frontend
From the frontend directory:

npm run dev

The frontend development server will start on http://localhost:5173.

Your application should now be running locally, and you can access it in your browser at http://localhost:5173.

🚀 Deployment
This application is designed for deployment on platforms like Render.com.

Backend Deployment
Create a new Web Service on Render.

Connect your GitHub repository.

Root Directory: backend

Build Command: npm install

Start Command: npm start

Environment Variables: Add MONGO_URI and PORT (e.g., 5001).

Frontend Deployment
Create a new Static Site on Render.

Connect your GitHub repository.

Root Directory: frontend

Build Command: npm run build

Publish Directory: dist

Environment Variables: Add VITE_API_URL and set its value to the URL of your deployed backend service (e.g., https://your-backend-service.onrender.com/api).

🤝 Contributing
Contributions are welcome! If you have suggestions for improvements or find any bugs, please open an issue or submit a pull request.

Fork the repository.

Create a new branch (git checkout -b feature/your-feature-name).

Make your changes.

Commit your changes (git commit -m 'feat: Add new feature').

Push to the branch (git push origin feature/your-feature-name).

Open a pull request.

📄 License
This project is licensed under the ISC License.
