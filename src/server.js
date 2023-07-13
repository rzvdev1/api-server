'use strict';
const express = require('express');
const server = express();
const pageNotFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const foodRoutes = require('./routes/food.js');
const drinkRoutes = require('./routes/drink.js');
const driverRoutes = require('./routes/driver.js');
const carRoutes = require('./routes/car.js');

server.use(express.json());

server.get('/', (req, res) => res.send('Hello World'));
server.use(foodRoutes);
server.use(drinkRoutes);
server.use(driverRoutes);
server.use(carRoutes);

server.use('*', pageNotFoundHandler);
server.use(errorHandler);

function start(port) {
  server.listen(port, () => console.log(`I am listening on port ${port}`));
}
module.exports = { server, start };
