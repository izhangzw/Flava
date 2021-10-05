import axios from 'axios'

const service = axios.create({
  baseURL: process.env.HOST,
  timeout: 30 * 1000
})

service.interceptors.request.use(config => {
  return config
}, error => {
  console.log(`Request error`, error)
  Promise.reject(error)
})

service.interceptors.response.use(response => {
  console.log(response)
  const {status, message, data} = response
  if (status !== 200) {
    alert(message)
    Promise.reject(message)
  }
  return data.data
}, error => {
  console.log('Response error', error)
})

export default service
