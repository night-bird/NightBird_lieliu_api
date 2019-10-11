const axios = require('axios')
const config = require('../config')

const server = axios.create({
  baseURL: config.baseURL,
  timeout: 15000
})

module.exports = server
