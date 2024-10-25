import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './componets/pages/Home'
import Signup from './componets/pages/Signup'
import Login from './componets/pages/Login'

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/signup',
      element: <Signup/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/about',
      element: <Login/>
    },
    {
      path: '/contact',
      element: <Login/>
    }

  ])
  
  return (
   <RouterProvider router={router}></RouterProvider>
  )
}
