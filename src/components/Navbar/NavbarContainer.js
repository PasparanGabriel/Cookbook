import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'
import { Navbar } from './Navbar'


const mapStateToProps = state => ({
  auth: state.firebase.auth
})

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
})

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)
