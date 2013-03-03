var httpClient;

httpClient = (function() {

  function httpClient(args) {
    args = args || {};
    this.httpTimeout = args.httpTimeout || 5000;
  }

  return httpClient;

})();

module.exports = httpClient;
