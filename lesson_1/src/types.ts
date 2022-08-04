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

export interface IModalProps {
  content: JSX.Element | JSX.Element[]
}

export type Post = {
  id: number
  show: boolean
  title: string
  content: string
}

export interface IPostState {
  list: Post[]
}

export interface IModalState {
  active: boolean
}
