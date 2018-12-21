describe('HashiCorp', function() {
  it('index.html', function() {
    browser.url('http://localhost:4567/index.html');
    browser.checkDocument([{}]);
  });
});