
describe('httpClient', function() {
  return before(each(function() {
    return this.httpClient = require('lib/httpClient');
  }));
});

describe('initialize', function() {
  return it('should be object', function() {
    return expect(typeof this.httpClient).toBe("object");
  });
});
