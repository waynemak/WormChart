#WormChart

It's a chart that looks like a worm.

*Checkout an example [here](https://waynemak.github.com/wormchart)*

##Usage
```javascript

  // The data is just an array of percentages.
  var data = [25, 25, 25, 25]

  // It's easy just new up the object passing it the data you want to display
  // Tell it what element you want the WormChart to be drawn into
  // And pass it an array of data that you want to render
  new WormChart({"el" : "#wormchart_container", "data": data})

```

## Dependencies
* jQuery >= 1.6.0

## Future Plans

* Add some tests
* Make it a real jQuery plugin
* Make the color scheme customizeable
