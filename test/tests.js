let Station = require('../models/station')
let expect = require('chai').expect;

describe('Tests', function () {
    it('should be invalid if Station model name is empty', function (done) {
        let station = new Station();

        station.validate(function (err) {
            expect(err.errors.name).to.exist;
            done();
        });
    });
}); 