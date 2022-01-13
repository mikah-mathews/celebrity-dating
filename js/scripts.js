// business logic
var fluttershy = 0;
var krumm = 0;
var sprongebob = 0;

function addTo(input) {
  if(input === 1){
    spongebob = +1;
  } else if(input === 2) {
    krumm = +1;
  } else if(input === 3) {
    fluttershy = +1
  } else {
    return "something went wrong"
  }
}


// user interface logic
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    const name = $("#name").val();
    const color = pareseInt($("#color").val());
    const food = pareseInt($("#food").val());
    const place = pareseInt($("#place").val());
    const animal = pareseInt($("#animal").val());

    
  });
});