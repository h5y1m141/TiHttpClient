describe 'httpClient', ->
  beforeEach ->
    httpClient = require('httpClient')
    @client = new httpClient()

  it 'should be object', ->
    expect(typeof @client).toBe "object"

  it 'has Timeout seconds', ->
    expect(@client.httpTimeout).toBe 5000


