const request = require('supertest');
const expect = require('expect');
let app = require('../server/server').app;

describe('Server', () => {

    describe('GET /', () => {
        it('Should return 404 status code and error object', (done) => {
            request(app)
                .get('/')
                .expect((res) => {
                    expect(res.body).toInclude({error: 'Page not found'})
                })
                .expect(404)
                .end(done);
        });
    });

    describe('GET /users', () => {
        it('Should return my user object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Serhii',
                        age: 20
                    });
                })
                .end(done);
        });
    });
});
