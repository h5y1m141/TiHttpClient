describe 'httpClient', ->
  before each ->
    @httpClient = require 'lib/httpClient'


describe 'initialize', ->
  it 'should be object', ->
    expect(typeof @httpClient).toBe "object"