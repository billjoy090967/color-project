import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import { map } from 'ramda'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Page2 from './pages/page2'
import Show from './pages/show'

import { connect } from 'react-redux'

const createNavLink = ({ url, description }) => {
  return (
    <NavLink
      exact
      activeClassName="bg-purple white"
      className="ph2 pv1 link br2 mh2 black"
      to={url}
    >
      {description}
    </NavLink>
  )
}

const menuItems = [
  {
    url: '/',
    description: 'Home'
  },
  {
    url: '/about',
    description: 'About'
  },
  {
    url: '/page2',
    description: 'Page2'
  }
]

const Menu = () => (
  <nav className="pa3 pa4-ns">
    <div className="flex justify-center">{map(createNavLink, menuItems)}</div>
  </nav>
)

const App = props => {
  return (
    <BrowserRouter>
      <div className=" avenir flex flex-column pa4">
        <header className="tracked tc mb2 bg-blue white">
          <h1>{props.title}</h1>
        </header>
        <Menu />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/page2" component={Page2} />
          <Route path="/:color" component={Show} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
const connector = connect(state => ({ title: state.title }))
export default connector(App)
