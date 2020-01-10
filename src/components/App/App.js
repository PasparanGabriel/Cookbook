import React from 'react'
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import { Cookbook } from '../Cookbook'
import { SignIn } from '../Auth/SignIn'
import { SignUp } from '../Auth/SignUp'
import { Navbar } from '../Navbar'

const App = () => (
  <Router>
    <Navbar />

    <Switch>
      <Route exact path='/' component={ Cookbook } />
      <Route exact path='/sign-in' component={ SignIn } />
      <Route exact path='/sign-up' component={ SignUp } />
    </Switch>
  </Router>
)

export { App }
