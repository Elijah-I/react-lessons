import { configureStore } from "@reduxjs/toolkit"
import postSlice from "features/post/postSlice"
import modalSlice from "features/modal/modalSlice"

const reducer = {
  posts: postSlice,
  modal: modalSlice
}

const store = configureStore({
  reducer
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
