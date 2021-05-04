'use strict';

const server = require('../src/server.js');

const supertest = require('supertest');
const fakeServer = supertest(server.app);


describe('TEST NotFound and Bad Method', () => {
    it('Not Found', async() => {
        let result = await fakeServer.get('/anyRoute')
        expect(result.status).toEqual(404);

    });

    it('Bad Method', async() => {
        let result = await fakeServer.post('/wrongMethod')
        expect(result.status).toEqual(404)

    });

});

describe('Test Human Route', () => {
    it('Bad Method for Human Routes', async() => {
        let result = await fakeServer.post('/human/:id')
        expect(result.status).toEqual(404);
    });


    it('Bad Route for Human Routes', async() => {
        let result = await fakeServer.post('/notHuman')
        expect(result.status).toEqual(404);
    });


    it('Check GET method status', async() => {
        let result = await fakeServer.get('/human');
        expect(result.status).toEqual(200);
    });

    it('Check GET method for reading single value status', async() => {
        let result = await fakeServer.get('/human/:id');
        expect(result.status).toEqual(200);
    });

    it('Check PUT method status', async() => {
        let result = await fakeServer.put('/human/:id');
        expect(result.status).toEqual(201);
    });

    it('Check DELETE method status', async() => {
        let result = await fakeServer.delete('/human/:id');
        expect(result.status).toEqual(202);
    });

    it('Check GET method DATA', async() => {
        let result = await fakeServer.get('/human');
        expect(result.body.length).toEqual(0);
    });

    it('Check POST method status', async() => {
        let result = await fakeServer.post('/human')
        expect(result.status).toEqual(200);
    });


    it('Check POST method DATA', async() => {
        let result = await fakeServer.post('/human').send({ Name: "Nihad", LivesIn: "Az-zarqa" });
        expect(result.body.record).toEqual({ Name: "Nihad", LivesIn: "Az-zarqa" });
    });


});


describe('Test Alien Route', () => {
    it('Bad Method for Alien Routes', async() => {
        let result = await fakeServer.post('/alien/:id')
        expect(result.status).toEqual(404);
    });


    it('Bad Route for Alein Routes', async() => {
        let result = await fakeServer.post('/notAlien')
        expect(result.status).toEqual(404);
    });


    it('Check GET method status', async() => {
        let result = await fakeServer.get('/alien');
        expect(result.status).toEqual(200);
    });

    it('Check GET method for reading single value status', async() => {
        let result = await fakeServer.get('/alien/:id');
        expect(result.status).toEqual(200);
    });

    it('Check PUT method status', async() => {
        let result = await fakeServer.put('/human/:id');
        expect(result.status).toEqual(201);
    });

    it('Check DELETE method status', async() => {
        let result = await fakeServer.delete('/alien/:id');
        expect(result.status).toEqual(202);
    });

    it('Check GET method DATA', async() => {
        let result = await fakeServer.get('/alien');
        expect(result.body.length).toEqual(0);
    });

    it('Check POST method status', async() => {
        let result = await fakeServer.post('/alien')
        expect(result.status).toEqual(200);
    });

    it('Check POST method DATA', async() => {
        let result = await fakeServer.post('/alien').send({ Name: "Nihad", LivesIn: "Az-zarqa" });
        expect(result.body.record).toEqual({ Name: "Nihad", LivesIn: "Az-zarqa" });
    });

});