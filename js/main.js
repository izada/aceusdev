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
        slidesToShow: 6,
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


  // counter js
  
 $(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});