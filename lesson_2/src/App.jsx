import React from "react"

import "./scss/app.scss"

import Sort from "./components/Sort"
import Header from "./components/Header"
import Categories from "./components/Categories"
import PizzaBlock from "./components/PizzaBlock"

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title="Пепперони Фреш с перцем" price={803} />
            <PizzaBlock title="Сырная" price={245} />
            <PizzaBlock title="Цыпленок барбекю" price={295} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
