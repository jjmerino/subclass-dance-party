var CrazyDancer = function(top, left, timeBetweenSteps){
  this.radius = 50;
  this.$center = $('<span class="dancer"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
  this.speed = 1.13;
};

CrazyDancer.prototype = Object.create(Dancer.prototype);
CrazyDancer.prototype.constructor = CrazyDancer;

CrazyDancer.prototype.createNode = function(){
    var node = $('<span class="dancerContainer"></span>');
    node.append(this.$center);
    return node;
}

CrazyDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
  var dx = Math.random() * this.radius * 2 - this.radius;
  var dy = Math.random() * this.radius * 2 - this.radius;
  var styleSettings = {
    top: dy,
    left: dx
  };
  this.$center.css(styleSettings);
  this.setPosition(this.top, this.left);
};
