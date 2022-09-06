import axios, { AxiosError } from "axios"
import { IPostAction } from "types"

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

  public static async getById(_id: string | undefined) {
    try {
      const response: IPostAction = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${_id}`
      )
      return response.data
    } catch (e) {
      console.error((e as AxiosError).message)
    }
  }

  public static async getComments(_id: string) {
    try {
      const response: IPostAction = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${_id}/comments`
      )
      return response.data
    } catch (e) {
      console.error((e as AxiosError).message)
    }
  }
}
