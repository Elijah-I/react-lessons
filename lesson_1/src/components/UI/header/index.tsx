import React from "react"
import { Link } from "react-router-dom"

import style from "./index.module.scss"

const Header = () => {
  return (
    <div className={style.header}>
      <Link to="/posts">Posts</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Header
