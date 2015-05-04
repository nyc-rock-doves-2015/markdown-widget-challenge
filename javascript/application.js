$(document).ready(function() {
  $(".input").on("keyup", function() {
    var newText = $(this).val();
    $(".output").html(markdown.toHTML(newText));

  });
})