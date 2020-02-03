import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Image } from '../../ui/Image'
import { SignOut } from '../Auth/SignOut'
import menu from '../../image/menu.png'
import './Navbar.css'

export const Navbar = props => {
  const { auth } = props

  return (
    <div className='containerNav'>
      <nav className='nav'>
        <Link to='/' className='cookbook item'>Cookbook</Link>
        { auth.uid &&
          <span>
            <span className='webMenu'>
              <SignOut />
            </span>
            <div className='mobileMenu'>
              <div className='dropdownMenu'>
                <Image src={menu} alt='menu' />
                <div className='dropdownMenuContent'>
                  <li className='dropdownList' onClick={props.signOut}>Sign Out</li>
                </div>
              </div>
            </div>
          </span>
        }
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired
}
