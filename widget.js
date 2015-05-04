$(document).ready(function() {
  $('#input').keyup(function(event) {
    var inputHTML = markdown.toHTML($('#input').val());
    console.log(inputHTML);
    document.getElementById("output").innerHTML = inputHTML;
  })
});
