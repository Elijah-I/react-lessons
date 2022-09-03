import { IPostAction } from "types"
import axios, { AxiosError } from "axios"

export default class PostService {
  public static async getAll(_limit: number, _page: number) {
    try {
      const response: IPostAction = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _limit,
            _page
          }
        }
      )
      return { data: response.data, headers: response.headers }
    } catch (e) {
      console.error((e as AxiosError).message)
    }
  }
}
