import React from "react"
import css from "scss/app.module.scss"
import { List } from "./list"
import { Create } from "./create"

export const Todo = () => {
  return (
    <div className={css.todo}>
      <Create></Create>
      <List></List>
    </div>
  )
}
