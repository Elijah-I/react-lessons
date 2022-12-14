import { createSlice } from "@reduxjs/toolkit"
import { ActionStr, ActionNum, ActionTodo, ITodoState } from "types"

const initialState: ITodoState = {
  list: []
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    initTodo: (state: ITodoState, action: ActionTodo) => {
      state.list = action.payload
    },

    addTodo: (state: ITodoState, action: ActionStr) => {
      state.list.push({
        id: Date.now(),
        value: action.payload,
        done: false
      })

      localStorage.setItem("todo.list", JSON.stringify(state.list))
    },

    doneTodo: (state: ITodoState, action: ActionNum) => {
      const key = state.list.findIndex((todo) => todo.id === action.payload)
      state.list[key].done = !state.list[key].done

      localStorage.setItem("todo.list", JSON.stringify(state.list))
    },

    deleteTodo: (state: ITodoState, action: ActionNum) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload)

      localStorage.setItem("todo.list", JSON.stringify(state.list))
    }
  }
})

export default todoSlice.reducer

export const { initTodo, addTodo, doneTodo, deleteTodo } = todoSlice.actions
