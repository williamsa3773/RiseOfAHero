import React, {useEffect, useState } from 'react'
import { loginUser } from '../../services/api-helper.js'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        username: '',
        password: ''
      }
    }
  }
  render() {
    return (
      <div className='UserLogin'>
        <div className='Heading'>
          <h1>Login</h1>
        </div>
        <form>
          <input
          placeholder='username'
          type='text'
          />
          <input
          placeholder='password'
          type='text'
          />
          <input
          type='submit'
          value='Login'
          />
        </form>
      </div>
    )
  }
}

export default Login;
