export type Dispatch = (value: string) => void
export type DispatchBool = (value: boolean) => void

export type LinkEvent = React.MouseEvent<HTMLElement>
export type InputEvent = React.ChangeEvent<HTMLInputElement>
export type SelectEvent = React.ChangeEvent<HTMLSelectElement>

export interface IWithChildren {
  children: JSX.Element | JSX.Element[]
}

export type PagesCallback = {
  limit: number
  current: number
}
export interface IPagesProps {
  total: number
  limit: number
  current: number
  callback: (arg: PagesCallback) => any
}

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

export interface ILinkProps {
  link: ILinkData
}

export interface ILinkData {
  path: string
  title: string
  click?: (e: LinkEvent) => void
}

export interface ISelectProps extends IWithChildren {
  callback: (value: keyof Post) => void
}

export interface ITransitionProps extends IWithChildren {
  classNM: string
  classID: string
}

export interface ILoadingProps extends IWithChildren {
  loading: boolean
}

export type PostComment = {
  email: string
  body: string
  id: number
}

export type Post = {
  id: number
  show: boolean
  title: string
  body: string
  comments?: PostComment[]
}

export interface IAuthState {
  isAuth: boolean
  fetching: boolean
}

export interface IPostState {
  list: Post[]
  current: Post
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

export interface IPostProps {
  current: Post
  id: string
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
