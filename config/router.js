const noteRoute = require('../api/noteRoute');
const userRoute = require('../api/userRoute');

const notes = server => {
	server.use('/api/notes', noteRoute);
};

const users = server => {
	server.use('/api/auth', userRoute);
};

module.exports = {
	noteRoute: notes,
	userRoute: users
};
