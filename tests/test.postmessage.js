define(['postmessage/postmessage',
        'chai'],
function(postmessage, chai) {
  var expect = chai.expect;

  describe("postmessage", function() {
    
    it('shoud export send function', function() {
      expect(postmessage.send).to.exist;
      expect(postmessage.send).to.be.a('function');
    });
    
  });
  
  return { name: "test.postmessage" }
});
