'use strict';
const express = require('express');
const server = express();

server.get('/', (req, res) => res.send('Hello World'));

function start(port) {
  server.listen(port, () => console.log(`I am listening on port ${port}`));
}
module.exports = { server, start };
