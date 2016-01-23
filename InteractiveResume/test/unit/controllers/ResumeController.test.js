var assert = require('assert');

var request = require('supertest');

describe('ResumeController', function () {
      
        it('should say hi', function (done) {
            request(sails.hooks.http.app)
                .get('resume/hi')
                .expect(200);

        });
  

});