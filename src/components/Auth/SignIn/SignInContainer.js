import { connect } from 'react-redux'
import { SignIn } from './SignIn'
import { signIn } from '../../../store/actions/authActions'

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (user) => dispatch(signIn(user))
  }
}

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn)

export { SignInContainer }
