$(document).foundation();

// home page hero button scroll interaction
$(document).ready(function() {
  $("#js-trigger-view-work").on('click', function() {
    $('html, body').animate({
      scrollTop: $( $("#js-marker-work")).offset().top
    }, 1200);
  });
  $("#js-trigger-project-inquiry").on('click', function() {
    $('html, body').animate({
      scrollTop: $( $("#js-marker-project-inquiry")).offset().top
    }, 1200);
  });

  $('.testimonial-slider').slick();

  $('.outcome-screenshot').on('click', function() {
    var $modal = $('#outcome-screenshot-modal');
    $($modal).html('<div class="wrap-marvel-embed"></div> <button class="close-button" data-close aria-label="Close modal" type="button"> <span aria-hidden="true">&times;</span> </button>');
    // $($modal).html('<div class="wrap-marvel-embed"><iframe src=“https://marvelapp.com/7ci2d69?emb=1” width=“2880" height=“6346” allowTransparency=“true” frameborder=“0”></iframe></div>');
    $('<iframe>', {
       src: 'https://marvelapp.com/7ci2d69?emb=1',
       id:  'myFrame',
       class: 'marvel-iframe',
       frameborder: 0,
       scrolling: 'no',
       }).appendTo($('.wrap-marvel-embed'));
    // $modal.html('<center><img src="' + $(this).find('img').attr('src') +'" alt="" /></center> <button class="close-button" data-close aria-label="Close modal" type="button"> <span aria-hidden="true">&times;</span> </button> ').foundation('open');
    // $modal.html('<iframe src=“https://marvelapp.com/7ci2d69?emb=1” width=“2880" height=“6346” allowTransparency=“true” frameborder=“0”></iframe>').foundation('open');
    $modal.foundation('open');
  });
  $('.outcome-link').on('click', function() {
    $('.outcome-screenshot')[0].click();
  });

});

