class httpClient 
  constructor: (args) ->
    args = args or {}
    # HTTPClientのタイムアウト（ミリ秒）
    @httpTimeout = args.httpTimeout or 5000


module.exports = httpClient    
  