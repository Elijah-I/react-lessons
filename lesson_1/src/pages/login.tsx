import React from "react"
import WithLoading from "hoc/withLoading"

import { useSelector } from "hooks/useSelector"
import { LoginForm } from "components/login"

const Login = () => {
  const { fetching } = useSelector((state) => state.auth)

  return (
    <WithLoading loading={fetching}>
      <LoginForm />
    </WithLoading>
  )
}

export default Login
