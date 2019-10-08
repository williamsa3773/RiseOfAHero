import React from 'react'
import { Link } from 'react-router-dom'
const Login = (props) => {
  return (
    <div className='UserLogin'>
      <div className='Heading'>
        <h1>Login</h1>
      </div>
      <form
      onSubmit={(e) => {
        e.preventDefault()
        props.handleLogin()}}
        >
        <input name='username' type='text' placeholder='USERNAME' value={props.formData.username} onChange={props.handleChange} />
        <input name='password' type='text' placeholder='PASSWORD' value={props.formData.password} onChange={props.handleChange} />
        <button>LOGIN</button>
      </form>
      <p>Need an Account?</p>
      <Link to='/register'>
        <button>Create Account</button>
      </Link>
    </div>
  )
}

export default Login
