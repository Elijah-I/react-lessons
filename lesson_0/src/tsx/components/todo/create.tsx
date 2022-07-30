import React from "react"
import css from "scss/app.module.scss"
import { Input } from "../parts/input"

import { InputEvent } from "types"
import { useDispatch } from "react-redux"
import { useSelector } from "tsx/hooks/useSelector"
import { storeTodo, addTodo } from "tsx/features/todo"

export const Create = () => {
  const currentTodo = useSelector((state) => state.todo.current)

  const dispatch = useDispatch()
  const actionSoreTodo = (e: InputEvent) => dispatch(storeTodo(e.target.value))
  const actionAddTodo = () => dispatch(addTodo(currentTodo))

  return (
    <div className={css.todo__create}>
      <Input type="text" placeholder="todo" action={actionSoreTodo}></Input>
      <div className={css.todo__button} onClick={actionAddTodo}>
        add
      </div>
    </div>
  )
}
