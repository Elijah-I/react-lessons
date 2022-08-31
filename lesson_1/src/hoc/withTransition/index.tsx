import React from "react"

import { CSSTransition, TransitionGroup } from "react-transition-group"

import { ITransitionProps } from "types"
import style from "./index.module.scss"

const WithTransition: React.FC<ITransitionProps> = ({
  children,
  classNM,
  classID
}) => {
  const content = React.Children.map(children, (child) => (
    <CSSTransition
      timeout={500}
      classNames={{
        enter: style[`${classID}_enter`],
        enterActive: style[`${classID}_active`],
        exitActive: style[`${classID}_exit`]
      }}
      key={child.key}
    >
      {React.cloneElement(child, {})}
    </CSSTransition>
  ))

  return <TransitionGroup className={classNM}>{content}</TransitionGroup>
}

export default WithTransition
