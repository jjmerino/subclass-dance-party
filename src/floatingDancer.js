var FloatingDancer = function(top, left){
  this.time = 0;
  this.timePrime = 50;
  this.height = 100;
  this.lambda = 10;
  this.top = top;
  this.left = left;
  this.$redGuy = $('<span class="dancer"></span>');
  this.$shadow=$('<span class="shadow"></span>');
  Dancer.call(this, top, left, 1);
};

FloatingDancer.prototype = Object.create(Dancer.prototype);
FloatingDancer.prototype.constructor = FloatingDancer;
FloatingDancer.prototype.createNode = function(){
    var node = $('<span class="dancerContainer"></span>');
    node.append(this.$redGuy);
    node.append(this.$shadow);
    return node;
}

FloatingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var displacement = 0;
  if (this.time < this.timePrime){
    displacement = this.height + this.height * (this.timePrime - this.time) / this.timePrime;
  } else {
    displacement = this.height - Math.sin((this.time - this.timePrime)/this.timePrime) * this.lambda ;
  }
  this.time++;
  this.setPosition(this.top,this.left);
  var styleSettings = {
    top: 0,
    left: 0
  };
  this.$shadow.css(styleSettings);
  var nodeSettings = {
    top: -2*this.height+displacement,
    left: 0
  };
  this.$redGuy.css(nodeSettings);
};
