import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import RecruitPage from '@/pages/RecruitPage'

// Vite에서 import.meta.env.BASE_URL => '/my-game/'
const router = createBrowserRouter(
  [
    { path: '/', element: <div className="p-6">홈(임시) — <a href="./recruit" className="underline">/recruit</a></div> },
    { path: '/recruit', element: <RecruitPage /> },
  ],
  { basename: import.meta.env.BASE_URL }
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

