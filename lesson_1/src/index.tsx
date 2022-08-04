import * as React from "react"
import { Provider } from "react-redux"
import * as ReactDOM from "react-dom/client"

import store from "store"
import "./scss/app.module"
import Posts from "./components/post"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <Posts />
  </Provider>
)

if (process.env.NODE_ENV === "development" && module && module.hot)
  module.hot.accept()
