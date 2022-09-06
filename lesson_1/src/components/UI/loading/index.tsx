import React from "react"
import style from "./index.module.scss"

export const Loading = ({ relative = false }) => {
  const classNM = [style.loader]
  if (relative) classNM.push(style.loader_relative)
  return <div className={classNM.join(" ")}></div>
}
