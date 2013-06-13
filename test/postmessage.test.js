define(['postmessage/postmessage'],
function(postmessage) {

  describe("postmessage", function() {
    
    it('shoud export send function', function() {
      expect(postmessage.send).to.exist;
      expect(postmessage.send).to.be.a('function');
    });
    
    it('shoud export createListener function', function() {
      expect(postmessage.createListener).to.exist;
      expect(postmessage.createListener).to.be.a('function');
    });
    
    it('shoud export Listener constructor', function() {
      expect(postmessage.Listener).to.exist;
      expect(postmessage.Listener).to.be.a('function');
    });
    
    it('shoud export send via module', function() {
      expect(postmessage).to.equal(postmessage.send);
    });
    
  });
  
  return { name: "test.postmessage" }
});
