var ShakyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  var oldStep = Dancer.prototype.step;
  this.addTop = false;
  this.addLeft = true;
  this.newTop = top || 0;
  this.newLeft = left || 0;
  window.dancers.push(this);

};

ShakyDancer.prototype = new Dancer();
ShakyDancer.prototype.constructor = ShakyDancer;
ShakyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var movement = 20 * Math.random();
  this.addTop ? this.newTop = this.newTop + movement : this.newTop = this.newTop - movement;
  this.addLeft ? this.newLeft = this.newLeft + movement : this.newLeft = this.newLeft - movement;
  this.addTop = Math.random() >= 0.5;
  this.addLeft = Math.random() >= 0.5;
  this.$node.css({
    top: this.newTop,
    left: this.newLeft
  });
};

ShakyDancer.prototype.lineUp = function() {
  this.$node.animate({top: "200px"}, 500);
  this.newTop = 200;
};