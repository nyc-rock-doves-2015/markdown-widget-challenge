var $ = function (id) { return document.getElementById(id); };
document.getElementById("source").oninput = function() {
  new MarkdownWidget($("source"), $("preview-div"))
  };