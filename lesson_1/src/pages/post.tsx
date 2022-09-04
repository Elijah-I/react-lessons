import React from "react"
import { IWithRoute } from "types"
import PostContent from "components/post"
import PostComments from "components/post/comments"
import WithLoading from "hoc/withLoading"
import { useSelector } from "hooks/useSelector"
import { useParams } from "react-router-dom"

const Post: React.FC<IWithRoute> = () => {
  const { id = "1" } = useParams()
  const { current, fetching } = useSelector((state) => state.posts)

  return (
    <WithLoading loading={fetching}>
      <PostContent
        id={id}
        current={current}
      />
      <PostComments
        id={id}
        current={current}
      />
    </WithLoading>
  )
}

export default Post
