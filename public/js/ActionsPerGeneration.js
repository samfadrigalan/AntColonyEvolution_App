var url = document.URL + "api/generation/2";
var json = new Array();
var sum = 0;
$.getJSON( url, function( array ) {
  for(i = 0; i< array.length; i++){
    json.push(array[i]);
    json[i] = json[i]  * 100;
  }
  $(function () {
      Highcharts.chart('genActions', {
          chart: {
              type: 'column'
          },
          title: {
              text: 'Monthly Average Rainfall'
          },
          subtitle: {
              text: 'Source: WorldClimate.com'
          },
          xAxis: {
             type: 'category',
             labels: {
                 rotation: -45,
                 style: {
                     fontSize: '13px'
                 }
             }
         },
          yAxis: {
              min: 0,
              title: {
                  text: 'Rainfall (mm)'
              }
          },
          tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                  '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true
          },
          plotOptions: {
              column: {
                  pointPadding: 0.2,
                  borderWidth: 0
              }
          },
          series: [{
              name: 'Actions',
              data: [
                    ['NoOP', json[0] ],
                    ['MoveUP', json[1] ],
                    ['MoveDOWN', json[2] ],
                    ['MoveLEFT', json[3]],
                    ['MoveRIGHT', json[4] ],
                    ['Harvest Food', json[5] ],
                    ['Give Food', json[6] ],
                    ['Take Food', json[7] ],
                    ['Work Tile', json[8] ],
                    ['Cultivate Tile', json[9] ],
                    ['Build Road', json[10] ],
                    ['Raise Height', json[11] ],
                    ['Lower Height', json[12] ],
                    ['Produce Offspring', json[13] ],
                    ['A-Decremnt PDM 1', json[14] ],
                    ['B-Decrement PDM1', json[15] ],
                    ['A-Increment PDM 1', json[16] ],
                    ['B-Increment PDM 1', json[17] ],
                    ['A-Decremnt PDM 2', json[18] ],
                    ['B-Decremnt PDM 2', json[19] ],
                    ['A-Increment PDM 2', json[20] ],
                    ['B-Increment PDM 2', json[21] ],
                    ['A-Decremnt PDM 3', json[22] ],
                    ['B-Decrement PDM 3', json[23] ],
                    ['A-Increment PDM 3', json[24] ],
                    ['B-Increment PDM 3', json[25] ],
                    ['A-Decremnt PDM 4' , json[26] ],
                    ['B-Decremnt PDM 4' , json[27] ],
                    ['A-Increment PDM 4', json[28] ],
                    ['B-Increment PDM 4',  json[29] ] ,
                    ['A-Decremnt PSM 1', json[30] ],
                    ['B-Decrement PSM 1', json[31] ],
                    ['A-Increment PSM 1', json[32] ],
                    ['B-Increment PSM 1', json[33] ],
                    ['A-Decremnt PSM 2', json[34] ],
                    ['B-Decremnt PSM 2', json[35] ],
                    ['A-Increment PSM 2', json[36] ],
                    ['B-Increment PSM 2',  json[37] ] ,
                    ['A-Decremnt PSM 3', json[38] ],
                    ['B-Decrement PSM 3', json[39] ],
                    ['A-Increment PSM 3', json[40] ],
                    ['B-Increment PSM 3', json[41] ],
                    ['A-Decremnt PSM 4', json[42] ],
                    ['B-Decremnt PSM 4', json[43] ],
                    ['A-Increment PSM 4', json[44] ],
                    ['B-Increment PSM 4', json[45] ],
                    ['Vote Increment CSM 1', json[46] ],
                    ['Vote Increment CSM 2', json[47] ],
                    ['Vote Increment CSM 3', json[48] ],
                    ['Vote Increment CSM 4',  json[49] ] ,
                    ['Vote Decrement CSM 1', json[50] ],
                    ['Vote Decrement CSM 2', json[51] ],
                    ['Vote Decrement CSM 3', json[52] ],
                    ['Vote Decrement CSM 4', json[53] ],
                    ['Release Small Scent A', json[54] ],
                    ['Release Large Scent A', json[55] ],
                    ['Release Small Scent B', json[56] ],
                    ['Release Large Scent B', json[57] ],
                    ['Release Small Scent C', json[58] ],
                    ['Release Large Scent C', json[59] ],
                    ['Reset Personal Timer 1', json[60] ],
                    ['Reset Personal Timer 2', json[61] ],
                    [' Vote Reset Colony Timer 1', json[62] ],
                    ['Vote Reset Colony Timer 2', json[63] ]
            ]
           }]
      });
  });

 });
