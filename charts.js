$(function () {
    $('.container #chart1').highcharts({
      credits: {
          enabled: false
        },
        chart:{
          type: "bar"
        },
        title: {
            text: 'Word Frequencies in Codingforeveryone'
        },

        xAxis: {
            categories: ['JS','JavaScript','kata','good','function',':)','var','code','codewars','feedback','loop']
        },

        yAxis: {
          title: {
            text: 'Number of occurrences'
          }
        },

        series: [{
            name: 'Occurrences',
            data: [53,41,115,89,76,71,67,61,31,29,26]

        }]
    });
});

$(function () {
    $('.container #chart2').highcharts({
      credits: {
          enabled: false
        },
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Codingforeveryone Posts by User'
        },
        xAxis: {
            categories: ['4mohit','Adamantish','AlanWasTaken','alwinsol','Bektaz','besarthoxhaj','brendanmatheson','chrizzzer','Conorc1000','daymos','em-12','FrancescoPalma','franzmoro','GeekGirlGabrielle','hdrdavies','iteles','ivanmauricio','izaakrogan','jackcarlisle','JakubSvihla','Jbarget','JMurphyWeb','jonbstrong','joshpitzalis','Joshua-Ronan-Phillips','jrans','Katbow','katkelemen','katpas','kdhabibi','kylebuttner','mongolianprincess','msmichellegar','MyPitit','naazy','natoucs','nelsonic','patrickwalkowicz','RachBLondon','ragtimesp','ronanyeah','rub1e','saferthanhouses','san00','sofer','sohilpandya','tam-borine','thegsi','toast565','tormod17','tu6619']
        },
        yAxis: {
            title: {
                text: 'Posts written'
            }
        },
        series: [{
            name: 'Posts',
            data: [4,36,13,27,16, 2,18,70,42,27, 5,36, 9, 2,12, 1,12, 2,59,25,15,74, 6, 4,16, 2,14,13,12, 4,19, 4, 2,42,16,11, 9,22,32, 9, 7,20, 3, 6, 4,11,47,37,43,54,24]
        }]
    });
});

$(function () {
    $('.container #chart3').highcharts({
      credits: {
          enabled: false
        },
        title: {
            text: 'Codingforeveryone Posts Over Time'
        },

        xAxis: {
            categories: ['2015-05-20','2015-05-22','2015-05-24','2015-05-25','2015-05-27','2015-05-28','2015-05-29','2015-05-30','2015-06-01','2015-06-04','2015-06-05','2015-06-06','2015-06-08','2015-06-09','2015-06-10','2015-06-11','2015-06-12','2015-06-15','2015-06-16','2015-06-17','2015-06-18','2015-06-21','2015-06-22','2015-06-23','2015-06-24','2015-06-25','2015-06-26','2015-06-27','2015-06-28','2015-06-29','2015-06-30','2015-07-01','2015-07-02','2015-07-03','2015-07-04','2015-07-05','2015-07-06','2015-07-07','2015-07-08','2015-07-09','2015-07-10','2015-07-11','2015-07-12','2015-07-13','2015-07-14','2015-07-15','2015-07-16','2015-07-17','2015-07-20','2015-07-26','2015-07-29','2015-07-30','2015-08-03','2015-08-04','2015-08-06','2015-08-07','2015-08-08','2015-08-09','2015-08-10','2015-08-11','2015-08-12','2015-08-13','2015-08-14','2015-08-15','2015-08-16','2015-08-17','2015-08-18','2015-08-19','2015-08-20','2015-08-21','2015-08-22','2015-08-24','2015-08-25','2015-08-26','2015-08-27','2015-08-28','2015-08-29','2015-08-31','2015-09-02','2015-09-03','2015-09-04','2015-09-05','2015-09-07','2015-09-08','2015-09-10','2015-09-14','2015-09-17','2015-09-18','2015-09-19','2015-09-20','2015-09-21','2015-09-22','2015-09-23','2015-09-25','2015-09-26','2015-09-27','2015-09-28','2015-09-29','2015-09-30','2015-10-02','2015-10-03','2015-10-04','2015-10-05','2015-10-06','2015-10-07','2015-10-08','2015-10-11','2015-10-12','2015-10-13','2015-10-14','2015-10-15','2015-10-16','2015-10-18','2015-10-19','2015-10-20','2015-10-21','2015-10-22','2015-10-23','2015-10-25','2015-10-26','2015-10-27','2015-10-28','2015-10-30','2015-10-31','2015-11-01','2015-11-02','2015-11-04','2015-11-05','2015-11-06','2015-11-07','2015-11-08','2015-11-09','2015-11-10','2015-11-11','2015-11-12','2015-11-13','2015-11-14','2015-11-15','2015-11-16','2015-11-17','2015-11-18','2015-11-19','2015-11-20']
        },

        yAxis: {
          title: {
            text: 'Date'
          }
        },

        series: [{
            name: 'Posts',
            data: [4, 1, 4, 3, 1,14, 6, 5, 2, 2,20, 6, 5, 7,19, 1, 4, 4, 3, 3, 1, 8, 9,24,10,13, 8, 4, 1,12, 5, 7,10, 1, 4, 9, 2, 9, 4, 2, 8, 5, 7,11,16, 4, 2, 1, 4, 4, 3, 7, 2, 1, 3, 1, 2,23, 6,12,27, 5, 6, 1, 2, 7,10, 4,12, 8,11, 3,24, 7, 9, 6, 2,10,31, 8, 3, 7, 1, 1, 9, 1, 8, 5, 7, 1, 4, 9, 6, 4, 1, 1,10, 2, 8,10, 5, 5, 5, 9,28, 3,10,22,14, 9, 5, 6, 6, 5, 3, 8, 8, 3, 1, 3,15,13, 8, 2, 2, 4, 9, 5, 2, 8,18,12, 3,13, 4, 7, 4, 2,11,17, 2,10, 1]

        }]
    });
});
