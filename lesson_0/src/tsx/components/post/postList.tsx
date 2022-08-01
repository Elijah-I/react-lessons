import React from "react"
import css from "scss/app.module.scss"
import { WithLoading } from "tsx/hoc/withLoading"
import { useSelector } from "tsx/hooks/useSelector"

export const PostList = () => {
  const { list: posts, fetching, error } = useSelector((state) => state.post)

  const postsHTML = posts.map((post) => (
    <div
      className={css.post__item}
      key={post.id}
    >
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  ))

  return (
    <WithLoading
      error={error}
      isFetching={fetching}
      noContent={posts.length === 0}
    >
      {postsHTML}
    </WithLoading>
  )
}
