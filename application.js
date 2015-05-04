$( document ).ready(function() {

  $( "#user_input_field" ).keyup(function() {
    var $text = $(event.target)
    var inputText = $text.val()
    $('#markdown_field').html(markdown.toHTML(inputText));
});

});
