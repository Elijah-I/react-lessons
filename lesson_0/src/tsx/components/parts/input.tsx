import React from "react"
import { IInputProps } from "types"

export const Input: React.FC<IInputProps> = ({
  type,
  placeholder,
  action,
  value = ""
}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={action}
    />
  )
}
