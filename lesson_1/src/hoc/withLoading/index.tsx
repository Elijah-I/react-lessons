import React from "react"
import { ILoadingProps } from "types"
import { Loading } from "components/UI/loading"

const WithLoading: React.FC<ILoadingProps> = ({ children, loading }) => {
  if (loading) return <Loading />
  return <>{children}</>
}

export default WithLoading
