describe("crazyDancer", function() {

  var crazyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    crazyDancer = new CrazyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(crazyDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe("dance", function(){
    it('expect changing left and top', function(){
      sinon.spy(crazyDancer, "step");

      var left = crazyDancer.left;
      var top = crazyDancer.top;
      clock.tick(timeBetweenSteps);
       // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(crazyDancer.left).not.to.equal(left);
      expect(crazyDancer.top).not.to.equal(top);

      left = crazyDancer.left;
      top = crazyDancer.top;

      clock.tick(timeBetweenSteps);

      expect(crazyDancer.left).not.to.be.equal(left);
      expect(crazyDancer.top).not.to.be.equal(top);
    });
    it('expect changing left and top inside the radius', function(){
      sinon.spy(crazyDancer, "step");

      clock.tick(timeBetweenSteps);
       // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(Math.abs(crazyDancer.left-crazyDancer.center[0])<crazyDancer.radius).to.equal(true);
      expect(Math.abs(crazyDancer.top-crazyDancer.center[1])<crazyDancer.radius).to.equal(true);

      clock.tick(timeBetweenSteps);

      expect(Math.abs(crazyDancer.left-crazyDancer.center[0])<crazyDancer.radius).to.equal(true);
      expect(Math.abs(crazyDancer.top-crazyDancer.center[1])<crazyDancer.radius).to.equal(true);

      clock.tick(timeBetweenSteps);

      expect(Math.abs(crazyDancer.left-crazyDancer.center[0])<crazyDancer.radius).to.equal(true);
      expect(Math.abs(crazyDancer.top-crazyDancer.center[1])<crazyDancer.radius).to.equal(true);
    });
  });

});
