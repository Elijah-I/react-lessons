import { IPostAction } from "types"
import axios, { AxiosError } from "axios"

export default class PostService {
  public static async getAll(limit: number, page: number) {
    try {
      const response: IPostAction = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
      )
      return { data: response.data, headers: response.headers }
    } catch (e) {
      console.error((e as AxiosError).message)
    }
  }
}
