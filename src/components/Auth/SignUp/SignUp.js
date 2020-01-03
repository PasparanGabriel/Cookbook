import React, { PureComponent } from 'react'
import { ContainerCentral } from '../../../utils/ContainerCentral'
import { Button } from '../../../ui/Button'
import { Input } from '../../../ui/Input'
import './SignUp.css'

class SignUp extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      inputValidation: true
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    const { user } = this.state

    this.setState({
      user: {
        ...user,
        [name]: value
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    
    const { user } = this.state
        
    if (user.firstName && user.lastName && user.email && user.password && user.confirmPassword) {
      console.log(user)
    } else {
      this.setState({ inputValidation: false })
    }
  }

  render() {
    const { user, inputValidation } = this.state

    return (
      <ContainerCentral>
        <h1 className='textSignUp'>Sign Up</h1>

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

          <Input
            type='password'
            name='confirmPassword'
            value={user.confirmPassword}
            placeholder='Confirm password'
            onChange={this.handleChange}
          >
            {!inputValidation && !user.confirmPassword}
          </Input>
          
          <Button type='info' size='xLarge' onClick={this.handleSubmit}>Sign Up</Button>
        </form>
      </ContainerCentral>
    )
  }
}

export { SignUp }
