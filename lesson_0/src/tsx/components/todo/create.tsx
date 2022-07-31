import React, { useState } from "react"
import css from "scss/app.module.scss"
import { Input } from "../parts/input"

import { InputEvent } from "types"
import { useDispatch } from "react-redux"
import { addTodo } from "tsx/features/todo"

export const Create = () => {
  const dispatch = useDispatch()
  const [todoValue, setTodoValue] = useState("")

  const actionAddTodo = () => dispatch(addTodo(todoValue))

  return (
    <div className={css.todo__create}>
      <Input
        type="text"
        placeholder="todo"
        action={(e: InputEvent) => setTodoValue(e.target.value)}
      ></Input>
      <div
        className={css.todo__button}
        onClick={actionAddTodo}
      >
        add
      </div>
    </div>
  )
}
