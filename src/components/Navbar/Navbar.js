import React from 'react'
import { Link } from 'react-router-dom'
import { SignOut } from '../Auth/SignOut'
import './Navbar.css'

const Navbar = props => {
  const { auth } = props

  return (
    <div className='containerNav'>
      <nav className='nav'>
        <Link to='/' className='cookbook item'>Cookbook</Link>
        {auth.uid && <SignOut />}
      </nav>
    </div>
  )
}

export { Navbar }
