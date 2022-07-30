import { useSelector as useReduxSelector, TypedUseSelectorHook } from "react-redux"
import { RootState } from "tsx/store"

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
