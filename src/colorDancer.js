var ColorDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  var oldStep = Dancer.prototype.step;
  //debugger;
  this.newTop = top || 0;
  this.newLeft = left || 0;
};

ColorDancer.prototype = new Dancer();
ColorDancer.prototype.constructor = ColorDancer;
ColorDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);

    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
    
    var styleSettings = {
      background-color: 
    };
    this.$node.css(styleSettings);
  };