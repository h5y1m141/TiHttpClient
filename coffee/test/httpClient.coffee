describe 'httpClient', ->
  beforeEach ->
    httpClient = require('httpClient')
    @client = new httpClient()

  it 'should be object', ->
    expect(typeof @client).toBe "object"