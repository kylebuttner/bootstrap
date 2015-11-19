$(function () {
    $('.container #chart1').highcharts({
        credits: {
          enabled: false
        },
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Carb Consumption'
        },
        xAxis: {
            categories: ['Puff Pastry', 'Cake', 'Baguette']
        },
        yAxis: {
            title: {
                text: 'Carb Consumption'
            }
        },
        series: [{
            name: 'Yojin',
            data: [1, 0, 4]
        }, {
            name: 'Kyle',
            data: [5, 7, 3]
        }]
    });
});

var options = {
    chart: {
        renderTo: '.container',
        defaultSeriesType: 'column'
    },
    title: {
        text: 'FAC Meetup Attendance Over Time'
    },
    xAxis: {
        categories: []
    },
    yAxis: {
        title: {
            text: 'Attendees'
        }
    },
    series: []
};

$.get('data.csv', function(data) {
    // Split the lines
    var lines = data.split('\n');

    // Iterate over the lines and add categories or series
    $.each(lines, function(lineNo, line) {
        var items = line.split(',');

        // header line containes categories
        if (lineNo == 0) {
            $.each(items, function(itemNo, item) {
                if (itemNo > 0) options.xAxis.categories.push(item);
            });
        }

        // the rest of the lines contain data with their name in the first
        // position
        else {
            var series = {
                data: []
            };
            $.each(items, function(itemNo, item) {
                if (itemNo == 0) {
                    series.name = item;
                } else {
                    series.data.push(parseFloat(item));
                }
            });

            options.series.push(series);

        }

    });

    // Create the chart
    var chart = new Highcharts.Chart(options);
});
