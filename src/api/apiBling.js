const axios = require('axios');
const apiConfig = require('../config/blingApiConfig');

const apiBling = axios.create({
  baseURL: apiConfig.baseURL
});

module.exports = apiBling;