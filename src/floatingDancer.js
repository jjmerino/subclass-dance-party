var FloatingDancer = function(top, left){
  this.time = 0;
  this.timePrime = 50;
  this.height = 100;
  this.lambda = 10;
  this.floor = top;
  this.top = top;
  this.left = left;

  Dancer.call(this, top, left, 1);

};

FloatingDancer.prototype = Object.create(Dancer.prototype);
FloatingDancer.prototype.constructor = FloatingDancer;

FloatingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  if (this.time < this.timePrime){
    this.top = this.floor - this.height + this.height * (this.timePrime - this.time) / this.timePrime;
  } else {
    this.top = this.floor - this.height - Math.sin((this.time - this.timePrime)/this.timePrime) * this.lambda ;
  }
  this.setPosition(this.top, this.left);
  this.time++;
};
