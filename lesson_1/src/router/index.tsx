import React, { useMemo } from "react"
import { Routes, Route, useLocation, Navigate } from "react-router-dom"

import Post from "pages/post"
import Main from "pages/main"
import Posts from "pages/posts"
import About from "pages/about"
import Login from "pages/login"

import WithTransition from "hoc/withTransition"

const MyRoutes = () => {
  const isAuth = true
  const location = useLocation()

  const privateRoutes = useMemo(
    () => [
      { path: "/", component: Main },
      { path: "/about", component: About },
      { path: "/posts", component: Posts },
      { path: "/posts/:id", component: Post }
    ],
    []
  )

  const publicRoutes = useMemo(
    () => [
      { path: "/", component: Main },
      { path: "/login", component: Login }
    ],
    []
  )

  const routes = (isAuth ? privateRoutes : publicRoutes).map((route) => (
    <Route
      key={route.path}
      path={route.path}
      element={route.component()}
    />
  ))

  routes.push(
    <Route
      key="404"
      path="*"
      element={<Navigate to="/" />}
    />
  )

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
