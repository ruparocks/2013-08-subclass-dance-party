var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step();
  this._top = top;
  this._left = left;
  this._timeBetweenSteps = timeBetweenSteps;
};

Dancer.prototype.step = function() {
  var that = this;
  setTimeout(function() {
    that.step();
  }, this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  this.$node.css({
    top: this._top,
    left: this._left
  });
};