#WormChart

It's a chart that looks like a worm. 
Simple jQuery Plugin that generates a horizontal pie chart style graph.

**Checkout an example [here](https://waynemak.github.com/wormchart)**

##Usage
```javascript

  // The data is just an array of percentages.
  var data = [25, 34, 16, 25]

  //Simply call wormChart on the desired container object to create wormy
  $("#sample_container").wormChart(data);


```

##Styling
We believe that things should be styled with CSS not by hand passing JS
arguments. [worm_chart.css](https://github.com/waynemak/WormChart/blob/master/worm_chart.css) will serve as a good starting point. From there hack away to make wormy look the way you want.

## Dependencies
* jQuery >= 1.6.0

## Future Plans
* Add some tests
