import React, { useEffect } from "react"
import { useSelector } from "hooks/useSelector"

import style from "../index.module.scss"
import { useDispatch } from "hooks/useDispatch"
import { fetchPosts } from "features/post/postThunk"
import { switchPage } from "features/post/postSlice"

const Pages = () => {
  const dispatch = useDispatch()
  const { total, limit, current } = useSelector((state) => state.posts.pages)

  useEffect(() => {
    dispatch(fetchPosts({ limit, current }))
  }, [limit, current])

  const pageAmount = Math.ceil(total / limit)

  const pages = new Array(pageAmount).fill(0).map((_, i) => {
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

  return <div className={style.pages}>{pages}</div>
}

export default Pages
