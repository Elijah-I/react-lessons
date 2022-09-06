import React, { useEffect, useMemo, useState } from "react"
import { useMatch, NavLink } from "react-router-dom"

import { fetchAuth } from "features/auth/authThunk"
import { useDispatch } from "hooks/useDispatch"
import { useSelector } from "hooks/useSelector"

import style from "./index.module.scss"
import { LinkEvent, ILinkData } from "types"
import Link from "./link"

const Header = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.auth.isAuth)

  const privateLinks = useMemo(
    () => [
      { path: "/", title: "Main" },
      { path: "/posts", title: "Posts" },
      { path: "/about", title: "About" },
      {
        path: "/exit",
        title: "Exit",
        click: (event: LinkEvent) => {
          event.preventDefault()
          dispatch(fetchAuth(false))
        }
      }
    ],
    []
  )

  const publickLinks = useMemo(
    () => [
      { path: "/", title: "Main" },
      { path: "/login", title: "Login" }
    ],
    []
  )

  const final_links = (isAuth ? privateLinks : publickLinks).map(
    (link: ILinkData, key) => (
      <Link
        link={link}
        key={key}
      />
    )
  )

  const [links, setLinks] = useState(final_links)

  useEffect(() => {
    setLinks(final_links)
  }, [isAuth])

  return <div className={style.header}>{links}</div>
}

export default Header
