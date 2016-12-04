var url = document.URL + "api/experiment/2";
var json = new Array();
var sum = 0;
$.getJSON( url, function( array ) {
  for(i = 0; i< array.length; i++){
    json.push(array[i]);
  }

  $(function () {
      Highcharts.chart('fitness', {
        chart: {
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
          series: [{
              name: 'Avg Fitness vs Generation',
              data: json
      }]
  });
});
});
