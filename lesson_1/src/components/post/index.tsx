import React from "react"

import style from "./index.module.scss"
import Modal from "components/UI/modal"

import Create from "./create"
import Settings from "./settings"
import List from "./list"

const Posts = () => (
  <div className={style.posts}>
    <Modal content={<Create />} />
    <Settings />
    <List />
  </div>
)

export default Posts
