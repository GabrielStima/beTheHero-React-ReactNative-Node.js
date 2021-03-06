const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach( async () => {
        await connection.migrate.latest();
    })
    afterAll( async () => {
        await connection.destroy();
    })
    it('should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: "Vira Lata",
            email: "viralata@gmail.com",
            whatsapp:	"51993003914",
            city:	"Porto Alegre",
            uf: "RS"
        })
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
    it('should return a array', async () => {
        const response = await request(app).get('/ongs')

        expect(Array.isArray(response.body)).toBeTruthy();
    })
})