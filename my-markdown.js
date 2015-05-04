$(function() {

  $('.input-textarea').on('keyup', function(event) {

    var $target = $(event.target)
    var inputText = $target.val()

    $('.output-markdown').html(markdown.toHTML(inputText));

  })

})