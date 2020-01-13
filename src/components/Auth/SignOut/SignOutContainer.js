import { connect } from 'react-redux'
import { SignOut } from './SignOut'
import { signOut } from '../../../store/actions/authAction'

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
})

const SignOutContainer = connect(null, mapDispatchToProps)(SignOut)

export { SignOutContainer }
