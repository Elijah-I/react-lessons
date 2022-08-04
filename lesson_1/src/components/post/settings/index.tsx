import React from "react"

import style from "../index.module.scss"
import Search from "./search"
import Sort from "./sort"

const Settings = () => {
  return (
    <div className={style.posts__settings}>
      <Sort />
      <Search />
    </div>
  )
}

export default Settings
