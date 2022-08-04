import { createSlice } from "@reduxjs/toolkit"
import { IPostState, Post } from "types"

const initialState: IPostState = {
  list: []
}

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state: IPostState, action) => {
      state.list = action.payload
    },
    addPost: (state: IPostState, action) => {
      state.list.push(action.payload)
      localStorage.setItem("post.list", JSON.stringify(state.list))
    },
    deletePost: (state: IPostState, action) => {
      state.list = state.list.filter((post) => post.id !== action.payload)
      localStorage.setItem("post.list", JSON.stringify(state.list))
    },

    sortPosts: (state: IPostState, action: { payload: keyof Post }) => {
      state.list = state.list.sort((a, b) =>
        a[action.payload].toString().localeCompare(b[action.payload].toString())
      )
    },

    findPosts: (state: IPostState, action) => {
      for (let i in state.list)
        state.list[i].show =
          !action.payload ||
          state.list[i].title
            .toLowerCase()
            .includes(action.payload.toLowerCase()) ||
          state.list[i].content
            .toLowerCase()
            .includes(action.payload.toLowerCase())
    }
  }
})

export default postSlice.reducer
export const { setPosts, sortPosts, findPosts, addPost, deletePost } =
  postSlice.actions
