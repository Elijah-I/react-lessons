import React, { useState } from "react"
import { addPost } from "features/post/postSlice"

import { Popup } from "types"
import style from "./index.module.scss"
import { useDispatch } from "hooks/useDispatch"

import Input from "components/UI/input"
import Button from "components/UI/button"

import { toggleModal } from "features/modal/modalSlice"

const Create = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const addPostAction = () => {
    dispatch(
      addPost({
        id: Date.now(),
        show: true,
        title,
        body
      })
    )

    setTitle("")
    setBody("")
    dispatch(toggleModal(Popup.AddPost))
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
        value={body}
        callback={(e) => setBody(e.target.value)}
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
