'use strict';

let app = require('../');
let request = require('supertest').agent(app.listen());

describe('Our amazing site', () => {
    it('has a nice welcoming message', (done) => {
        request
            .get('/')
            .expect('Koa says HI!')
            .end(done);
    });
});
