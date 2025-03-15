import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';
import NotFound from './NotFound';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path:'/login',
    element: <Login />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
