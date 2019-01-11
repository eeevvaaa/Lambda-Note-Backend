const express = require('express');

const configMiddleware = require('../config/middleware');
const routers = require('../config/router');

const server = express();

configMiddleware(server);

routers.noteRouters(server);
routers.userRouters(server);

// test API root path
server.get('/', (_, res) => {
	res.status(200).send('Hi!');
});

module.exports = server;
