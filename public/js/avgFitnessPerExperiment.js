// var url = document.URL + "api/experiment/2";
var url = document.URL+ "api/data/";
var json = new Array();
var sum = 0;
$.getJSON( url, function( array ) {
  console.log(array.length);
  for(i = 0; i< array.length; i++){
    json.push(array[i].count);

  }
  console.log(json);

  $(function () {
      Highcharts.chart('fitness', {
        chart: {
                type: 'column',
                zoomType: 'x'
            },
          title: {
              text: 'Average Fitness vs Generation',
              x: -20 //center
          },
          xAxis: {
             title:{
               text: 'Generation'
             }
         },
          yAxis: {
              title: {
                  text: 'Average Fitness'
              },
              plotLines: [{
                  value: 0,
                  width: 1,
                  color: '#808080'
              }]
          },
          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
              borderWidth: 0
          },
          plotOptions: {
            column: {
              pointPadding: 0,
              borderWidth: 0,
              groupPadding: 0,
              shadow: false
            }
          },
          series: [{
              name: 'Avg Fitness vs Generation',
              data: json
      }]
  });
});
});
