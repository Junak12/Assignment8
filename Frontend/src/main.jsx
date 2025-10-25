import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'  
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import install from './Components/App/install.jsx'  
import App1 from './Components/App/App1.jsx'
import Details from './Components/App/Details.jsx' 




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
      {
        path: '/details/:id',
        loader: async ({ params }) => {
            const res = await fetch('/Data.json');
            const apps = await res.json();
            const app = apps.find(a => a.id === parseInt(params.id));
            return app;
        },
        Component: Details,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
