'use strict';

//brings in express and stores functionality to server variable
const express = require('express');
const server = express();
//brings in error handlers
const pageNotFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
//brings in routes from routes folder
const foodRoutes = require('./routes/food.js');
const drinkRoutes = require('./routes/drink.js');

//allows us to parse json req.body

const driverRoutes = require('./routes/driver.js');
const carRoutes = require('./routes/car.js');

server.use(express.json());

//uses routes routes as middleware that are defined in other files
server.get('/', (req, res) => res.send('Hello World'));
server.use(foodRoutes);
server.use(drinkRoutes);
server.use(driverRoutes);
server.use(carRoutes);

//uses error handlers
server.use('*', pageNotFoundHandler);
server.use(errorHandler);

//function to start the server
function start(port) {
  server.listen(port, () => console.log(`I am listening on port ${port}`));
}
module.exports = { server, start };
