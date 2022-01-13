// business logic

// user interface logic
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    const name = $("#name").val();
    const color = $("#color").val();
    const food = $("#food").val();
    const place = $("#place").val();
    const animal = $("#animal").val();

    
  });
});