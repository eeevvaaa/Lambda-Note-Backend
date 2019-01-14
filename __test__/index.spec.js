const request = require('supertest');
const server = require('../api/server');

describe('server', () => {
	describe('GET /', () => {
		it('should return status code 200', async () => {
			const response = await request(server).get('/');
			expect(response.status).toBe(200);
		});

		it('should return JSON', async () => {
			const response = await request(server).get('/');
			expect(response.type).toBe('application/json');
		});
	}); // get

	describe('POST /api/notes/:id', () => {
		it('should return status code 201', async () => {
			const response = await request(server).post(`/api/notes/${id}`);
			expect(response.status).toBe(201);
		});
	}); // post

	describe('DELETE /api/notes/:id', () => {
		it('should return status code 200', async () => {
			const response = await request(server).delete(`/api/notes/${id}`);
			expect(response.status).toBe(200);
		});
	}); // delete
}); // server
