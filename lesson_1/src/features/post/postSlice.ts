import { createSlice } from "@reduxjs/toolkit"
import { IPostState, Post } from "types"
import { postThunk } from "./postThunk"

const initialState: IPostState = {
  list: [],
  current: {} as Post,
  pages: {
    total: 1,
    limit: 10,
    current: 1
  },
  fetching: false
}

const postSlice = createSlice({
  name: "post",
  initialState,

  reducers: {
    setPosts: (state: IPostState, action) => {
      state.list = action.payload
    },

    addPost: (state: IPostState, action) => {
      state.list.unshift(action.payload)
      localStorage.setItem("post.list", JSON.stringify(state.list))
    },

    deletePost: (state: IPostState, action) => {
      state.list = state.list.filter((post) => post.id !== action.payload)
      localStorage.setItem("post.list", JSON.stringify(state.list))
    },

    sortPosts: (state: IPostState, action: { payload: "title" | "body" }) => {
      state.list.sort((a, b) =>
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
          state.list[i].body
            .toLowerCase()
            .includes(action.payload.toLowerCase())
    },

    switchPage: (state: IPostState, action) => {
      state.pages.current = +action.payload
    },

    setLimit: (state: IPostState, action) => {
      state.pages.current = 1
      state.pages.limit = +action.payload
    }
  },

  extraReducers: (builder) => {
    postThunk(builder)
  }
})

export default postSlice.reducer
export const {
  setPosts,
  sortPosts,
  findPosts,
  addPost,
  deletePost,
  switchPage,
  setLimit
} = postSlice.actions
