import React from "react"

import style from "../index.module.scss"
import Input from "components/UI/input"

import { findPosts } from "features/post/postSlice"
import useInput from "hooks/useInput"

const Search = () => {
  const [value, setValue, setAction] = useInput()
  setAction(() => findPosts(value))

  return (
    <div className={style.posts__search}>
      <Input
        type="text"
        value={value}
        placeholder="Find..."
        callback={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default Search
