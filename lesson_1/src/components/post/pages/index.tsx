import React, { useEffect } from "react"
import { useSelector } from "hooks/useSelector"

import style from "../index.module.scss"

import { getPages } from "utils/pages"
import Select from "components/UI/select"

import { useDispatch } from "hooks/useDispatch"
import { fetchPosts } from "features/post/postThunk"
import { switchPage, setLimit } from "features/post/postSlice"

const Pages = () => {
  const dispatch = useDispatch()
  const { total, limit, current } = useSelector((state) => state.posts.pages)

  useEffect(() => {
    dispatch(fetchPosts({ limit, current }))
  }, [limit, current])

  const pages = getPages(total, limit).map((_, i) => {
    const order = i + 1
    const classNM = [style.pages__item]
    if (order == current) classNM.push(style.pages__item_selected)

    return (
      <div
        key={order}
        className={classNM.join(" ")}
        onClick={() => dispatch(switchPage(i + 1))}
      >
        {order.toString().padStart(2, "0")}
      </div>
    )
  })

  return (
    <div className={style.pages}>
      {pages}
      <Select callback={(limit: any) => dispatch(setLimit(limit))}>
        <option value="10">by 10</option>
        <option value="20">by 20</option>
        <option value="30">by 30</option>
      </Select>
    </div>
  )
}

export default Pages
