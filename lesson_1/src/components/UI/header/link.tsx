import React from "react"
import { NavLink, useMatch } from "react-router-dom"

import { ILinkProps, LinkEvent } from "types"
import style from "./index.module.scss"

const Link: React.FC<ILinkProps> = ({ link }) => {
  const match = useMatch({
    path: `${link.path}/*`
  })

  const classNM = [style.header__link]
  if (match) classNM.push(style.header__link_selected)

  const props = {
    to: link.path,
    className: classNM.join(" ")
  }

  if (link.click)
    Object.defineProperty(props, "onClick", {
      value: (e: LinkEvent) => link.click?.(e),
      enumerable: true
    })

  return <NavLink {...props}>{link.title}</NavLink>
}

export default Link
