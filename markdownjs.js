$(document).ready(function() {
  $(".mytext").keyup(function() {
    var text = $(".mytext").val()
    $("#output").html(markdown.toHTML( text ))
  })
})