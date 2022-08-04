import { createSlice } from "@reduxjs/toolkit"
import { IModalState } from "types"

const initialState: IModalState = {
  active: false
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.active = !state.active
    }
  }
})

export default modalSlice.reducer
export const { toggleModal } = modalSlice.actions
