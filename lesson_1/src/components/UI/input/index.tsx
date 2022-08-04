import React from "react"
import "./index.module.scss"
import { IInputProps } from "types"

const Input: React.FC<IInputProps> = ({
  type,
  placeholder,
  callback,
  value = ""
}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={callback}
    />
  )
}

export default Input
