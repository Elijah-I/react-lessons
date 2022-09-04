import * as React from "react"
import { Provider } from "react-redux"
import * as ReactDOM from "react-dom/client"

import store from "store"
import "./scss/app.module"

import Modal from "components/UI/modal"
import Header from "components/UI/header"

import WithContent from "hoc/withContent"

import { BrowserRouter } from "react-router-dom"
import Router from "router"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <WithContent>
      <Modal />
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </WithContent>
  </Provider>
)

if (process.env.NODE_ENV === "development" && module && module.hot)
  module.hot.accept()
