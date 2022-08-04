import { configureStore } from "@reduxjs/toolkit"
import postSlice from "features/post/postSlice"
import modalSlice from "features/modal/modalSlice"

const store = configureStore({
  reducer: {
    posts: postSlice,
    modal: modalSlice
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
