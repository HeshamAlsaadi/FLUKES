  var margin = {top: 25, right: 90, bottom: 10, left: 10},
      width = 700 - margin.right - margin.left,
      height = 250 - margin.top - margin.bottom;
  
  var x = d3.scale.ordinal()
      .rangePoints([0, width], 1);
  
  var y = {};
  
  var line = d3.svg.line(),
      axis = d3.svg.axis().orient("left"),
      background,
      foreground;
  
  var svg = d3.select("#routes").append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  d3.csv("2.csv", function(log) {
  
    // Extract the list of dimensions and create a scale for each.
    x.domain(dimensions = d3.keys(log[0]).filter(function(d) {
      return d != "event" && (y[d] = d3.scale.linear()
          .domain(d3.extent(log, function(p) { return +p[d]; }))
          .range([height, 0]));
    }));
  
    // Add grey background lines for context.
    background = svg.append("g")
        .attr("class", "background")
      .selectAll("path")
        .data(log)
      .enter().append("path")
        .attr("d", path);
  
    // Add blue foreground lines for focus.
    foreground = svg.append("g")
        .attr("class", "foreground")
      .selectAll("path")
        .data(log)
      .enter().append("path")
        .attr("d", path);
  
    // Add a group element for each dimension.
    var g = svg.selectAll(".dimension")
        .data(dimensions)
      .enter().append("g")
        .attr("class", "dimension")
        .attr("transform", function(d) { return "translate(" + x(d) + ")"; });
  
    // Add an axis and title.
    g.append("g")
        .attr("class", "axis")
        .each(function(d) { d3.select(this).call(axis.scale(y[d])); })
      .append("text")
        .attr("text-anchor", "middle")
        .attr("y", -9)
        .text(String);
  
    // Add and store a brush for each axis.
    g.append("g")
        .attr("class", "brush")
        .each(function(d) { d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brush", brush)); })
      .selectAll("rect")
        .attr("x", -8)
        .attr("width", 16);

	var data = [
	   ['Foo', 'programmer'],
	   ['Bar', 'bus driver'],
	   ['Moo', 'Reindeer Hunter']
	];
	 
	 
	function download_csv() {
		var csv = 'Name,Title\n';
		data.forEach(function(row) {
				csv += row.join(',');
				csv += "\n";
		});
	 
		console.log(csv);
		var hiddenElement = document.createElement('a');
		hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
		hiddenElement.target = '_blank';
		hiddenElement.download = '2.csv';
		hiddenElement.click();
	}

  });
  
  // Returns the path for a given data point.
  function path(d) {
    return line(dimensions.map(function(p) { return [x(p), y[p](d[p])]; }));
  }
  
  // Handles a brush event, toggling the display of foreground lines.
  function brush() {
    var actives = dimensions.filter(function(p) { return !y[p].brush.empty(); }),
        extents = actives.map(function(p) { return y[p].brush.extent(); });
    foreground.style("display", function(d) {
      return actives.every(function(p, i) {
        return extents[i][0] <= d[p] && d[p] <= extents[i][1];
      }) ? null : "none";
    });
  }