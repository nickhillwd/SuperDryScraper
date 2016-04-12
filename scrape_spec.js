var app = require('./server.js');

var chai = require('chai');
var should = chai.should;
var request = require('supertest');

//Please stop server running on port 5000 before running mocha scrape_spec.js

describe('GET /scrape', function(){

  it('should respond with an array of json', function(done){
    request(app)
      .get('/scrape')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(error, response){
        if(error) throw error;
      });
    done();
  });

});