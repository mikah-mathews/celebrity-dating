// //business logic
var fluttershy = 0;
var krumm = 0;
var spongebob = 0;

function addTo(input) {
  if (input === 1){
    spongebob += 1;
  } else if(input === 2) {
    krumm += 1;
  } else if(input === 3) {
    fluttershy += 1
  } else {
    return "something went wrong"
  }
}

function compare(person1, person2, person3) {
  $("#spongebob").hide();
  $("#krumm").hide();
  $("#fluttershy").hide();
  if (person1 > person2 && person1 > person3) {
    $("#spongebob").show();
  } else if (person2 > person1 && person2 > person3) {
    $("#krumm").show();
  } else if (person3 > person1 && person3 > person2) {
    $("#fluttershy").show();
  } else {
    $("#loser").show();
  }
}

// look into operator that returns highest value

// user interface logic
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    const name = $("#name").val();
    addTo(parseInt($("#food").val()));
    addTo(parseInt($("#place").val()));
    addTo(parseInt($("#color").val()));

    compare(spongebob, krumm, fluttershy);
    fluttershy = 0;
    krumm = 0;
    spongebob = 0;
  });
});