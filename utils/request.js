const axios = require('axios')

const baseURL = 'http://api.lieliu.com:1024'

const server = axios.create({
  baseURL,
  timeout: 15000
})

module.exports = server
