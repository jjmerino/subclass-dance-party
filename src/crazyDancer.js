var CrazyDancer = function(top, left, timeBetweenSteps){
  this.radius = 50;
  this.center = [left, top];
  Dancer.call(this, top, left, timeBetweenSteps);
};

CrazyDancer.prototype = Object.create(Dancer.prototype);
CrazyDancer.prototype.constructor = CrazyDancer;

CrazyDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
  var dx = Math.random() * this.radius * 2 - this.radius;
  var dy = Math.random() * this.radius * 2 - this.radius;
  this.top = this.center[1] + dy;
  this.left = this.center[0] + dx;
  this.setPosition(this.top,this.left);
};
