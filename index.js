'use strict';
require('dotenv').config();
const { start } = require('./src/server.js');
const { dbInstance } = require('./src/models/index.js');
const PORT = process.env.PORT || 3000;

dbInstance
  .sync()
  .then(() => {
    start(PORT);
  })
  .catch(console.error);
