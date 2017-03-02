$(document).foundation();

// home page hero button scroll interaction
$(document).ready(function() {
  $("#js-trigger-work").on('click', function() {
    $('html, body').animate({
      scrollTop: $( $("#js-marker-work")).offset().top
    }, 1200);
  })
});