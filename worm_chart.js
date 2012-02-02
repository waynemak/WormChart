var WormChart = function(args) {
  this.positive = args["positive"];
  this.negative = 100 - this.positive;
  this.container = args["container"];

  this.render = function(){
    jQuery("#worm_chart .positive").css("height", "" + this.positive + "%");
    jQuery("#worm_chart .negative").css("height", "" + this.negative + "%");
    this.height = parseFloat($(this.container).css("height"));
  };



  this.wormHtml = '<div id="worm_chart"> <div class="negative"></div> <div class="positive"> </div> </div>';
  
  jQuery(this.container).html(this.wormHtml);

  this.render();
  this.bindToClick();
  
  return this;
};
