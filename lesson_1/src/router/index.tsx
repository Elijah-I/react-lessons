import React, { useEffect, useMemo, useState } from "react"
import { Routes, Route, useLocation, Navigate } from "react-router-dom"

import Post from "pages/post"
import Main from "pages/main"
import Posts from "pages/posts"
import About from "pages/about"
import Login from "pages/login"

import WithTransition from "hoc/withTransition"
import { useSelector } from "hooks/useSelector"

const MyRoutes = () => {
  const location = useLocation()
  const isAuth = useSelector((state) => state.auth.isAuth)

  const privateRoutes = useMemo(
    () => [
      { path: "/", component: <Main /> },
      { path: "/about", component: <About /> },
      { path: "/posts", component: <Posts /> },
      { path: "/posts/:id", component: <Post /> },
      { path: "*", component: <Navigate to="/" /> }
    ],
    []
  )

  const publicRoutes = useMemo(
    () => [
      { path: "/", component: <Main /> },
      { path: "/login", component: <Login /> },
      { path: "*", component: <Navigate to="/" /> }
    ],
    []
  )

  const final_routes = (isAuth ? privateRoutes : publicRoutes).map((route) => (
    <Route
      key={route.path}
      path={route.path}
      element={route.component}
    />
  ))

  const [routes, setRoutes] = useState(final_routes)

  useEffect(() => {
    setRoutes(final_routes)
  }, [isAuth])

  return (
    <WithTransition
      classNM=""
      classID="fade"
    >
      <Routes
        location={location}
        key={location.pathname}
      >
        {routes}
      </Routes>
    </WithTransition>
  )
}

export default MyRoutes
