

// var url = document.URL + "api/generation/2";
var url = document.URL+ "api/data/";
var json1 = new Array();
var sum = 0;
var innerJson1 = new Array();
var innerJson2 = new Array();
var innerJson3 = new Array();
var innerJson4 = new Array();
var innerJson5 = new Array();
var innerJson6 = new Array();
var innerJson7 = new Array();
var innerJson8 = new Array();
var innerJson9 = new Array();
var innerJson10 = new Array();
var innerJson11 = new Array();
var innerJson12 = new Array();
var innerJson13 = new Array();
var innerJson14 = new Array();

$.getJSON( url, function( array ) {
  console.log(array.length);
    for(i = 0; i< array.length; i++) {
        innerJson1.push(array[i].successfulActionCount.noop);
    }
    json1.push(innerJson1);
    console.log(innerJson1);
    for(i = 0; i< array.length; i++) {
        innerJson2.push(array[i].successfulActionCount.movement);

    }
    json1.push(innerJson2);
    console.log(innerJson2);
    for(i = 0; i< array.length; i++) {
        innerJson3.push(array[i].successfulActionCount.memory);

    }
    json1.push(innerJson3);
    console.log(innerJson3.length);
    for(i = 0; i< array.length; i++) {
        innerJson4.push(array[i].successfulActionCount.scent);

    }
    json1.push(innerJson4);
    console.log(innerJson4);
    for(i = 0; i< array.length; i++) {
        innerJson5.push(array[i].successfulActionCount.timer);
    }
    json1.push(innerJson5);
    console.log(innerJson5);
    for(i = 0; i< array.length; i++) {
        innerJson6.push(array[i].successfulActionCount.harvest);
    }
    json1.push(innerJson6);
    console.log(innerJson6);
    for(i = 0; i< array.length; i++) {
        innerJson7.push(array[i].successfulActionCount.give);
    }
    json1.push(innerJson7);
    console.log(innerJson7);
    for(i = 0; i< array.length; i++) {
        innerJson8.push(array[i].successfulActionCount.take);
    }
    json1.push(innerJson8);
    console.log(innerJson8);
    for(i = 0; i< array.length; i++) {
        innerJson9.push(array[i].successfulActionCount.work);
    }
    json1.push(innerJson9);
    console.log(innerJson9);
    for(i = 0; i< array.length; i++) {
        innerJson10.push(array[i].successfulActionCount.cultivate);
    }
    json1.push(innerJson10);
    console.log(innerJson10);
    for(i = 0; i< array.length; i++) {
        innerJson11.push(array[i].successfulActionCount.build);
    }
    json1.push(innerJson11);
    console.log(innerJson11);
    for(i = 0; i< array.length; i++) {
        innerJson12.push(array[i].successfulActionCount.raise);
    }
    json1.push(innerJson12);
    console.log(innerJson12);
    for(i = 0; i< array.length; i++) {
        innerJson13.push(array[i].successfulActionCount.lower);
    }
    json1.push(innerJson13);
    console.log(innerJson13);
    for(i = 0; i< array.length; i++) {

        innerJson14.push(array[i].successfulActionCount.reproduce);

    }
    json1.push(innerJson14);
    console.log(innerJson14);
    console.log(json1);


$(function () {
  Highcharts.chart('genActions', {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Action Percentages per Simulation'
      },
      xAxis: {
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
          name: 'NoOp',
          data: json1[0]
      },{
          name: 'Movement',
          data: json1[1]
      },{
          name: 'Memory',
          data: json1[2]
      },{
          name: 'Scent',
          data: json1[3]
      },{
          name: 'Timer',
          data: json1[4]
      },{
          name: 'Harvest',
          data: json1[5]
      },{
          name: 'Give',
          data: json1[6]
      },{
          name: 'Take',
          data: json1[7]
      },{
          name: 'Work',
          data: json1[8]
      },{
          name: 'Cultivate',
          data: json1[9]
      },{
          name: 'Build',
          data: json1[10]
      },{
          name: 'Raise',
          data: json1[11]
      },{
          name: 'Lower',
          data: json1[12]
      },{
          name: 'Reproduce',
          data: json1[13]
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
