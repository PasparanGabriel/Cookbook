import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { ContainerCentral } from '../../ContainerCentral'
import { Button } from '../../../ui/Button'
import { Input } from '../../../ui/Input'
import './SignIn.css'

export class SignIn extends PureComponent {
  state = {
    user: {
      email: '',
      password: ''
    },
    inputValidation: true
  }

  handleChange = event => {
    const { name, value } = event.target
    const { user } = this.state

    this.setState({
      user: {
        ...user,
        [name]: value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { user } = this.state

    if (user.email && user.password) {
      this.props.signIn(user)
    } else {
      this.setState({ inputValidation: false })
    }
  }

  redirectSignUp = () => {
    this.props.history.push('/sign-up')
  }

  render() {
    const { auth, authErrorSignIn } = this.props
    const { user, inputValidation } = this.state

    if (auth.uid) {
      return <Redirect to='/' />
    }

    return (
      <ContainerCentral>
        <h1 className='textSignIn'>Sign In</h1>
        { authErrorSignIn && <h1 className='failedSignIn'>{authErrorSignIn}</h1> }

        <form>        
          <Input
            type='text'
            name='email'
            value={user.email}
            placeholder='Email'
            onChange={this.handleChange}
          >
            {!inputValidation && !user.email}
          </Input>

          <Input
            type='password'
            name='password'
            value={user.password}
            placeholder='Password'
            onChange={this.handleChange}
          >
            {!inputValidation && !user.password}
          </Input>

          <Button type='info' size='xLarge' onClick={this.handleSubmit}>Sign in</Button>
        </form>

        <div className='orContainerSignIn'>
          <span className='orSignIn'>OR</span>
        </div>

        <Button type='success' size='xLarge' onClick={this.redirectSignUp}>Sign up</Button>
      </ContainerCentral>
    )
  }
}

SignIn.propTypes = {
  auth: PropTypes.object.isRequired,
  authErrorSignIn: PropTypes.string.isRequired
}
