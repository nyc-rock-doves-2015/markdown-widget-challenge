var Widget = function(src, dest) {
   var controller = new Widget.Controller();
   var sourceView = new Widget.SourceView(src, controller);
   controller.destination = new Widget.DestView(dest);
};

Widget.Model = {
  convert: function(textInput) {
    return markdown.toHTML(textInput);
  }
};

Widget.SourceView = function(inputId, controller) {
  this.inputElement = document.getElementById(inputId);
  this.controller = controller;
  this.inputElement.addEventListener('keyup', function(event) {
    this.notifyOfTextChange(this.inputElement.value);
  }.bind(this));
};

Widget.SourceView.prototype.notifyOfTextChange = function(inputText) {
   this.controller.notifyKeyUp(inputText);
};

Widget.DestView = function(viewId) {
   this.element = document.getElementById(viewId);
};

Widget.DestView.prototype.produceOutput = function(html) {
  this.element.innerHTML = html;
};

Widget.Controller = function() {
};

Widget.Controller.prototype.notifyKeyUp = function(inputText) {
  var output = Widget.Model.convert(inputText);
  this.destination.produceOutput(output); 
};

// Setup
document.addEventListener("DOMContentLoaded", function(event) { 
  Widget("source-id", "preview-div");
});