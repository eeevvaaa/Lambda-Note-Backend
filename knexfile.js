const localPg = {
	host: 'localhost', // address to find the db server
	database: 'dev',
	user: 'admin',
	password: 'admin'
};
const dbConnection = process.env.DATABASE_URL || localPg;

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './data/dev.sqlite3'
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		}
	},

	staging: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	},

	production: {
		client: 'pg',
		connection: dbConnection,
		migrations: {
			tableName: 'knex_migrations',
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		},
		useNullAsDefault: true,
		ssl: true
	}
};
