import { connect } from 'react-redux'
import { SignUp } from './SignUp'
import { signUp } from '../../../store/actions/authAction'

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  authErrorSignUp: state.auth.authErrorSignUp
})

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUp(user))
})

export const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp)
