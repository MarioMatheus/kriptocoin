import axios from 'axios'

export const KryptocoinAPI = axios.create({
  baseURL: process.env['API_URL'] || 'https://localhost:3001',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})
