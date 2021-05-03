'use strict';

const server = require('../src/server.js');

const supertest = require('supertest');
const fakeServer = supertest(server.app);


describe('TEST NotFound and Bad Method ', () => {

    it('Not Found', async() => {

        let result = await fakeServer.get('/anyRout')
        expect(result.status).toEqual(404);

    });

    it('Bad Method', async() => {
        let result = await fakeServer.post('/wrongMethod')
        expect(result.status).toEqual(404)

    });



})