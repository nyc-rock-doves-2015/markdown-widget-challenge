$(document).ready(function() {
  $('#input').keyup(function(event) {
    $('#output').text($('#input').val());
  })
});
