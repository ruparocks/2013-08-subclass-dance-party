var ColorDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  var oldStep = Dancer.prototype.step;
  window.dancers.push(this);

};

ColorDancer.prototype = new Dancer();
ColorDancer.prototype.constructor = ColorDancer;
ColorDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var colorValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += colorValues[Math.ceil(Math.random()*16)];
  }
  var randomSize = (Math.random() * 50) + "px";
  this.$node.css({
    'border-color': color
  });
  this.$node.animate({"border-width": randomSize, "border-radius": randomSize}, 800);

};
ColorDancer.prototype.lineUp = function() {
  this.$node.animate({top: "100px"}, 1500);
};