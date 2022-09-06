import { createAsyncThunk } from "@reduxjs/toolkit"
import AuthService from "API/authService"
import { IAuthState } from "types"

export const fetchAuth = createAsyncThunk(
  "auth/fetchAuth",
  (login: boolean) => {
    if (login) return AuthService.login()
    else return AuthService.logout()
  }
)

export const AuthThunk = (builder: any) => {
  builder.addCase(
    fetchAuth.fulfilled,
    (state: IAuthState, action: { payload: boolean }) => {
      state.fetching = false
      state.isAuth = action.payload
    }
  )

  builder.addCase(
    fetchAuth.pending,
    (state: IAuthState, action: { payload: boolean }) => {
      state.fetching = true
    }
  )
}
