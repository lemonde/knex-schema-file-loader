'use strict';

var path = require('path');
var expect = require('chai').expect;
var loader = require('../../');

describe('Knex schema loader', function () {
  var paths;

  describe('given nothing', function () {
    it('should return empty array', function (done) {
      loader.load(paths, function (err, schemas) {
        if (err) return done(err);
        expect(schemas).to.eql([]);
        done();
      });
    });
  });

  describe('given empty array', function () {
    beforeEach(function () {
      paths = [];
    });

    it('should return empty array', function (done) {
      loader.load(paths, function (err, schemas) {
        if (err) return done(err);
        expect(schemas).to.eql([]);
        done();
      });
    });
  });

  describe('given nested path', function () {
    beforeEach(function () {
      paths = [
        path.resolve(__dirname, '../fixtures/**/*.js')
      ];
    });

    it('should return empty array', function (done) {
      loader.load(paths, function (err, schemas) {
        if (err) return done(err);
        expect(schemas).to.eql([
          require('../fixtures/path1/schema'),
          require('../fixtures/path2/schema')
        ]);
        done();
      });
    });
  });

  describe('given paths', function () {
    beforeEach(function () {
      paths = [
        path.resolve(__dirname, '../fixtures/path1/**/*.js'),
        path.resolve(__dirname, '../fixtures/path2/**/*.js')
      ];
    });

    it('should return empty array', function (done) {
      loader.load(paths, function (err, schemas) {
        if (err) return done(err);
        expect(schemas).to.eql([
          require('../fixtures/path1/schema'),
          require('../fixtures/path2/schema')
        ]);
        done();
      });
    });
  });
});