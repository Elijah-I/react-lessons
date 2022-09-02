import { Post } from "types"
import axios, { AxiosError } from "axios"

export default class PostService {
  public static async getAll() {
    try {
      const posts: { data: Post[] } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      )
      return posts.data as Post[]
    } catch (e) {
      console.error((e as AxiosError).message)
    }
  }
}
