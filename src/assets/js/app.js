$(document).foundation();

// home page hero button scroll interaction
$(document).ready(function() {
  $("#js-trigger-work").on('click', function() {
    $('html, body').animate({
      scrollTop: $( $("#js-marker-work")).offset().top
    }, 1200);
  });

  $('.testimonial-slider').slick();

  $('.outcome-screenshot').on('click', function() {
    var $modal = $('#outcome-screenshot-modal');
    $modal.html('<center><img src="' + $(this).find('img').attr('src') +'" alt="" /></center> <button class="close-button" data-close aria-label="Close modal" type="button"> <span aria-hidden="true">&times;</span> </button> ').foundation('open');
  });
  $('.outcome-link').on('click', function() {
    $('.outcome-screenshot')[0].click();
  });

});