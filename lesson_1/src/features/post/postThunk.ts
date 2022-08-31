import { createAsyncThunk } from "@reduxjs/toolkit"
import { IPostState, IPostAction, Post } from "types"
import axios, { AxiosError } from "axios"

export const fetchPosts = createAsyncThunk(
  "post/fetchPosts",
  async (_, thunkAPI) => {
    try {
      const posts: { data: Post[] } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      )
      return posts.data as Post[]
    } catch (e) {
      return thunkAPI.rejectWithValue((e as AxiosError).message)
    }
  }
)

const FP_fullfiled = (state: IPostState, action: IPostAction) => {
  state.fetching = false
  state.list = action.payload.map((el) => ({ ...el, show: true }))
}

const FP_pending = (state: IPostState) => {
  state.fetching = true
}

export const postThunk = (builder: any) => {
  builder.addCase(fetchPosts.fulfilled, FP_fullfiled)
  builder.addCase(fetchPosts.pending, FP_pending)
}
