import React from "react"
import { useDispatch } from "react-redux"
import css from "scss/app.module.scss"

import { fetchPosts } from "tsx/features/post"
import { PostList } from "./postList"

export const Post = () => {
  const dispatch = useDispatch()

  return (
    <div className={css.post}>
      <div
        className={css.post__button}
        onClick={() => dispatch(fetchPosts())}
      >
        request
      </div>
      <PostList></PostList>
    </div>
  )
}
