var WormChart = function(args) {
  this.positive = args["positive"];
  this.negative = 100 - this.positive;
  this.container = args["container"];

  this.render = function(){
    jQuery("#worm_chart .positive").css("height", "" + this.positive + "%");
    jQuery("#worm_chart .negative").css("height", "" + this.negative + "%");
    this.height = parseFloat($(this.container).css("height"));
  };

  this.animateUpdate = function() { 
    jQuery("#worm_chart .positive").animate({
      "height": "" + this.positive + "%"
    }, "slow");

    jQuery("#worm_chart .negative").animate({
      "height": "" + this.negative + "%"
    }, "slow");
  };

  this.updateValue = function(newPosValue) {
    this.positive = newPosValue;
    this.negative = 100 - newPosValue;
    this.animateUpdate();

    return newPosValue;
  };

  this.bindToClick = function() { 
    //var self = this;
    //jQuery("#worm_chart").click(function(){
      //var newPos = self.updateValue(Math.ceil(((this.height - event.y) / this.height.0) * 100));
      //jQuery(self.container).trigger("chartUpdated", newPos);
    //});
  };

  this.wormHtml = '<div id="worm_chart"> <div class="negative"></div> <div class="positive"> </div> </div>';
  
  jQuery(this.container).html(this.wormHtml);

  this.render();
  this.bindToClick();
  
  return this;
};
