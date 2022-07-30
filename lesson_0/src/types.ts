import { PayloadAction } from "@reduxjs/toolkit"

export interface IUserState {
  firstName: string
  lastName?: string
}

export interface ITodoState {
  current: string
  list: { id: number; value: string; done: boolean }[]
}

export interface IInputProps {
  type: string
  placeholder: string
  action: (e: InputEvent) => {}
}

export type ActionStr = PayloadAction<string>
export type ActionNum = PayloadAction<number>

export type InputEvent = React.ChangeEvent<HTMLInputElement>
