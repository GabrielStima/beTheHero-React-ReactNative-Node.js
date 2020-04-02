const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
let idIncident;
describe('Incidents', () => {
    beforeEach( async () => {
        await connection.migrate.latest();
    })
    afterAll( async () => {
        await connection.destroy();
    })
    it('should be able to create a new Incident', async () => {
        const response = await request(app).post('/incidents').send({
            title: "Caso teste 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a elit vitae lacus porta maximus. Mauris tincidunt, nunc eget rutrum egestas, nisl mauris commodo nulla, non commodo nisi nisi quis felis.",
            value:	53,
        }).set({Authorization:'59c43553'})
        expect(response.body).toHaveProperty('id');
        expect(Number.isInteger(response.body.id)).toBeTruthy();
    })
    it('should have propertys or be a array', async () => {
        const response = await request(app).get('/incidents')
        idIncident = response.body[response.body.length - 1].id;
        if (Array.isArray(response.body) && response.body.length > 0) {
            expect(response.body[0]).toHaveProperty('id');
            expect(response.body[0]).toHaveProperty('title');
            expect(response.body[0]).toHaveProperty('description');
            expect(response.body[0]).toHaveProperty('value');
            expect(response.body[0]).toHaveProperty('ong_id');
            expect(response.body[0]).toHaveProperty('name');
            expect(response.body[0]).toHaveProperty('email');
            expect(response.body[0]).toHaveProperty('whatsapp');
            expect(response.body[0]).toHaveProperty('city');
            expect(response.body[0]).toHaveProperty('uf');
        }else{
            expect(Array.isArray(response.body)).toBeTruthy();
        }
    })
    it('should return status 204', async () => {
        const response = await request(app).delete(`/incidents/${idIncident}`).set({Authorization:'59c43553'})
        expect(response.status).toBe(204);
    })
})