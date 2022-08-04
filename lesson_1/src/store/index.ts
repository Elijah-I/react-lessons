import { configureStore } from "@reduxjs/toolkit"
import postSlice from "features/post/postSlice"

const store = configureStore({
  reducer: {
    posts: postSlice
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
