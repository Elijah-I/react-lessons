import React from "react"
import css from "scss/app.module.scss"
import { ILoadingProps } from "types"

export const WithLoading: React.FC<ILoadingProps> = ({
  isFetching,
  noContent,
  error,
  children
}) => {
  if (error) return <div className={css.post__error}>{error}</div>
  if (isFetching) return <div className={css.post__null}>LOADING</div>
  if (noContent) return <div className={css.post__null}>nothing here</div>
  return <>{children}</>
}
