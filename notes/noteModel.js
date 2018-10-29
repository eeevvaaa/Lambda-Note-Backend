const knex = require('knex');
const knexCofig = require('../knexfile');
const db = knex(knexCofig.development);

module.exports = {
	get,
	getById,
	insert,
	update,
	remove
};

function get() {
	return db('notes');
}

function getById(id) {
	return db('notes')
		.where({ id })
		.first();
}

function insert(note) {
	return db('notes')
		.insert(note)
		.into('notes');
}

function update(id, changes) {
	return db('notes')
		.where({ id })
		.update(changes);
}

function remove(id) {
	return db('notes')
		.where({ id })
		.del();
}
