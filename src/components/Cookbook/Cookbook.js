import React from 'react'
import { Link, Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Button } from '../../ui/Button'
import { Home } from '../Home'
import { SignIn } from '../SignIn'
import { SignUp } from '../SignUp'
import './Cookbook.css'

const Cookbook = () => {
  return (
    <Router history={createBrowserHistory()}>
      <div className='containerNav'>
        <nav className='nav'>
          <Link to='/' className='cookbook item'>Cookbook</Link>
          <Button type='info' position='right' onClick={() => alert('Sign out')}>Sign Out</Button>
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
