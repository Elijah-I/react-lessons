import React from "react"
import css from "scss/app.module.scss"
import { ILoadingProps } from "types"

export const WithLoading: React.FC<ILoadingProps> = ({
  isFetching,
  noContent,
  error,
  children
}) => {
  if (isFetching) return <div className={css.post__null}>LOADING</div>
  if (noContent) return <div className={css.post__null}>nothing here</div>
  if (error) return <div className={css.post__error}>error</div>
  return <>{children}</>
}
