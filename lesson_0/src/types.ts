import { PayloadAction, AsyncThunkAction } from "@reduxjs/toolkit"

export interface IUserState {
  firstName: string
  lastName?: string
}

export interface ITodoState {
  list: {
    id: number
    value: string
    done: boolean
  }[]
}

export interface IInputProps {
  type: string
  value?: string
  placeholder: string
  action: (e: InputEvent) => {} | void
}

export interface ILoadingProps {
  noContent: boolean
  isFetching: boolean
  error: string | null
  children: JSX.Element
}

export type Post = {
  id: number
  userId: number
  title: string
  body: string
}

export interface IPostState {
  fetching: boolean
  error: string | null
  list: Post[]
}

export type Thunk = any & {
  fulfilled: any
  pending: any
  rejected: any
}

export type ActionStr = PayloadAction<string>
export type ActionNum = PayloadAction<number>
export type ActionPost = PayloadAction<Post[]>
export type ActionBool = PayloadAction<boolean>

export type InputEvent = React.ChangeEvent<HTMLInputElement>
