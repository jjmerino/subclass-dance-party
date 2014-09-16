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
};
  Dancer.prototype.createNode = function(){
    return $('<span class="dancer"></span>');
  };

  Dancer.prototype.step = function(){
    if(window.peek){
      debugger;
      window.peek=false;
    }
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step

    var wantedLeft = this.left;
    if (this._liningUp){
      this._alpha +=1/this.speed;
      if (this._alpha >= 1){
        this._alpha = 1;
        this._liningUp = false;
      }
      this.left = this._from * (1 - this._alpha) + this._alpha *this._to;
    }
    var forceX = 0;
    var forceY = 0;
    for (var i = 0; i < window.dancers.length; i++){
      var dancer = window.dancers[i];
      var otherY = dancer.top;
      var otherX = dancer.left;


      var distance = Math.sqrt(Math.pow(otherX - this.left,2) + Math.pow(otherY - this.top,2));
      if (distance > 200){
        continue;
      }
      if (dancer===this){

        continue;
      }
      var force = distance < 5 ? Math.exp(1/5) : Math.exp(1/(distance));
      var angle = Math.atan2(-otherY + this.top,otherX - this.left);
      forceX = -Math.cos(angle) * force;
      forceY = Math.sin(angle) * force;

      if(otherY - this.top < 0){
        forceY = forceY;
      }
      if(otherX - this.left < 0 ){
        forceX = forceX;
      }
    }

    var deltaX = forceX * 0.3;
    var deltaY = forceY * 0.3;
    this.left += deltaX;
    this.top += deltaY;

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

  Dancer.prototype.handleClick = function(){
    var styleSettings = {
      'background-color': 'green'
    };
    this.$node.css(styleSettings);
  };

  Dancer.prototype.lineUp = function(to){
    this._liningUp = true;
    this._alpha = 0;
    this._from = this.left;
    this._to = to;

  };

