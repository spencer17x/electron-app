import { createHashRouter } from 'react-router-dom'
import PageA from './components/PageA'
import PageB from './components/PageB'

export const router = createHashRouter([
  {
    element: <PageA />,
    path: '/page-a'
  },
  {
    element: <PageB />,
    path: '/page-b'
  },
  {
    element: <PageA />,
    path: '/'
  }
])
