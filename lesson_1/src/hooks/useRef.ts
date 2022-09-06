import React from "react"
import { useRef as Ref } from "react"

export const useRef: () => React.MutableRefObject<any> = Ref
