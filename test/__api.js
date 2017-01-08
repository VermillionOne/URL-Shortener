var expect = require('expect');
var request = require('supertest');

describe('API', function() {

  var server;

  beforeEach(function () {

    server = require('../src/server.js');

  });
  afterEach(function () {

    server.close();

  });

  it('/ Should return specified object.', function testHealth(done) {
    request(server)
    .get('/api/')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, { hello: "world" } ,done);
  });

  it('/status Should return specified object healthy:true.', function testHealth(done) {
    request(server)
    .get('/api/status')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, { healthy: true } ,done);
  });

  it('/user/id Should return a user object with id.', function testHealth(done) {
    var fakeUserID = 345;
    request(server)
    .get('/api/user/' + fakeUserID)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, { user: {id: fakeUserID}} ,done);
  });


});
