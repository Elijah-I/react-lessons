export const getPages = (total: number, limit: number): number[] => {
  const pageAmount = Math.ceil(total / limit)
  console.log(total, limit, pageAmount)

  return new Array(pageAmount).fill(0)
}
