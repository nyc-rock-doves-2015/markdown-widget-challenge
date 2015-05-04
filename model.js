MarkdownWidget = function(input, preview) {
  this.input = input;
  this.update = function () {
        preview.innerHTML = markdown.toHTML(input.value);
    }
  this.update();
}

MarkdownWidget.prototype.italicize = function() {
  var output = ""
  var count = 0
  for (var i = 0; i < this.input.length; i++) {
    if (this.input[i] != "*") {
      output += this.input[i]
    } else if (count === 0) {
      output += "<i>"
      count += 1
    } else {
      output += "</i>"
    }
  }
  return output;
}

MarkdownWidget.prototype.bold = function() {
  var output = ""
  var count = 0
  for (var i = 0; i < this.input.length; i++) {
    if (this.input[i] != "*") {
      output += this.input[i]
    } else if (count === 0 && this.input[i+1] === "*"){
      output += "<b>"
      count += 1
      i += 1
    } else {
      output += "</b>"
      i += 1
    }
  }
  return output;
}

MarkdownWidget.prototype.parse = function() {
  for (var i = 0; i < this.input.length; i++) {
    if (this.input[i] === "*" && this.input[i+1] != "*") {
      this.italicize();
    } else if (this.input[i] === "*" && this.input[i+1] === "*") {
      this.bold();
    }
  }
}