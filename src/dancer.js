// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.speed = 500;

  // use jQuery to create an HTML <span> tag
  this.$node = this.createNode();
  this.setPosition(this.top, this.left);
  this.step();
}
  Dancer.prototype.createNode = function(){
    return $('<span class="dancer"></span>');
  }

  Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    if (this._liningUp){
      this._alpha +=1/this.speed;
      if (this._alpha >= 1){
        this._alpha = 1;
        this.liningUp = false;
      }
      this.left = this._from * (1 - this._alpha) + this._alpha *this._to;
    }
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };

  Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/

    var styleSettings = {
      top: this.top,
      left: this.left
    };

    this.$node.css(styleSettings);
  };

  Dancer.prototype.lineUp = function(to){
    this._liningUp = true;
    this._alpha = 0;
    this._from = this.left;
    this._to = to;

  }

