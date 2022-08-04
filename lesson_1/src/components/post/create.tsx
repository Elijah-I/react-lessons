import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addPost } from "features/post/postSlice"

import style from "./index.module.scss"
import Input from "components/UI/input"
import Button from "components/UI/button"
import useInput from "hooks/useInput"

const Create = () => {
  const [title, setTitle] = useInput()
  const [content, setContent] = useInput()

  const dispatch = useDispatch()
  const addPostAction = () => {
    const post = {
      id: Date.now(),
      show: true,
      title,
      content
    }
    setTitle("")
    setContent("")
    dispatch(addPost(post))
  }

  return (
    <div className={style.posts__create}>
      <Input
        type="text"
        value={title}
        callback={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <Input
        type="text"
        value={content}
        callback={(e) => setContent(e.target.value)}
        placeholder="content"
      />
      <Button
        size="medium"
        action={addPostAction}
      >
        add
      </Button>
    </div>
  )
}

export default Create
