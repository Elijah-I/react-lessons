import React from "react"
import { IWithChildren } from "types"
import {
  BrowserRouter as Router,
  Navigate as Redirect,
  Routes as Switch,
  Route
} from "react-router-dom"

const WithRouter: React.FC<IWithChildren> = ({ children }) => {
  const offSwitch: typeof children[] = []

  const content = React.Children.map(children, (child: any) => {
    if ("route" in child.props)
      return (
        <Route
          path={child.props.route}
          element={child}
        />
      )
    else offSwitch.push(child)
  })

  content.push(
    <Route
      key="404"
      path="*"
      element={<Redirect to="/" />}
    />
  )

  return (
    <Router>
      {offSwitch}
      <Switch>{content}</Switch>
    </Router>
  )
}

export default WithRouter
