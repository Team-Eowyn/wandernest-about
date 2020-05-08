const request = require('supertest');
const app = require('../server/index.js');

describe('GET about module with id = 1', () => {
  it('expecting response type to be json and status is 200', (done) => {
    return request(app)
      .get('/about/1')
      // .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});
