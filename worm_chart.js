(function($) {
  var WormChart = function(args) {
    //this.positive = args["positive"];
    //this.negative = 100 - this.positive;
    this.container = args["el"];
    this.data = args["data"];

    this.htmlPortion = function(size, portionNumber) {
      return '<div class="worm_portion portion_color' + (portionNumber % 3) + '" style="width:' + size + '%;"></div>'
    }

    this.render = function(){
      var dataLength = this.data.length;
      var innerHtml = ""
      for(var i = 0; i < dataLength; i ++){
        innerHtml += this.htmlPortion(this.data[i], i)

      }

      jQuery(this.container).html('<div class="worm_chart">' + 
                                  innerHtml + '</div>');
    };

    this.render();

    return this;
  }

  $.fn.wormChart = function(data){
    new WormChart({
      "el" : this,
      "data" : data
    });
  }
})(jQuery);
