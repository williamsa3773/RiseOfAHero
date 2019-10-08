import React, { useState, useEffect } from 'react'
import { withRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import { loginUser, registerUser, verifyUser} from './services/api-helper'
import Login from './components/section1/Login'
import Register from './components/section1/Register'
import HeroPage from './components/section2/HeroPage'
import './App.css';
// const App = () => {
//   const [login, setLogin] = useState({})
//   const [register, setRegister] = useState({})


const App = (props) => {

  const [currentUser, setCurrentUser] = useState(null);
  const [authFormData, setAuthFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(()=> {
    const user = verifyUser();
    if (user) {
      setCurrentUser(user)
    }
  }, [])

  const handleLoginButton = () => {
    props.history.push("/login")
  }

  const handleLogin = async () => {
    const userData = await loginUser(authFormData)
    setCurrentUser(userData)
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    await registerUser(authFormData)
    handleLogin()
  }

  const handleLogout = () => {
    localStorage.clear()
    setCurrentUser(null);
  }

  const authHandleChange = (e) => {
    const { name, value } = e.target
    setAuthFormData({
      ...authFormData,
      [name]: value
    })
  }

  return (
    <div className="App">
      <Switch>
        <Route path='/login' render={() => (
          <Login
            handleLogin={handleLogin}
            handleChange={authHandleChange}
            formData={authFormData}
          />
        )} />
        <Route path='/register' render={() => (
          <Register
            handleRegister={handleRegister}
            handleChange={authHandleChange}
            formData={authFormData}
          />
        )} />
        <Route path='/hero' render={() => (
          <HeroPage
          />
        )} />
        <Redirect from="/" to="/login" />
      </Switch>


    </div>
  );
}

export default withRouter(App);
