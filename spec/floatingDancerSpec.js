describe("floatingDancer", function() {

  var floatingDancer;
  var timeBetweenSteps = 0;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    floatingDancer = new FloatingDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(floatingDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe("dance", function(){
    it("should not be lost into nothingness", function(){
      sinon.spy(floatingDancer, "step");
      var ceiling = floatingDancer.floor - floatingDancer.height - floatingDancer.lambda;

      for(var i = 0; i < 1000; i++){
        clock.tick(timeBetweenSteps);
        expect(floatingDancer.top<=floatingDancer.floor).to.equal(true);
        expect(floatingDancer.top>=ceiling).to.equal(true);
      }
    });
  });
});
