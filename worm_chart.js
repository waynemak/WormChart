var WormChart = function(args) {
  this.positive = args["positive"];
  this.negative = args["negative"];

  this.render = function(){
    $("#worm_chart .positive").css("height", "" + this.positive + "%");
    $("#worm_chart .negative").css("height", "" + this.negative + "%");
  }

  this.updateNegative = function(newNegative) {
    this.positive = 100 - newNegative;
    this.negative = newNegative;
    this.render();
  };

  this.render();
  return this;
};
