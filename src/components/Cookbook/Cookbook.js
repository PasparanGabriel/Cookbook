import React from 'react'
import { Link, Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Home } from '../Home'
import { SignIn } from '../SignIn'
import { SignUp } from '../SignUp'
import './Cookbook.css'

const Cookbook = () => {
  return (
    <Router history={createBrowserHistory()}>
      <div className='container'>
        <nav className='nav'>
          <Link to='/' className='cookbook item'>Cookbook</Link>
          <Link to='/sign-up' className='position signup'>Sign Up</Link>
          <Link to='/sign-in' className='item position signin'>Sign In</Link>
        </nav>
      </div>

      <Switch>
        <Route exact path='/'  component={ Home } />
        <Route exact path='/sign-in' component={ SignIn } />
        <Route exact path='/sign-up' component={ SignUp } />
      </Switch>
    </Router>
  )
}

export { Cookbook }
