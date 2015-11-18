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
