import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: true,
}

export const darkSlice = createSlice({
    name: "dark",
    initialState,
    reducers: {
        switchLight: (state, action) => {
            state.value = !state.value
        }
    }
})

export const { switchLight } = darkSlice.actions
export default darkSlice.reducer