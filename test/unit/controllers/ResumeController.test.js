var request = require('supertest');

describe('ResumeController', function () {
    
    describe('#hi()', function () {
        it('should say hi', function (done) {
            request(sails.hooks.http.app)
                .get('/resume/hi')
                .expect(200, done);
        });
    });

});