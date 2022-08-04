import React from "react"
import Select from "components/UI/select"
import { sortPosts } from "features/post/postSlice"
import { useDispatch } from "react-redux"

const Sort = () => {
  const dispatch = useDispatch()

  return (
    <Select callback={(by: any) => dispatch(sortPosts(by))}>
      <option value="title">By title</option>
      <option value="content">By content</option>
    </Select>
  )
}

export default Sort
