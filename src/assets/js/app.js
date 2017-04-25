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

  $('.testimonial-slider').slick({
    'dots': true,
  });

  $('.outcome-screenshot').on('click', function() {
    var $modal = $('#outcome-screenshot-modal');
    $($modal).html('<div class="wrap-marvel-embed"></div> <button class="close-button" data-close aria-label="Close modal" type="button"> <span aria-hidden="true">&times;</span> </button>');
    // $($modal).html('<div class="wrap-marvel-embed"><iframe src=“https://marvelapp.com/7ci2d69?emb=1” width=“2880" height=“6346” allowTransparency=“true” frameborder=“0”></iframe></div>');
    $('<iframe>', {
       src: 'https://marvelapp.com/1367dd7?emb=1',
       // src: 'https://marvelapp.com/7ci2d69?emb=1',
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


  // prototype particles below

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 160,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#fa7252"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

});



