import { createSlice } from "@reduxjs/toolkit";
import { fetchMenuList } from "./home.actions";

const homeSlice = createSlice({
    name:"menu",
    initialState: {
        menu: [],
        count : []
    },
    reducers:{
        addmenu: (state, action) => {
            state.menu = action.payload;
          },
        //   incrementCounter : (state,action) => {
        //     const menuitem = state.co
        //   }
    },
    extraReducers:{
        [fetchMenuList.fulfilled]: (state, action) => {
            state.menu = action.payload;
        }
    }
})

export const { addmenu } = homeSlice.actions

export default homeSlice.reducer