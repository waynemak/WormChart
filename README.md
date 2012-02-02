#WormChart

It's a chart that looks like a worm.  It's a health gauge/meter that
exposes a JS API for changing its value and animates smoothly between values.  

*Checkout an example [here](https://waynemak.github.com/wormchart)*

##Usage
```javascript

  // The data is just an array of percentages.
  var data = [25, 34, 16, 25]

  // It's easy. Just new up the object passing it the data you want to display
  // Tell it what element you want the WormChart to be drawn into
  // and pass it an array of data that you want to render
  new WormChart({"el" : "#wormchart_container", "data": data})

```

##Styling
We believe that things should be styled with CSS not by hand passing JS
arguments. There is a default stylesheet called style.css in the
project. Style.css will serve as a good starting point. From there hack away to make wormy look the way you want.

## Dependencies
* jQuery >= 1.6.0

## Future Plans

* Add some tests
* Make it a real jQuery plugin
* Make the color scheme customizeable
