import * as React from "react"
import { Provider } from "react-redux"
import * as ReactDOM from "react-dom/client"

import store from "store"
import "./scss/app.module"

import Main from "pages/main"
import Posts from "./pages/posts"
import About from "./pages/about"
import Modal from "components/UI/modal"
import Header from "components/UI/header"

import WithRouter from "hoc/withRouter"
import WithContent from "hoc/withContent"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <WithContent>
      <Modal />
      <WithRouter>
        <Header />
        <Posts route="/posts" />
        <About route="/about" />
        <Main route="/" />
      </WithRouter>
    </WithContent>
  </Provider>
)

if (process.env.NODE_ENV === "development" && module && module.hot)
  module.hot.accept()
