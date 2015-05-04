$(function (){
  $('.input').keyup(function (event) {
    $('.output').html($('.input').val());
  });
});