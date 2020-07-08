 // HERE IS THE EVENT LISTENER WAITING FOR CLICK TO EXECUTE FUNCTION
$(function() {
    $(".change-devour").on("click", function(event) {
      event.preventDefault();
      const id = $(this).data("id");
      const newDevour = {
        devoured: 1
      };
 // THE API PUT REQUEST.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevour
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          location.reload();
        }
      );
    });
 // EVENT LISTENER WAITING FOR SUBMISSION 
  $(".create-form").on("submit", function(event) {
      event.preventDefault();
 // GETTING NEW BURGER SUBMISSION VARIABLE VALUE INPUT THEN TRIMMING WHITE SPACE.  
      let newBurger = {
        burger_name: $("#bu").val().trim(),
        devoured:0
      };
 // SENDING POST REQUEST TO HAVE NEW BURGER GENERATED. 
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(() => location.reload());
    });
  })