import React from "react"

import style from "./index.module.scss"
import Create from "./create"
import Settings from "./settings"
import List from "./list"

const Posts = () => {
  return (
    <div className={style.posts}>
      <Create />
      <Settings />
      <List />
    </div>
  )
}

export default Posts
