import { connect } from 'react-redux'
import { Cookbook } from './Cookbook'

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const CookbookContainer = connect(mapStateToProps)(Cookbook)

export { CookbookContainer }
