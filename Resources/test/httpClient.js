
describe('httpClient', function() {
  beforeEach(function() {
    var httpClient;
    httpClient = require('httpClient');
    return this.client = new httpClient();
  });
  it('should be object', function() {
    return expect(typeof this.client).toBe("object");
  });
  it('has Timeout seconds', function() {
    return expect(this.client.httpTimeout).toBe(5000);
  });
  it('has Ti.NetworkHttpClient object', function() {
    return expect(typeof this.client.http).toBe("object");
  });
  return describe('had retry parameter', function() {
    it('has a number of retry', function() {
      return expect(this.client.retryCount).toBe(2);
    });
    return it('has a waitTime parameter', function() {
      return expect(this.client.retryWaitTime).toBe(1000);
    });
  });
});
