const axios = require('axios');
const apiConfig = require('../config/pipeDriveApiConfig');

const apiPipeDrive = axios.create({
  baseURL: apiConfig.baseURL
});

module.exports = apiPipeDrive;