import React, { useEffect } from "react"
import { useSelector } from "hooks/useSelector"

import style from "../index.module.scss"
import Button from "components/UI/button"
import { deletePost } from "features/post/postSlice"
import { fetchPosts } from "features/post/postThunk"

import WithLoading from "hoc/withLoading"
import WithTransition from "hoc/withTransition"
import { useDispatch } from "hooks/useDispatch"
import { useNavigate } from "react-router-dom"

const List = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    list,
    fetching,
    pages: { limit, current }
  } = useSelector((state) => state.posts)

  useEffect(() => {
    dispatch(fetchPosts({ limit, current }))
  }, [])

  const posts = list.map((post) => {
    if (!post.show) return <div key={post.id}></div>

    return (
      <div
        key={post.id}
        className={style.posts__item}
      >
        <div>
          <h2>
            {post.id}. {post.title}
          </h2>
          <p>{post.body}</p>
        </div>
        <div className={style.posts__actions}>
          <Button
            action={() => navigate(`/posts/${post.id}`)}
            size="small"
          >
            open
          </Button>
          <Button
            action={() => dispatch(deletePost(post.id))}
            size="small"
          >
            delete
          </Button>
        </div>
      </div>
    )
  })

  const posts_null = (
    <div
      key={0}
      className={style.posts__null}
    >
      no posts yet
    </div>
  )

  return (
    <WithLoading loading={fetching}>
      <WithTransition
        classNM={style.posts}
        classID="post"
      >
        {posts.length ? posts : posts_null}
      </WithTransition>
    </WithLoading>
  )
}

export default List