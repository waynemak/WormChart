var WormChart = function(args) {
  this.positive = args["positive"];
  this.negative = 100 - this.positive;
  this.container = args["container"];

  this.render = function(){
    jQuery("#worm_chart .positive").css("height", "" + this.positive + "%");
    jQuery("#worm_chart .negative").css("height", "" + this.negative + "%");
  };

  this.updateValue = function(newPosValue) {
    this.positive = newPosValue;
    this.negative = 100 - newPosValue;
    this.render();

    return newPosValue;
  };

  this.bindToClick = function() { 
    var self = this;
    jQuery("#worm_chart").click(function(){
      var newPos = self.updateValue(Math.floor(((250 - event.y) / 250.0) * 100));
      jQuery(self.container).trigger("chartUpdated", newPos);
    });
  };

  this.wormHtml = '<div id="worm_chart"> <div class="negative"></div> <div class="positive"> </div> </div>';
  
  jQuery(this.container).html(this.wormHtml);

  this.render();
  this.bindToClick();
  
  return this;
};
