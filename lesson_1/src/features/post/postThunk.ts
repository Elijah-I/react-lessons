import { createAsyncThunk } from "@reduxjs/toolkit"
import { IPostState, IPostAction, IThunkData } from "types"
import PostService from "API/postService"

export const fetchPosts = createAsyncThunk(
  "post/fetchPosts",
  async (data: IThunkData) => {
    return await PostService.getAll(data.limit, data.current)
  }
)

const FP_fullfiled = (state: IPostState, action: { payload: IPostAction }) => {
  state.fetching = false

  state.list = action.payload.data.map((el) => ({ ...el, show: true }))

  if (!state.pages.total)
    state.pages.total = action.payload.headers["x-total-count"]
}

const FP_pending = (state: IPostState) => {
  state.fetching = true
}

export const postThunk = (builder: any) => {
  builder.addCase(fetchPosts.fulfilled, FP_fullfiled)
  builder.addCase(fetchPosts.pending, FP_pending)
}
