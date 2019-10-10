import axios from 'axios';

const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})

export const getHero = async () => {
  const resp = await api.get('heros/')
}
