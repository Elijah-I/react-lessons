import React from "react"
import css from "scss/app.module.scss"
import { Input } from "tsx/components/parts/input"

import { InputEvent } from "types"
import { useDispatch } from "react-redux"
import { useSelector } from "tsx/hooks/useSelector"
import { setFirstName, setLastName } from "tsx/features/user"

export const User = () => {
  const [name, surname] = useSelector((state) => [state.user.firstName, state.user.lastName])

  const dispatch = useDispatch()
  const actionFirstName = (e: InputEvent) => dispatch(setFirstName(e.target.value))
  const actionLastName = (e: InputEvent) => dispatch(setLastName(e.target.value))

  return (
    <div className={css.user}>
      <Input type="text" placeholder="First name" action={actionFirstName}></Input>
      <Input type="text" placeholder="Last name" action={actionLastName}></Input>
      <div className={css.user__data}>
        <div>{name}</div>
        <div>{surname}</div>
      </div>
    </div>
  )
}
