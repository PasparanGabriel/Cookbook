import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { Navbar } from './Navbar'


const mapStateToProps = state => ({
  auth: state.firebase.auth
})

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
})

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export { NavbarContainer }
