var WormChart = function(args) {
  this.positive = args["positive"];
  this.negative = 100 - this.positive;
  this.container = args["container"];



  this.render = function(){
    $("#worm_chart .positive").css("height", "" + this.positive + "%");
    $("#worm_chart .negative").css("height", "" + this.negative + "%");
  };

  this.updateNegative = function(newNegative) {
    this.positive = 100 - newNegative;
    this.negative = newNegative;
    this.render();

    return newNegative;
  };

  this.wormHtml = '<div id="worm_chart"> <div class="negative"></div> <div class="positive"> </div> </div>';
  
  $(this.container).html(this.wormHtml);

  this.render();

  var self = this;
  $("#worm_chart").click(function(){
    var newNeg = self.updateNegative(Math.floor((event.y / 250.0) * 100));
    $(self.container).trigger("chartUpdated", newNeg);
  });
  
  return this;
};
