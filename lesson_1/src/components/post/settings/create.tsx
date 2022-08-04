import React from "react"
import { useDispatch } from "react-redux"

import Button from "components/UI/button"

import { toggleModal } from "features/modal/modalSlice"

const Create = () => {
  const dispatch = useDispatch()

  return (
    <Button
      size="medium"
      action={() => dispatch(toggleModal())}
    >
      add post
    </Button>
  )
}

export default Create
