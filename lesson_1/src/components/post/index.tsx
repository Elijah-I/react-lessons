import React, { useEffect } from "react"
import { useDispatch } from "hooks/useDispatch"
import { fetchPostById } from "features/post/postThunk"
import style from "./index.module.scss"
import { IPostProps } from "types"

const Post: React.FC<IPostProps> = ({ current, id }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (!current.id) dispatch(fetchPostById(id))
  }, [current])

  if (!current) return <b className={style.post__error}>wrong post ID</b>

  return (
    <div className={style.post__content}>
      <h1>
        {id}. {current.title}
      </h1>
      <p>{current.body}</p>
    </div>
  )
}

export default Post
