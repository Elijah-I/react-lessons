import React from "react"
import { IInputProps } from "types"

export const Input: React.FC<IInputProps> = ({ type, placeholder, action }) => {
  return <input type={type} placeholder={placeholder} onChange={action} />
}
