import React, { lazy } from 'react'
import Loadable from 'components/Loadable/Loadable'

const Cart = Loadable(lazy(() => import('./cart')))

const cartRoutes = [
    {
        path: '/cart',
        element: <Cart  />,
    },
  
]

export default cartRoutes


