import { useMemo } from "react"

export const getPages = (total: number, limit: number): number[] => {
  return useMemo(() => {
    const pageAmount = Math.ceil(total / limit)
    return new Array(pageAmount).fill(0)
  }, [total, limit])
}
