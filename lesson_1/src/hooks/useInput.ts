import { AnyAction } from "@reduxjs/toolkit"
import { useEffect, useRef, useState, Dispatch } from "react"
import { useDispatch } from "hooks/useDispatch"

type Action = (value: string) => AnyAction
type SetAction = (action: Action) => void

const useInput = (): [string, Dispatch<string>, SetAction] => {
  let action: Action
  const dispatch = useDispatch()
  const isFirstRender = useRef(true)
  const [value, setValue] = useState("")

  const setAction = (newAction: Action) => {
    action = newAction
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (action) dispatch(action(value))
  }, [value])

  return [value, setValue, setAction]
}

export default useInput
