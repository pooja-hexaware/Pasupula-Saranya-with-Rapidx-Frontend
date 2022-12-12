import NotFound from 'views/sessions/NotFound'
import toppingsRoutes from 'views/toppings/ToppingsRoutes'
import sessionRoutes from 'views/sessions/SessionRoutes'
import MatxLayout from '../components/MatxLayout/MatxLayout'
import homeRoutes from 'views/home/HomeRoutes'
import { Navigate } from 'react-router-dom'
import restaurantRoutes from 'views/restaurantDetails/restaurantRoutes'
import cartRoutes from 'views/CartDetails/cartRoutes'
export const AllPages = () => {
    const all_routes = [
        {
            element: <MatxLayout />,
            children: [
                ...homeRoutes,
                ...toppingsRoutes,
                ...restaurantRoutes,
                ...cartRoutes
            ],
        },
        ...sessionRoutes,
        {
            path: '/',
            element: <Navigate to="restaurant" />,
        },
        {
            path: '/home',
            element: <Navigate to="home" />,
        },
        {
            path: '/cart',
            element: <Navigate to="cart" />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]
    return all_routes
}
