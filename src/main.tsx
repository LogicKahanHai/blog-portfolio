import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import * as Components from './components/components.tsx'
import * as Pages from './pages/pages.tsx'
import * as NetworkCalls from './network/network.tsx'
import * as PageLoaders from './pages/PageLoaders'
import { BlogTeaserProps } from './components/Home/BlogTeaser.tsx'
import { hydrate } from 'react-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Components.ErrorPage />,
    children: [
      {
        index: true, element: <Pages.Home />,
        loader: (async () => {
          try {
            const blogTeasers: BlogTeaserProps[] = await NetworkCalls.HomeCalls.getBlogTeasers()
            return blogTeasers
          } catch (error) {
            // console.error(error)
            // throw new Response('Failed to load blogs', { status: 500, statusText: 'Failed to load blogs' });
            return []
          }
        }),
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
