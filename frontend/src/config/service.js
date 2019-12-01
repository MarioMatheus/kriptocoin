import axios from 'axios'

export const KryptocoinAPI = axios.create({
  baseURL: 'https://localhost:3001',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})
