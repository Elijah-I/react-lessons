import React from "react"
import { useMatch } from "react-router-dom"
import { NavLink } from "react-router-dom"

import { ILinkProps } from "types"

import style from "./index.module.scss"

const Link: React.FC<ILinkProps> = ({ to, children }) => {
  let match = useMatch({
    path: to,
    end: true
  })

  return (
    <NavLink
      to={to}
      className={
        style.header__link + " " + (match ? style.header__link_selected : "")
      }
    >
      {children}
    </NavLink>
  )
}

const Header = () => {
  return (
    <div className={style.header}>
      <Link to="/">Main</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Header
