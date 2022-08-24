import axios from 'axios'

export const apiClient = () => {
  return axios.create({
    baseURL: process.env.API_URL || 'https://jsonplaceholder.typicode.com',
  })
}
