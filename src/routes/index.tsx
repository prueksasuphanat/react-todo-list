import { createBrowserRouter } from 'react-router-dom'

import App from '@/App'
import Dashboard from '@/features/dashboard/pages/Dashboard'


import Test from '@/features/test/Test'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
     
    ],
  },
  {
    path: '/test',
    element: <Test />,
  },
])
