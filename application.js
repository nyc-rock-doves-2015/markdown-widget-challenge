$(document).ready(function(){

  $('#source-id').on('keyup', function(event){
    mdContent = $(this).val();
    htmlContent = markdown.toHTML(mdContent);
    $('#preview-div').html(htmlContent);
  });

});