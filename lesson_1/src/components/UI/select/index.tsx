import React, { useEffect, useRef, useState } from "react"

import style from "./index.module.scss"
import { Dispatch, ISelectProps, SelectEvent } from "types"

const Select: React.FC<ISelectProps> = ({ callback, children }) => {
  const isFirstRender = useRef(true)
  const [value, setValue]: [any, Dispatch] = useState("")

  const change = (e: SelectEvent) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    callback(value)
  }, [value])

  return (
    <div className={style.container}>
      <select
        value={value}
        onChange={change}
      >
        {children}
      </select>
    </div>
  )
}

export default Select
