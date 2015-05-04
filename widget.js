$(document).ready(function() {
  $('#input').keyup(function(event) {
    var inputHTML = markdown.toHTML($('#input').val());
    console.log(inputHTML);
    // $('#output').text
  })
});
