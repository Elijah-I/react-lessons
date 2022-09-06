export default class AuthService {
  public static async login() {
    return new Promise((resolve) =>
      setTimeout(() => resolve(true), Math.random() * 500)
    )
  }
  public static async logout() {
    return new Promise((resolve) =>
      setTimeout(() => resolve(false), Math.random() * 500)
    )
  }
}
