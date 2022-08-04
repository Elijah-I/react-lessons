import React, { useEffect } from "react"

import style from "./index.module.scss"
import Button from "components/UI/button"
import { setPosts, deletePost } from "features/post/postSlice"
import { useDispatch } from "react-redux"
import { useSelector } from "hooks/useSelector"

const List = () => {
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("post.list") || "[]")
    dispatch(setPosts(list))
  }, [])

  let shown = 0
  const dispatch = useDispatch()
  const list = useSelector((state) => state.posts.list)

  const posts = list.map((post) => {
    if (!post.show) return
    shown++
    return (
      <div
        className={style.posts__item}
        key={post.id}
      >
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
        <Button
          action={() => dispatch(deletePost(post.id))}
          size="small"
        >
          delete
        </Button>
      </div>
    )
  })

  const posts_null = <div className={style.posts__null}>no posts yet</div>

  return <>{shown ? posts : posts_null}</>
}

export default List
