import { useState } from 'react'

import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Transaction from './pages/Transaction/Transaction'
import Support from './pages/Support/Support'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/transactions',
    element: <Transaction />,
  },
  {
    path: '/support',
    element: <Support />,
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
