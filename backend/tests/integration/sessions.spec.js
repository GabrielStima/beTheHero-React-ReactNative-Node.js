const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Sessions', () => {
    beforeEach( async () => {
        await connection.migrate.latest();
    })
    afterAll( async () => {
        await connection.destroy();
    })
    it('An array of specific NGO incidents must return', async () => {
        const response = await request(app).post('/sessions').send({
            id:"59c43553"
        })

        expect(response.body).toHaveProperty("name");
    })
})