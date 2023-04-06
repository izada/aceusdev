// custom js

$(document).ready(function () {
    $("#togglebars").click(function(){
        $(".wrapper").addClass("intro");
        
    });
      $("#closebar,.overlay ").click(function(){
          $(".wrapper").removeClass("intro");
          $(".overlay").removeClass("intro");
    });

});


//  slider js
$(document).ready(function(){
    $('.topclient').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 4
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                slidesToShow: 3
              }
            }
          ]
    });
  });


$(document).ready(function(){
    $('.videoplayer').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        prevArrow:'<div class="left-slide arrow"><i class="fa-solid fa-angle-left"></i></div>',
        nextArrow:'<div class="right-slide arrow"><i class="fa-solid fa-angle-right"></i><div>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                autoplay: true,
                arrows: false,
                autoplaySpeed: 2000,
                infinite: true,
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                slidesToShow: 1
              }
            }
          ]
    });
  });


  // counter js
  
 $(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

// popup slider
$(document).ready(function() {
  $('.magniView').magnificPopup({
		type: 'image',
		closeOnContentClick: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true
		},
    gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
  });
});