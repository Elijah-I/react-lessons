import { Post, Thunk, IPostState, ActionPost, ActionStr } from "types"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState: IPostState = {
  fetching: false,
  error: null,
  list: []
}

export const fetchPosts: Thunk = createAsyncThunk(
  "post/fetchPosts",
  async () => {
    const posts: { data: Post[] } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    )

    return posts.data
  }
)

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.fulfilled]: (state: IPostState, action: ActionPost) => {
      state.fetching = false
      state.error = null
      state.list = action.payload
    },
    [fetchPosts.rejected]: (state: IPostState, action: ActionStr) => {
      state.fetching = false
      state.error = action.payload
      state.list = []
    },
    [fetchPosts.pending]: (state: IPostState) => {
      state.fetching = true
      state.fetching = true
    }
  }
})

export default postSlice.reducer
