import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import AboutMe from './pages/AboutMe.tsx'
import MyProjects from './pages/MyProjects.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/my-projects",
    element: <MyProjects />
  },
  {
    path: "/about-me",
    element: <AboutMe />
  },
  {
    path: "/contact-me",
    element: <App />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
