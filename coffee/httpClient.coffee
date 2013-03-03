class httpClient 
  constructor: (args) ->
    args = args or {}
    # HTTPClientのタイムアウト（ミリ秒）
    @httpTimeout = args.httpTimeout or 5000
    # リトライ回数
    @retryCount = args.retryCount or 2
    # リトライまでの待ち時間（ミリ秒）
    @retryWaitTime = args.retryWaitTime or 1000
    # 現在のリトライ回数
    @currentRetryCount = 0
    # リトライ用に保存しておくHttpClient用パラメータ
    @saveMethod = ""
    @saveUrl = ""
    @saveData = null

    # HTTPClientを生成する
    @http = Ti.Network.createHTTPClient(
      onload: (e) ->
        # self.onloadHandler e
        return true

      onerror: (error) ->
        # self.onerrorHandler error
        return true

      timeout: @httpTimeout
    )    


module.exports = httpClient    
  