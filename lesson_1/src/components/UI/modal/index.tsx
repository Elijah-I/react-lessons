import { useSelector } from "hooks/useSelector"
import { useDispatch } from "hooks/useDispatch"
import React from "react"

import { Popup } from "types"
import style from "./index.module.scss"

import AddPost from "components/post/create"
import { toggleModal } from "features/modal/modalSlice"

const Modal = () => {
  const dispatch = useDispatch()
  const { active, type } = useSelector((state) => state.modal)

  const rootClass = [style.modal]
  if (active) rootClass.push(style.modal_active)

  return (
    <div
      className={rootClass.join(" ")}
      onClick={() => dispatch(toggleModal(type))}
    >
      <div
        className={style.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        {type === Popup.AddPost && <AddPost />}
      </div>
    </div>
  )
}

export default Modal
