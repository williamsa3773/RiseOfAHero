import axios from 'axios';

const baseUrl = 'https://roah.herokuapp.com/'

const api = axios.create({
  baseURL: baseUrl
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

export const updateHero = async (id, data) => {
  const resp = await api.put(`heros/${id}`, data)
  return resp.data
}

export const deleteHero = async (id) => {
  const resp = await api.delete(`/heros/${id}`)
  return resp.data
}

export const createHero = async () => {
  const resp = await api.post('/heros')
  return resp.data
}
