import React, { lazy } from 'react'
import Loadable from 'components/Loadable/Loadable'

const Restaurant = Loadable(lazy(() => import('./restaurant')))

const restaurantRoutes = [
    {
        path: '/restaurant',
        element: < Restaurant/>,
    },
  
]

export default restaurantRoutes


