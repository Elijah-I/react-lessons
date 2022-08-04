import React from "react"

import style from "./index.module.scss"

import Settings from "./settings"
import List from "./list"

const Posts = () => (
  <div className={style.posts}>
    <Settings />
    <List />
  </div>
)

export default Posts
