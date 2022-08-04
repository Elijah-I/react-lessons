import { createSlice } from "@reduxjs/toolkit"
import { IModalState } from "types"

const initialState: IModalState = {
  active: false,
  type: null
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.active = !state.active
      state.type = action.payload
    }
  }
})

export default modalSlice.reducer
export const { toggleModal } = modalSlice.actions
