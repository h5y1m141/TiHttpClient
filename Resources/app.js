var testsEnabled;

testsEnabled = true;

if (testsEnabled === true) {
  require('test/tests');
} else {
  Ti.API.info("start apps");
}
