import { useSelector } from "hooks/useSelector"
import { useDispatch } from "react-redux"
import React from "react"

import { IModalProps } from "types"
import style from "./index.module.scss"

import { toggleModal } from "features/modal/modalSlice"

const Modal: React.FC<IModalProps> = ({ content }) => {
  const dispatch = useDispatch()
  const active = useSelector((state) => state.modal.active)

  const rootClass = [style.modal]
  if (active) rootClass.push(style.modal_active)

  return (
    <div
      className={rootClass.join(" ")}
      onClick={() => dispatch(toggleModal())}
    >
      <div
        className={style.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        {content}
      </div>
    </div>
  )
}

export default Modal
