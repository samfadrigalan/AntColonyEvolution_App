

// var url = document.URL + "api/generation/2";
var url = document.URL+ "api/data/";
var json = new Array();
var sum = 0;
var innerJson = new Array();
$.getJSON( url, function( array ) {
  console.log(array.length);
  for(i = 0; i< array.length; i++){
    innerJson.push(array.successfulActionCount.noop);
    innerJson.push(array.successfulActionCount.movement);
    innerJson.push(array.successfulActionCount.memory);
    innerJson.push(array.successfulActionCount.scent);
    innerJson.push(array.successfulActionCount.timer);
    innerJson.push(array.successfulActionCount.give);
    innerJson.push(array.successfulActionCount.take);
    innerJson.push(array.successfulActionCount.work);
    innerJson.push(array.successfulActionCount.cultivate);
    innerJson.push(array.successfulActionCount.build);
    innerJson.push(array.successfulActionCount.raise);
    innerJson.push(array.successfulActionCount.lower);
    innerJson.push(array.successfulActionCount.reproduce);
    innerJson.push(array.successfulActionCount.noop);




$(function () {
  Highcharts.chart('genActions', {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Action Percentages per Simulation'
      },
      xAxis: {
          categories: ['NoOp','Movement', 'Memory', 'Scent', 'Timer', "Harvest", "Give", "Take","Work","Cultivate","Build","Raise","Lower","Reproduce"],
          tickmarkPlacement: 'on',
          title: {
              enabled: false
          }
      },
      yAxis: {
          title: {
              text: 'Percent'
          }
      },
      tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
          split: true
      },
      plotOptions: {
          area: {
              stacking: 'percent',
              lineColor: '#ffffff',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#ffffff'
              }
          }
      },
      series: [{
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
          data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
          data: [2, 2, 2, 6, 13, 30, 46]
      }]
  });
});



  // $(function () {
  //     Highcharts.chart('genActions', {
  //         chart: {
  //             plotBackgroundColor: null,
  //             plotBorderWidth: null,
  //             plotShadow: false,
  //             type: 'pie'
  //         },
  //         title: {
  //             text: 'Browser market shares January, 2015 to May, 2015'
  //         },
  //         tooltip: {
  //           formatter: function() {
  //        return '<b>'+ this.point.name +'</b>: '+ Math.round(this.percentage) +' %';
  //     },
  //             pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  //         },
  //         plotOptions: {
  //             pie: {
  //                 allowPointSelect: true,
  //                 cursor: 'pointer',
  //                 dataLabels: {
  //                     enabled: true,
  //                     format: '<b>{point.name}</b>: {point.percentage:.1f} %',
  //                     style: {
  //                         color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
  //                     }
  //                 }
  //             }
  //         },
  //         series: [{
  //             name: 'Actions',
  //             colorByPoint: true,
  //             data: [{
  //                 name: 'NoOP',
  //                 y: json[0]
  //             }, {
  //                 name: 'MoveUP',
  //                 y: json[1]
  //             }, {
  //                 name: 'MoveDOWN',
  //                 y: json[2]
  //             }, {
  //                 name: 'MoveLEFT',
  //                 y: json[3]
  //             }, {
  //                 name: 'MoveRIGHT',
  //                 y: json[4]
  //             }, {
  //                 name: 'Harvest Food',
  //                 y: json[5]
  //             }, {
  //                 name: 'Give Food',
  //                 y: json[6]
  //             }, {
  //                 name: 'Take Food',
  //                 y: json[7]
  //             }, {
  //                 name: 'Work Tile',
  //                 y: json[8]
  //             }, {
  //                 name: 'Cultivate Tile',
  //                 y: json[9]
  //             }, {
  //                 name: 'Build Road',
  //                 y: json[10]
  //             }, {
  //                 name: 'Raise Height',
  //                 y: json[11]
  //             }, {
  //                 name: 'Lower Height',
  //                 y: json[12]
  //             }, {
  //                 name: 'Produce Offspring',
  //                 y: json[13]
  //             }, {
  //                 name: 'A-Decremnt PDM 1',
  //                 y: json[14]
  //             }, {
  //                 name: 'B-Decrement PDM1',
  //                 y: json[15]
  //             }, {
  //                 name: 'A-Increment PDM 1',
  //                 y: json[16]
  //             }, {
  //                 name: 'B-Increment PDM 1',
  //                 y: json[17]
  //             }, {
  //                 name: 'A-Decremnt PDM 2',
  //                 y: json[18]
  //             }, {
  //                 name: 'B-Decremnt PDM 2',
  //                 y: json[19]
  //             }, {
  //                 name: 'A-Increment PDM 2',
  //                 y: json[20]
  //             }, {
  //                 name: 'B-Increment PDM 2',
  //                 y: json[21]
  //             }, {
  //                 name: 'A-Decremnt PDM 3',
  //                 y: json[22]
  //             }, {
  //                 name: 'B-Decrement PDM 3',
  //                 y: json[23]
  //             }, {
  //                 name: 'A-Increment PDM 3',
  //                 y: json[24]
  //             }, {
  //                 name: 'B-Increment PDM 3',
  //                 y: json[25]
  //             }, {
  //                 name: 'A-Decremnt PDM 4',
  //                 y: json[26]
  //             }, {
  //                 name: 'B-Decremnt PDM 4',
  //                 y: json[27]
  //             }, {
  //                 name: 'A-Increment PDM 4',
  //                 y: json[28]
  //             }, {
  //                 name: 'B-Increment PDM 4',
  //                 y: json[29]
  //             } , {
  //                 name: 'A-Decremnt PSM 1',
  //                 y: json[30]
  //             }, {
  //                 name: 'B-Decrement PSM 1',
  //                 y: json[31]
  //             }, {
  //                 name: 'A-Increment PSM 1',
  //                 y: json[32]
  //             }, {
  //                 name: 'B-Increment PSM 1',
  //                 y: json[33]
  //             }, {
  //                 name: 'A-Decremnt PSM 2',
  //                 y: json[34]
  //             }, {
  //                 name: 'B-Decremnt PSM 2',
  //                 y: json[35]
  //             }, {
  //                 name: 'A-Increment PSM 2',
  //                 y: json[36]
  //             }, {
  //                 name: 'B-Increment PSM 2',
  //                 y: json[37]
  //             } , {
  //                 name: 'A-Decremnt PSM 3',
  //                 y: json[38]
  //             }, {
  //                 name: 'B-Decrement PSM 3',
  //                 y: json[39]
  //             }, {
  //                 name: 'A-Increment PSM 3',
  //                 y: json[40]
  //             }, {
  //                 name: 'B-Increment PSM 3',
  //                 y: json[41]
  //             }, {
  //                 name: 'A-Decremnt PSM 4',
  //                 y: json[42]
  //             }, {
  //                 name: 'B-Decremnt PSM 4',
  //                 y: json[43]
  //             }, {
  //                 name: 'A-Increment PSM 4',
  //                 y: json[44]
  //             }, {
  //                 name: 'B-Increment PSM 4',
  //                 y: json[45]
  //             }, {
  //                 name: 'Vote Increment CSM 1',
  //                 y: json[46]
  //             }, {
  //                 name: 'Vote Increment CSM 2',
  //                 y: json[47]
  //             }, {
  //                 name: 'Vote Increment CSM 3',
  //                 y: json[48]
  //             }, {
  //                 name: 'Vote Increment CSM 4',
  //                 y: json[49]
  //             } , {
  //                 name: 'Vote Decrement CSM 1',
  //                 y: json[50]
  //             }, {
  //                 name: 'Vote Decrement CSM 2',
  //                 y: json[51]
  //             }, {
  //                 name: 'Vote Decrement CSM 3',
  //                 y: json[52]
  //             }, {
  //                 name: 'Vote Decrement CSM 4',
  //                 y: json[53]
  //             }, {
  //                 name: 'Release Small Scent A',
  //                 y: json[54]
  //             }, {
  //                 name: 'Release Large Scent A',
  //                 y: json[55]
  //             }, {
  //                 name: 'Release Small Scent B',
  //                 y: json[56]
  //             }, {
  //                 name: 'Release Large Scent B',
  //                 y: json[57]
  //             }, {
  //                 name: 'Release Small Scent C',
  //                 y: json[58]
  //             }, {
  //                 name: 'Release Large Scent C',
  //                 y: json[59]
  //             }, {
  //                 name: 'Reset Personal Timer 1',
  //                 y: json[60]
  //             }, {
  //                 name: 'Reset Personal Timer 2',
  //                 y: json[61]
  //             }, {
  //                 name: ' Vote Reset Colony Timer 1',
  //                 y: json[62]
  //             }, {
  //                 name: 'Vote Reset Colony Timer 2',
  //                 y: json[63]
  //             }],
  //             clip: false
  //          }]
  //     });
  // });
 });
