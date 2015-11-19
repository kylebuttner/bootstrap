$(function () {
    $('.container #chart1').highcharts({
        title: {
            text: 'FAC Meetup Attendance'
        },

        subtitle: {
            text: 'When resizing the window or the frame, the chart should resize'
        },


        xAxis: {
            categories: ['Feb 2015','Feb 2015','Feb 2015','Feb 2015','Mar 2015','Mar 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jun 2015','Jun 2015','Jun 2015','Jun 2015','Jul 2015','Jul 2015','Jul 2015','Jul 2015','Aug 2015','Aug 2015','Aug 2015','Sep 2015','Sep 2015','Oct 2015','Oct 2015','Oct 2015','Nov 2015','Nov 2015','Nov 2015']
        },

        yAxis: {
          title: {
            text: 'Attendance'
          }
        },

        series: [{
            name: 'Coding for Everyone',
            data: [34,23,23,41,23,25,41,36,40,40,40,40,35,33,25,28,39,40,43,37,39,39,40,33,39,37,32,26,40]

        }]
    });
});
