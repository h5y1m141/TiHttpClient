var httpClient;

httpClient = (function() {

  function httpClient(args) {
    args = args || {};
    this.httpTimeout = args.httpTimeout || 5000;
    this.retryCount = args.retryCount || 2;
    this.retryWaitTime = args.retryWaitTime || 1000;
    this.currentRetryCount = 0;
    this.saveMethod = "";
    this.saveUrl = "";
    this.saveData = null;
    this.http = Ti.Network.createHTTPClient({
      onload: function(e) {
        return true;
      },
      onerror: function(error) {
        return true;
      },
      timeout: this.httpTimeout
    });
  }

  return httpClient;

})();

module.exports = httpClient;
