'use strict';

const server = require("../src/server");

const supertest = require('supertest')

const fakeServer = supertest(server.app);



describe('TEST Queries', () => {

    it('No Name in the Query', async() => {
        let result = await fakeServer.get('/person');
        expect(result.status).toEqual(500);
    });

    it("Query string has a name", async() => {
        let query = "value"
        let result = await fakeServer.get(`/person?name=${query}`);
        expect(result.status).toEqual(200);
    });
})