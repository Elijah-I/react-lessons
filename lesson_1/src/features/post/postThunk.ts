import { createAsyncThunk } from "@reduxjs/toolkit"
import PostService from "API/postService"
import { IPostState, IPostAction, IThunkData, Post, PostComment } from "types"

export const fetchPosts = createAsyncThunk(
  "post/fetchPosts",
  async (data: IThunkData) => {
    return await PostService.getAll(data.limit, data.current)
  }
)

export const fetchPostById = createAsyncThunk(
  "post/fetchPostById",
  async (id: string) => {
    return await PostService.getById(id)
  }
)

export const fetchPostComments = createAsyncThunk(
  "post/fetchPostComments",
  async (id: string) => {
    return await PostService.getComments(id)
  }
)

const pending = (state: IPostState) => {
  state.fetching = true
}

export const postThunk = (builder: any) => {
  builder.addCase(
    fetchPosts.fulfilled,
    (state: IPostState, action: { payload: IPostAction }) => {
      state.fetching = false
      state.list = action.payload.data.map((el) => ({ ...el, show: true }))
      state.pages.total = +action.payload.headers["x-total-count"]
    }
  )

  builder.addCase(
    fetchPostById.fulfilled,
    (state: IPostState, action: { payload: Post }) => {
      state.current = action.payload
      state.fetching = false
    }
  )

  builder.addCase(
    fetchPostComments.fulfilled,
    (state: IPostState, action: { payload: PostComment[] }) => {
      state.current.comments = action.payload
    }
  )

  builder.addCase(fetchPosts.pending, pending)
  builder.addCase(fetchPostById.pending, pending)
}
