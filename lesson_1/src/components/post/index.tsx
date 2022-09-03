import React from "react"

import { fetchPosts } from "features/post/postThunk"
import { useSelector } from "hooks/useSelector"
import { PagesCallback } from "types"

import Settings from "./settings"
import Pages from "../UI/pages"
import List from "./list"

const Posts = () => {
  const props = {
    ...useSelector((state) => state.posts.pages),
    callback: (arg: PagesCallback) => fetchPosts(arg)
  }

  return (
    <>
      <Settings />
      <Pages {...props} />
      <List />
    </>
  )
}

export default Posts
