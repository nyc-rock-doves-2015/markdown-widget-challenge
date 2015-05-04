var $ = function (id) { return document.getElementById(id); };
$("source").oninput = function() {
  new MarkdownWidget($("source"), $("preview"));
};