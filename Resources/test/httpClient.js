
describe('httpClient', function() {
  beforeEach(function() {
    var httpClient;
    httpClient = require('httpClient');
    return this.client = new httpClient();
  });
  return it('should be object', function() {
    return expect(typeof this.client).toBe("object");
  });
});
