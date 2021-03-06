function create_fitness_histogram(){

}

function compile_simulation(input){
  console.log(input.length);
  var output=[];

  input.forEach(function(m){
    var e = {
      netFood : 0,
      posFood : 0,
      negFood : 0,
      successfulActionCount: [],
      failedActionCount: [],
      actionCount: []
    }
    for(var j = 0; j < 65; j++) {
      e.successfulActionCount.push(0);
      e.failedActionCount.push(0);
      e.actionCount.push(0);
    }
      m.members.forEach(function(t) {
        e.netFood += t.netFood;
        e.posFood += t.posFood;
        e.negFood += t.negFood;
        for(var j = 0; j < 65; j++) {
          e.successfulActionCount[j] += t.successfulActionCount[j];
          e.failedActionCount[j] += t.failedActionCount[j];
          e.actionCount[j] += t.successfulActionCount[j] + t.failedActionCount[j];
        }
      });


    //console.log(e);
    output.push(e);
  });
  return output;
}

function getMax(data) {
  var maxVal = 0;
  data.forEach(function(e) {
    if(e.posFood > maxVal) {
      maxVal = e.posFood;
    }
  });
  return maxVal;
}

function produceHistogram(data) {
  var maxVal = getMax(data);

  console.log("Max: " + maxVal);

  var binSize = maxVal / 99;
  var histo = [];
  for(var i = 0; i < 100; i++) {
    histo.push({
      "bin" : binSize * i,
      "count" : 0,
      "failed_actions" : {
        "noop" : 0,
        "movement" : 0,
        "memory" : 0,
        "scent" : 0,
        "timer" : 0,
        "harvest" : 0,
        "give" : 0,
        "take" : 0,
        "work" : 0,
        "cultivate" : 0,
        "build" : 0,
        "raise" : 0,
        "lower" : 0,
        "reproduce" : 0
      },
      "successfulActionCount" : {
        "noop" : 0,
        "movement" : 0,
        "memory" : 0,
        "scent" : 0,
        "timer" : 0,
        "harvest" : 0,
        "give" : 0,
        "take" : 0,
        "work" : 0,
        "cultivate" : 0,
        "build" : 0,
        "raise" : 0,
        "lower" : 0,
        "reproduce" : 0
      },
      "total_actions" : { }
    });
  }

  //console.log(histo);

  data.forEach(function(m) {
    if(m.posFood == 0) {
      return;
    }
    //console.log("F: " + m.posFood + " I: " + Math.trunc(m.posFood/binSize));
    var e = histo[Math.trunc(m.posFood/binSize)];
    //console.log(e);
    e.count++;
    e.successfulActionCount["noop"] += m.successfulActionCount[0];
    e.successfulActionCount["harvest"] += m.successfulActionCount[5];
    e.successfulActionCount["give"] += m.successfulActionCount[6];
    e.successfulActionCount["take"] += m.successfulActionCount[7];
    e.successfulActionCount["work"] += m.successfulActionCount[8];
    e.successfulActionCount["cultivate"] += m.successfulActionCount[9];
    e.successfulActionCount["build"] += m.successfulActionCount[10];
    e.successfulActionCount["raise"] += m.successfulActionCount[11];
    e.successfulActionCount["lower"] += m.successfulActionCount[12];
    e.successfulActionCount["reproduce"] += m.successfulActionCount[13];
    for(var i = 1; i < 5; i++) {
      e.successfulActionCount["movement"] += m.successfulActionCount[i];
    }
    for(var i = 1; i < 5; i++) {
      e.successfulActionCount["memory"] += m.successfulActionCount[i];
    }
    for(var i = 1; i < 5; i++) {
      e.successfulActionCount["movement"] += m.successfulActionCount[i];
    }
  });

  return histo;

}

// • Members : Array of JSON
//   ○ genetic : string (Only present if it has a posFood > 50)
//   ○ netFood : int
//   ○ posFood : uint
//   ○ negFood : uint
//   ○ creationTime : uint
//   ○ deathtime : uint
//   ○ actionCounts : Array of 64 uints (1 for each action)


module.exports = {
  compile_simulation: compile_simulation,
  produceHistogram: produceHistogram
};