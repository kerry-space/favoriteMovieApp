import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: 0,
}

export const counterslice = createSlice({
    name: "Counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },

        decrement: (state) => {
            state.value -= 1
        },

        incrementByAmount: (state, action) => {
            state.value += action.payload
        },

        double: (state) => {
            state.value += 2
        }
    },
})


export const {increment, decrement,incrementByAmount, double } = counterslice.actions
export default counterslice.reducer