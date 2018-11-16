d3.text("./1.csv", function(data) {
    var parsedCSV = d3.csv.parseRows(data);

    var container = d3.select("body")
        .append("table")

    .selectAll("tr")
        .data(parsedCSV).enter()
        .append("tr")

    .selectAll("td")
        .data(function(d) {
            return d;
        }).enter()
        .append("td")
        .text(function(d) {
            return d;
        });
});

$(function () {
		$('#fixed_hdr1').fxdHdrCol({
			fixedCols: 3,
			width:     '100%',
			height:    400,
			colModal: [
			   { width: 50, align: 'center' },
			   { width: 110, align: 'center' },
			   { width: 170, align: 'left' },
			   { width: 250, align: 'left' },
			   { width: 100, align: 'left' },
			   { width: 70, align: 'left' },
			   { width: 100, align: 'left' },
			   { width: 100, align: 'center' },
			   { width: 90, align: 'left' },
			   { width: 400, align: 'left' }
			]					
		});
		
		$('#fixed_hdr2').fxdHdrCol({
			fixedCols: 0,
			width: "100%",
			height: 400,
			colModal: [
			{ width: 50, align: 'center' },
			{ width: 110, align: 'center' },
			{ width: 170, align: 'left' },
			{ width: 250, align: 'left' },
			{ width: 100, align: 'left' },
			{ width: 70, align: 'left' },
			{ width: 100, align: 'left' },
			{ width: 100, align: 'center' },
			{ width: 90, align: 'left' },
			{ width: 400, align: 'left' }
			],
			sort: true
		});
		$('#fixed_hdr3').fxdHdrCol({
			fixedCols: 0,
			width: "100%",
			height: 200,
			colModal: [{width: 30, align: 'center'},
			{width: 90, align: 'center'},
			{width: 200, align: 'left'},
			{width: 100, align: 'center'},
			{width: 70, align: 'center'},
			{width: 250, align: 'center'}
			]
		});
		
		$('#fixed_hdr_test28').fxdHdrCol({
		    fixedCols: 4,
		    width: 700,
		    height: 300,
		    colModal: [
		      { width: 50, align: 'center' }, 
		      { width: 70, align: 'center' }, 
		      { width: 70, align: 'center' }, 
		      { width: 70, align: 'center' }, 
		      { width: 70, align: 'center' }, 
		      { width: 70, align: 'center' }, 
		      { width: 70, align: 'center' }, 
		      { width: 70, align: 'center' }, 
		      { width: 70, align: 'center' }, 
		      { width: 70, align: 'center' }, 
		      { width: 70, align: 'center' }, 
		      { width: 70, align: 'center' }
		    ],
		    sort: false
		  })
	});