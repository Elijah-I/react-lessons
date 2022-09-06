import React, { useCallback } from "react"

import { fetchAuth } from "features/auth/authThunk"

import { useDispatch } from "hooks/useDispatch"
import useInput from "hooks/useInput"

import style from "./index.module.scss"

import Input from "components/UI/input"
import Button from "components/UI/button"

export const LoginForm = () => {
  const dispatch = useDispatch()

  const login = useCallback(() => {
    dispatch(fetchAuth(true))
  }, [])

  const [loginValue, setLoginValue] = useInput()
  const [passValue, setPassValue] = useInput()

  return (
    <div className={style.login}>
      <Input
        type="text"
        value={loginValue}
        placeholder="any login"
        callback={(e) => setLoginValue(e.target.value)}
      />
      <Input
        type="password"
        value={passValue}
        placeholder="any password"
        callback={(e) => setPassValue(e.target.value)}
      />
      <Button
        size="medium"
        action={login}
      >
        login
      </Button>
    </div>
  )
}
