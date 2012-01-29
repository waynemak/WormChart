var WormChart = function(args) {
  this.positive = args["positive"];
  this.negative = 100 - this.positive;
  this.container = args["container"];

  this.render = function(){
    $("#worm_chart .positive").css("height", "" + this.positive + "%");
    $("#worm_chart .negative").css("height", "" + this.negative + "%");
  };

  this.updateValue = function(newPosValue) {
    this.positive = newPosValue;
    this.negative = 100 - newPosValue;
    this.render();

    return newPosValue;
  };

  this.wormHtml = '<div id="worm_chart"> <div class="negative"></div> <div class="positive"> </div> </div>';
  
  $(this.container).html(this.wormHtml);

  this.render();

  var self = this;
  $("#worm_chart").click(function(){
    var newPos = self.updateValue(Math.floor(((250 - event.y) / 250.0) * 100));
    $(self.container).trigger("chartUpdated", newPos);
  });
  
  return this;
};
