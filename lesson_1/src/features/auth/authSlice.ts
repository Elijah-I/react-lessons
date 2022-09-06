import { createSlice } from "@reduxjs/toolkit"
import { IAuthState } from "types"
import { AuthThunk } from "./authThunk"

const initialState: IAuthState = {
  isAuth: true,
  fetching: false
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    AuthThunk(builder)
  }
})

export default authSlice.reducer
