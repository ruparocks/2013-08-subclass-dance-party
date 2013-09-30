var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this,top,left,timeBetweenSteps);
  var oldStep = Dancer.prototype.step;
  window.dancers.push(this);
};

BlinkyDancer.prototype = new Dancer();
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

BlinkyDancer.prototype.lineUp = function() {
  this.$node.animate({top: "300px"}, 500);
};