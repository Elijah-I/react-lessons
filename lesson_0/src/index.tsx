import * as React from "react"
import * as ReactDOM from "react-dom/client"

import store from "tsx/store"
import { Provider } from "react-redux"

import { User } from "tsx/components/user"
import { Todo } from "tsx/components/todo"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <User></User>
      <Todo></Todo>
    </Provider>
  </React.StrictMode>
)

if (process.env.NODE_ENV === "development" && module && module.hot) module.hot.accept()
