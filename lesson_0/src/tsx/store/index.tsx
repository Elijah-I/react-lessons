import { configureStore } from "@reduxjs/toolkit"

import userSlice from "tsx/features/user"
import todoSlice from "tsx/features/todo"
import postSlice from "tsx/features/post"

const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice,
    post: postSlice
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
