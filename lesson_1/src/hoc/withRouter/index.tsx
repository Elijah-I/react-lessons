import React from "react"
import { IWithChildren } from "types"
import {
  BrowserRouter as Router,
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

  return (
    <Router>
      {offSwitch}
      <Switch>{content}</Switch>
    </Router>
  )
}

export default WithRouter
