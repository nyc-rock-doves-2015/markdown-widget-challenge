MarkdownWidget = {};

MarkdownWidget.Controller = function(conversionFunction) {
  this.conversionFunction = conversionFunction;
  console.log('i was created');
}

MarkdownWidget.Controller.prototype = {
  notifyOfTextChange: function(newText) {
    this.previewView.draw(marked(newText))
  }
}

MarkdownWidget.Controller.prototype.addPreviewView = function(newView) {
  this.previewView = newView
}

MarkdownWidget.SourceView = function(selector, notifiedCollaborator) {
  this.selector = $(selector);
  this.selector.on('keyup', function(event) {
    notifiedCollaborator.notifyOfTextChange($(event.target).val());
  })
}

MarkdownWidget.PreviewView = function(selector) {
  this.selector = $(selector);
};

MarkdownWidget.PreviewView.prototype = {
  draw: function(newText) {
    this.selector.html(newText)
  }
}

MarkdownWidget.create = function(sourceSelector, previewSelector) {
  var c = new MarkdownWidget.Controller(marked);
  var sourceView = new MarkdownWidget.SourceView(sourceSelector, c);
  c.addPreviewView(new MarkdownWidget.PreviewView(previewSelector))
}

$(function() {
  MarkdownWidget.create("#source", "#display");
})
