import React from "react"
import {
  BrowserRouter as Router,
  Navigate as Redirect,
  Routes as Switch,
  Route,
  useLocation
} from "react-router-dom"

import { IWithChildren } from "types"
import WithTransition from "hoc/withTransition"

const AnimatedRoutes: React.FC<IWithChildren> = ({ children }) => {
  const offSwitch: typeof children[] = []
  const location = useLocation()

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
    <>
      {offSwitch}
      <WithTransition
        classNM=""
        classID="fade"
      >
        <Switch
          location={location}
          key={location.pathname}
        >
          {content}
        </Switch>
      </WithTransition>
    </>
  )
}

const WithRouter: React.FC<IWithChildren> = ({ children }) => {
  return (
    <Router>
      <AnimatedRoutes>{children}</AnimatedRoutes>
    </Router>
  )
}

export default WithRouter
