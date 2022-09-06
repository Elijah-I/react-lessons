import React from "react"
import { useNavigate } from "react-router-dom"

import { deletePost } from "features/post/postSlice"
import { useDispatch } from "hooks/useDispatch"

import Button from "components/UI/button"

import style from "../index.module.scss"
import { IPostListProps } from "types"

const Post: React.FC<IPostListProps> = ({ data }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (!data.show) return <div key={data.id}></div>

  return (
    <div
      key={data.id}
      className={style.posts__item}
    >
      <div>
        <h2>
          {data.id}. {data.title}
        </h2>
        <p>{data.body}</p>
      </div>
      <div className={style.posts__actions}>
        <Button
          action={() => navigate(`/posts/${data.id}`)}
          size="small"
        >
          open
        </Button>
        <Button
          action={() => dispatch(deletePost(data.id))}
          size="small"
        >
          delete
        </Button>
      </div>
    </div>
  )
}

export default Post
