$(function (){

  var $input = $('.input')

  $input.keyup(function () {
    $('.output').html(markdown.toHTML($input.val()));
  });
});