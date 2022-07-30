import { configureStore } from "@reduxjs/toolkit"

import userSlice from "tsx/features/user"
import todoSlice from "tsx/features/todo"

const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
