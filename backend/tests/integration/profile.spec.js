const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Profile', () => {
    beforeEach( async () => {
        await connection.migrate.latest();
    })
    afterAll( async () => {
        await connection.destroy();
    })
    it('An array of specific NGO incidents must return', async () => {
        const response = await request(app).get('/profile').set({Authorization:"59c43553"})
        if (Array.isArray(response.body) && response.body.length > 0) {
            expect(response.body[0]).toHaveProperty('id');
            expect(response.body[0]).toHaveProperty('title');
            expect(response.body[0]).toHaveProperty('description');
            expect(response.body[0]).toHaveProperty('value');
            expect(response.body[0]).toHaveProperty('ong_id');
        } else {
            expect(Array.isArray(response.body)).toBeTruthy();
        }
    })
})