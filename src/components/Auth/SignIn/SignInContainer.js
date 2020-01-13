import { connect } from 'react-redux'
import { SignIn } from './SignIn'
import { signIn } from '../../../store/actions/authAction'

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  authErrorSignIn: state.auth.authErrorSignIn
})

const mapDispatchToProps = dispatch => ({
  signIn: user => dispatch(signIn(user))
})

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn)

export { SignInContainer }
