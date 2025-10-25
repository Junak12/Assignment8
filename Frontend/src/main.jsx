import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'  // ✅ Correct import
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import install from './Components/App/install.jsx'  // ✅ Capitalized
import App1 from './Components/App/App1.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/app1',
        loader: () => fetch('/Data.json'),
        Component: App1,
      },
      {
        path: '/instal',
        Component: install,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
