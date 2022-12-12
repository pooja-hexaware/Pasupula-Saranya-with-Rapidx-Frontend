import { configureStore } from '@reduxjs/toolkit'
import toppingsReducer from '../views/toppings/store/toppingsSlice'
import homeReducer from  "../views/home/store/homeSlice"
import { createLogger } from 'redux-logger'
import notificationReducer from '../middleware/notification/store/notificationSlice'
import restaurantsReducer from '../views/restaurantDetails/store/restaurantSlice'
import { cartReducer } from 'views/CartDetails/store/cartSlice'
let middlewares = []
if (process.env.NODE_ENV === `development`) {
    const logger = createLogger({
        collapsed: (getState, action, logEntry) => !logEntry.error,
    })
    middlewares.push(logger)
}
export default configureStore({
    reducer: {
        notification: notificationReducer,
        toppings: toppingsReducer,
        home:homeReducer,
        rest : restaurantsReducer,
        cart:cartReducer
    },
    
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middlewares),
    devTools: process.env.NODE_ENV !== 'production',
})
