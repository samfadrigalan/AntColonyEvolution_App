function create_fitness_histogram(){

}

function compile_simulation(input){
  var output=[];

  input.forEach(function(i){
    var e = {
      netFood : 0,
      posFood : 0,
      negFood : 0,
      successfulActionCount: [],
      failedActionCount: []
    }
    for(var i = 0; i < 65; i++) {
      e.successfulActionCount.push(0);
      e.failedActionCount.push(0);
    }
    i.members.forEach(function(i) {
      e.netFood += i.netFood;
      e.posFood += i.posFood;
      e.negFood += i.negFood;
      for(var i = 0; i < 65; i++) {
        e.successfulActionCount[i] += i.successfulActionCount[i];
          e.failedActionCount[i] += i.failedActionCount[i];
      }
    });
    output.push(e);
  });
  return e;
}
// • Members : Array of JSON
//   ○ genetic : string (Only present if it has a posFood > 50)
//   ○ netFood : int
//   ○ posFood : uint
//   ○ negFood : uint
//   ○ creationTime : uint
//   ○ deathtime : uint
//   ○ actionCounts : Array of 64 uints (1 for each action)
