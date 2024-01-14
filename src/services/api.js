import axios from 'axios'

const api = axios.create({
  baseURL: 'https://json-test-kappa.vercel.app/'
})

export default api
