import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { ContainerCentral } from '../../../utils/ContainerCentral'
import { Button } from '../../../ui/Button'
import { Input } from '../../../ui/Input'
import './SignUp.css'

class SignUp extends PureComponent {
  state = {
    user: {
      firstName: '',
      lastName: '',
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
        
    if (user.firstName && user.lastName && user.email && user.password) {
      this.props.signUp(user)
    } else {
      this.setState({ inputValidation: false })
    }
  }

  redirectSignIn = () => {
    this.props.history.push('/sign-in')
  }

  render() {
    const { user, inputValidation } = this.state
    const { auth, authErrorSignUp } = this.props

    if (auth.uid)
      return <Redirect to='/' /> 

    return (
      <ContainerCentral>
        <h1 className='textSignUp'>Sign Up</h1>
        { authErrorSignUp && <h1 className='signUpFailed'>{authErrorSignUp}</h1> }

        <form>
          <Input
            type='text'
            name='firstName'
            value={user.firstName}
            placeholder='First name'
            onChange={this.handleChange}
          >
            {!inputValidation && !user.firstName}
          </Input>

          <Input
            type='text'
            name='lastName'
            value={user.lastName}
            placeholder='Last name'
            onChange={this.handleChange}
          >
            {!inputValidation && !user.lastName}
          </Input>
          
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

          <Button type='success' size='xLarge' onClick={this.handleSubmit}>Sign Up</Button>
        </form>

        <div className='orContainerSignUp'>
          <span className='orSignUp'>OR</span>
        </div>

        <Button type='info' size='xLarge' onClick={this.redirectSignIn}>Sign in</Button>
      </ContainerCentral>
    )
  }
}

export { SignUp }
