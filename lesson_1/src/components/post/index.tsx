import React from "react"

import { useSelector } from "hooks/useSelector"

import Settings from "./settings"
import Pages from "./pages"
import List from "./list"

const Posts = () => {
  const pagesProps = useSelector((state) => state.posts.pages)

  return (
    <>
      <Settings />
      <Pages {...pagesProps} />
      <List />
    </>
  )
}

export default Posts
