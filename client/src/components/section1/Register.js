import React, {useEffect, useState } from 'react'
import { loginUser } from '../../services/api-helper.js'

const Register = () => {
  const [currentUser, setCurrentUser] = useState([]);

  return (
    <div className='UserLogin'>
      <div className='Heading'>
        <h1>Register</h1>
      </div>
      <form>
        <input
        placeholder='username'
        type='text'
        />
        <input
        placeholder='email'
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

export default Register;
