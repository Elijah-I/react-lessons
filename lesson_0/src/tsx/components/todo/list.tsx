import React, { useEffect } from "react"
import css from "scss/app.module.scss"

import { useDispatch } from "react-redux"
import { useSelector } from "tsx/hooks/useSelector"
import { initTodo, doneTodo, deleteTodo } from "tsx/features/todo"

export const List = () => {
  const todoList = useSelector((state) => state.todo.list)

  const dispatch = useDispatch()
  const actionDoneTodo = (id: number) => dispatch(doneTodo(id))
  const actionDeleteTodo = (id: number) => dispatch(deleteTodo(id))

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("todo.list") || "[]")
    console.log(list)

    dispatch(initTodo(list))
  }, [])

  const todoListHTML = todoList.map((todo) => {
    const classes = {
      main: todo.done
        ? `${css.todo__item} ${css.todo__item_done}`
        : css.todo__item,

      done: `${css.todo__button} ${css.todo__done}`,
      remove: `${css.todo__button} ${css.todo__remove}`
    }

    // prettier-ignore
    return (
      <div className={classes.main} key={todo.id}>
        <div className={classes.done} onClick={() => actionDoneTodo(todo.id)}>done</div>
        <div className={css.todo__value}>{todo.value}</div>
        <div className={classes.remove} onClick={() => actionDeleteTodo(todo.id)}>del</div>
      </div>
    )
  })

  return <div className={css.todo__list}>{todoListHTML}</div>
}
