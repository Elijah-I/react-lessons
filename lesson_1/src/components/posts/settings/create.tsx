import React from "react"
import { useDispatch } from "hooks/useDispatch"

import { Popup } from "types"
import Button from "components/UI/button"

import { toggleModal } from "features/modal/modalSlice"

const Create = () => {
  const dispatch = useDispatch()

  return (
    <Button
      size="medium"
      action={() => dispatch(toggleModal(Popup.AddPost))}
    >
      add post
    </Button>
  )
}

export default Create
