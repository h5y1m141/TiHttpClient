
describe('httpClient', function() {
  beforeEach(function() {
    var httpClient;
    httpClient = require('httpClient');
    return this.client = new httpClient();
  });
  it('should be object', function() {
    return expect(typeof this.client).toBe("object");
  });
  return it('has Timeout seconds', function() {
    return expect(this.client.httpTimeout).toBe(5000);
  });
});
