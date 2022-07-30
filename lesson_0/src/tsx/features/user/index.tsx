import { createSlice } from "@reduxjs/toolkit"
import { ActionStr, IUserState } from "types"

const initialState: IUserState = {
  firstName: "",
  lastName: ""
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFirstName: (state: IUserState, action: ActionStr) => {
      state.firstName = action.payload
    },
    setLastName: (state: IUserState, action: ActionStr) => {
      state.lastName = action.payload
    }
  }
})

export default userSlice.reducer

export const { setFirstName, setLastName } = userSlice.actions
