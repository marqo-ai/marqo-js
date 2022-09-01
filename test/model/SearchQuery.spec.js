/*
 * Marqo
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Marqo);
  }
}(this, function(expect, Marqo) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('SearchQuery', function() {
      beforeEach(function() {
        instance = new Marqo.SearchQuery();
      });

      it('should create an instance of SearchQuery', function() {
        // TODO: update the code to test SearchQuery
        expect(instance).to.be.a(Marqo.SearchQuery);
      });

      it('should have the property filter (base name: "filter")', function() {
        // TODO: update the code to test the property filter
        expect(instance).to.have.property('filter');
        // expect(instance.filter).to.be(expectedValueLiteral);
      });

      it('should have the property limit (base name: "limit")', function() {
        // TODO: update the code to test the property limit
        expect(instance).to.have.property('limit');
        // expect(instance.limit).to.be(expectedValueLiteral);
      });

      it('should have the property q (base name: "q")', function() {
        // TODO: update the code to test the property q
        expect(instance).to.have.property('q');
        // expect(instance.q).to.be(expectedValueLiteral);
      });

      it('should have the property reRanker (base name: "reRanker")', function() {
        // TODO: update the code to test the property reRanker
        expect(instance).to.have.property('reRanker');
        // expect(instance.reRanker).to.be(expectedValueLiteral);
      });

      it('should have the property searchMethod (base name: "searchMethod")', function() {
        // TODO: update the code to test the property searchMethod
        expect(instance).to.have.property('searchMethod');
        // expect(instance.searchMethod).to.be(expectedValueLiteral);
      });

      it('should have the property searchableAttributes (base name: "searchableAttributes")', function() {
        // TODO: update the code to test the property searchableAttributes
        expect(instance).to.have.property('searchableAttributes');
        // expect(instance.searchableAttributes).to.be(expectedValueLiteral);
      });

      it('should have the property showHighlights (base name: "showHighlights")', function() {
        // TODO: update the code to test the property showHighlights
        expect(instance).to.have.property('showHighlights');
        // expect(instance.showHighlights).to.be(expectedValueLiteral);
      });

    });
  });

}));
