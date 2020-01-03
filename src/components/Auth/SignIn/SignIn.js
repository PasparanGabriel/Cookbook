import React, { PureComponent } from 'react'
import { ContainerCentral } from '../../../utils/ContainerCentral'
import { Button } from '../../../ui/Button'
import { Input } from '../../../ui/Input'
import './SignIn.css'

class SignIn extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        email: '',
        password: ''
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
        
    if (user.email && user.password ) {
      console.log(user)
    } else {
      this.setState({ inputValidation: false })
    }
  }

  render() {
    const { user, inputValidation } = this.state

    return (
      <ContainerCentral>
        <h1 className='textSignIn'>Sign In</h1>

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
      </ContainerCentral>
    )
  }
}

export { SignIn }
