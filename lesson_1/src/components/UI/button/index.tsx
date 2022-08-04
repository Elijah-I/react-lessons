import React from "react"
import style from "./index.module.scss"
import { IButtonProps } from "types"

const Button: React.FC<IButtonProps> = ({ size, children, action }) => {
  return (
    <button
      className={`${style.button} ${style[`button_${size}`]}`}
      onClick={action}
    >
      {children}
    </button>
  )
}

export default Button
