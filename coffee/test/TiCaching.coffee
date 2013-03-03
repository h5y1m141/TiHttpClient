describe 'TiCachingクラスのためのテスト', ->

  beforeEach ->
    @cache = require('lib/ticaching')
    @data = 
        'name': 'Gustavo'
        'age': 24
        'country': 'Dominican Republic'


  describe 'this is a sample test', ->
    it 'should be true', ->
      value = true
      expect(value).toBe true

  describe 'object initialize', ->
    it 'should be object', ->
      expect(typeof @cache).toBe "object" 

  describe 'data stored', ->
    it 'should be cached normally', ->
      # cache data for 1 minute
      @cache.save 'my_key', @data, 60
      expect(@cache.exists 'my_key').toBe true


    it 'fail to save cache because there is no object', ->
      obj = []
      @cache.save 'my_key_with_no_data', obj, 30
      expect(@cache.exists 'my_key_with_no_data').toBe true

    it 'could be return value', ->
      @cache.save 'my_key1', @data, 60
      data = @cache.get 'my_key1'
      expect(data.name).toBe 'Gustavo'

    it 'should be return false because of no key', ->
      expect(@cache.del('no_key_item')).toBe null

  describe 'data delete', ->
    it 'can not detect cache', ->
      @cache.save 'key_after_delete', @data, 30
      @cache.del 'key_after_delete'
      expect(@cache.exists 'key_after_delete').toBe false
