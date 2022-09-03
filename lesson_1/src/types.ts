export type Dispatch = (value: string) => void
export type DispatchBool = (value: boolean) => void

export type InputEvent = React.ChangeEvent<HTMLInputElement>
export type SelectEvent = React.ChangeEvent<HTMLSelectElement>

export interface IButtonProps {
  size: "small" | "medium" | "large"
  children: string
  action: () => void
}

export interface IInputProps {
  type: string
  value?: string
  placeholder: string
  callback: (e: InputEvent) => {} | void
}

export interface ISelectProps {
  children: JSX.Element | JSX.Element[]
  callback: (value: keyof Post) => void
}

export interface ITransitionProps {
  children: JSX.Element | JSX.Element[]
  classNM: string
  classID: string
}

export interface ILoadingProps {
  children: JSX.Element | JSX.Element[]
  loading: boolean
}

export type Post = {
  id: number
  show: boolean
  title: string
  body: string
}

export interface IPostState {
  list: Post[]
  pages: {
    limit: number
    total: number
    current: number
  }
  fetching: boolean
}

export interface IPostAction {
  data: Post[]
  headers: { "x-total-count": number }
}

export interface IThunkData {
  limit: number
  current: number
}

export enum Popup {
  Auth,
  AddPost
}

export interface IModalState {
  active: boolean
  type: Popup | null
}
