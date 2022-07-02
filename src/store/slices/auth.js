import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: "",
    isLogged: false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state,action) => {
            state.token = action.payload.token
            state.isLogged = true
        }
    }
})

export const { setLogin } = authSlice.actions

export default authSlice.reducer