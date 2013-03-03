
describe('TiCachingクラスのためのテスト', function() {
  beforeEach(function() {
    this.cache = require('lib/ticaching');
    return this.data = {
      'name': 'Gustavo',
      'age': 24,
      'country': 'Dominican Republic'
    };
  });
  describe('this is a sample test', function() {
    return it('should be true', function() {
      var value;
      value = true;
      return expect(value).toBe(true);
    });
  });
  describe('object initialize', function() {
    return it('should be object', function() {
      return expect(typeof this.cache).toBe("object");
    });
  });
  describe('data stored', function() {
    it('should be cached normally', function() {
      this.cache.save('my_key', this.data, 60);
      return expect(this.cache.exists('my_key')).toBe(true);
    });
    it('fail to save cache because there is no object', function() {
      var obj;
      obj = [];
      this.cache.save('my_key_with_no_data', obj, 30);
      return expect(this.cache.exists('my_key_with_no_data')).toBe(true);
    });
    it('could be return value', function() {
      var data;
      this.cache.save('my_key1', this.data, 60);
      data = this.cache.get('my_key1');
      return expect(data.name).toBe('Gustavo');
    });
    return it('should be return false because of no key', function() {
      return expect(this.cache.del('no_key_item')).toBe(null);
    });
  });
  return describe('data delete', function() {
    return it('can not detect cache', function() {
      this.cache.save('key_after_delete', this.data, 30);
      this.cache.del('key_after_delete');
      return expect(this.cache.exists('key_after_delete')).toBe(false);
    });
  });
});
