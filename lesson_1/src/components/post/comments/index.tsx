import { fetchPostComments } from "features/post/postThunk"
import { useDispatch } from "hooks/useDispatch"
import { useSelector } from "hooks/useSelector"
import React, { useEffect } from "react"
import { IPostProps } from "types"
import style from "./index.module.scss"

const Comments: React.FC<IPostProps> = ({ current, id }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (!current.id) dispatch(fetchPostComments(id))
  }, [current])

  if (!current.comments) return <></>

  const comments = current.comments.map((comment) => (
    <div
      className={style.comment}
      key={comment.id}
    >
      <div className={style.comment__email}>
        <b>{comment.email}</b>
        <i>{comment.id}</i>
      </div>
      <div className={style.comment__body}>{comment.body}</div>
    </div>
  ))

  return <div className={style.comments}>{comments}</div>
}

export default Comments
