import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchRestaurantList= createAsyncThunk("fetchRestaurantList/restaurant",async()=>{
    const result =  await axios.get('http://localhost:3001/restaurants');
    return result.data;
    })