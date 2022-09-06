import React, { useEffect } from "react"

import WithLoading from "hoc/withLoading"
import WithTransition from "hoc/withTransition"
import { useDispatch } from "hooks/useDispatch"
import { useSelector } from "hooks/useSelector"
import { useRef } from "hooks/useRef"

import style from "../index.module.scss"
import { Loading } from "components/UI/loading"

import { fetchPosts } from "features/post/postThunk"
import Post from "./post"
import { switchPage } from "features/post/postSlice"

const List = () => {
  const dispatch = useDispatch()

  const {
    list,
    fetching,
    pages: { limit, current }
  } = useSelector((state) => state.posts)

  const firstLoad = !list.length && fetching
  const nextLoad = !firstLoad && fetching

  const observer = useRef()
  const bottomRef = useRef()
  const skipFirstLoad = useRef()

  // prettier-ignore
  const posts = list.length
    ? list.map((data) => (<Post data={data} key={data.id} />))
    : <div className={style.posts__null}>no posts yet</div>

  useEffect(() => {
    dispatch(fetchPosts({ limit, current }))
  }, [current])

  useEffect(() => {
    if (fetching) return
    if (observer.current) observer.current.disconnect(bottomRef.current)

    observer.current = new IntersectionObserver(([item]) => {
      if (item.isIntersecting && current < limit) {
        skipFirstLoad.current = !skipFirstLoad.current
        if (!skipFirstLoad.current) dispatch(switchPage(current + 1))
      }
    })

    observer.current.observe(bottomRef.current)
  }, [fetching])

  return (
    <>
      <WithLoading loading={firstLoad}>
        <WithTransition
          classNM={style.posts}
          classID="post"
        >
          {posts}
        </WithTransition>
      </WithLoading>
      <>{nextLoad && <Loading relative={true} />}</>
      <div
        className={style.bottomRef}
        ref={bottomRef}
      ></div>
    </>
  )
}

export default List
