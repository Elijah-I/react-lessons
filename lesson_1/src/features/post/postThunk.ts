import { createAsyncThunk } from "@reduxjs/toolkit"
import { IPostState, IPostAction } from "types"
import PostService from "API/postService"

export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  return await PostService.getAll()
})

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
