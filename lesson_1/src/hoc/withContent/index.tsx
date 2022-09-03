import React from "react"
import { IWithChildren } from "types"
import style from "./index.module.scss"

const WithContent: React.FC<IWithChildren> = ({ children }) => {
  return <div className={style.content}>{children}</div>
}

export default WithContent
