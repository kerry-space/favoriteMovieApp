import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"

//All the state in a Redux application is stored in a single object
export const store = configureStore({
    reducer: counterReducer,
})