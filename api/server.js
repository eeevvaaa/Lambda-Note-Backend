const express = require('express');

const configMiddleware = require('../config/middleware');
const routers = require('../config/router');

const server = express();

configMiddleware(server);

routers.noteRoute(server);
routers.userRoute(server);

// test API root path
server.get('/', (req, res) => {
	res.status(200).send('Hi!');
});

module.exports = server;
