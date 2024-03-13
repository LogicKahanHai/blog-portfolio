import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import * as Components from './components/components.tsx'
import * as Pages from './pages/pages.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Components.ErrorPage />,
    children: [
      {
        index: true, element: <Pages.Home />,
        // errorElement: <Components.ErrorPage />,
      },
      { path: 'about', element: <h1>About</h1> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
