import { connect } from 'react-redux'
import { Navbar } from './Navbar'

const mapStateToProps = state => ({
  auth: state.firebase.auth
})

const NavbarContainer = connect(mapStateToProps)(Navbar)

export { NavbarContainer }
