import React from 'react'
import { Link  } from 'react-router-dom'
const Register = (props) => {
  return (
    <div className='UserRegister'>
      <div className='Heading'>
        <h1>Register</h1>
      </div>
      <form onSubmit={props.handleRegister}>
        <input
        name='username' type='text' placeholder='USERNAME' value={props.formData.username} onChange={props.handleChange}
        />
        <input name='email' type='text' placeholder='EMAIL' value={props.formData.email} onChange={props.handleChange}
        />
        <input
        name='password' type='text' placeholder='PASSWORD' value={props.formData.password} onChange={props.handleChange}
        />
        <Link to='/hero'>
          <button>REGISTER</button>
        </Link>
      </form>
      <p>Already have an account?</p>
      <Link to='/login'>
        <button>LOGIN!!</button>
      </Link>
    </div>
  )
}

export default Register
