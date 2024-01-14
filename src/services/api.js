import axios from 'axios'

const api = axios.create({
  baseURL: 'https://praticandojsonserver.netlify.app'
})

export default api
