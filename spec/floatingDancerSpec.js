describe("floatingDancer", function() {

  var floatingDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    floatingDancer = new FloatingDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(floatingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(floatingDancer.$node, 'toggle');
    floatingDancer.step();
    expect(floatingDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(floatingDancer, "step");
      expect(floatingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(floatingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(floatingDancer.step.callCount).to.be.equal(2);
    });
  });
});
