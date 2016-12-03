/**
 * Created by samanthafadrigalan on 12/2/16.
 */
var Highcharts = require('highcharts');

// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);

// Create the chart
Highcharts.chart('container', { /*Highcharts options*/ });