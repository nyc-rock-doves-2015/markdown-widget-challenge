// $( document ).ready(function() {
//   $("#text-input").keyup(function() {
//     var contents = $("#source-id").val();
//    $("#preview").html(contents);
//  });
// });

$( document ).ready(function() {
function Editor(input, preview) {
  this.update = function () {
    preview.innerHTML = markdown.toHTML(input.value);
  };
  input.editor = this;
  this.update();
}
var $ = function (id) { return document.getElementById(id); };
new Editor($("text-input"), $("preview"));
});