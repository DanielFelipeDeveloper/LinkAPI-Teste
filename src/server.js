const express = require('express');
const routes = require('./routes');

require('./database/connection');

const server = express();

server.use(routes)
server.use(express.json);

server.listen(3333, () => {
  console.log('Server is Running')
})