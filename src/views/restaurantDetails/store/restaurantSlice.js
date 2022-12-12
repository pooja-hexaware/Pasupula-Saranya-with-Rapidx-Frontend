import { createSlice } from "@reduxjs/toolkit";
import { fetchRestaurantList } from "./restaurant.actions";

const restaurantsSlice = createSlice({
    name:"menu",
    initialState: {
        restaurant: [],
    },
    reducers:{
        addmenu: (state, action) => {
            state.restaurant = action.payload;
          },
    },
    extraReducers:{
        [fetchRestaurantList.fulfilled]: (state, action) => {
            state.restaurant = action.payload;
        }
    }
})

export const { addmenu } = restaurantsSlice.actions

export default  restaurantsSlice.reducer