import { connect } from 'react-redux'
import { SignUp } from './SignUp'
import { signUp } from '../../../store/actions/authActions'

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (user) => dispatch(signUp(user))
  }
}

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp)

export { SignUpContainer }
