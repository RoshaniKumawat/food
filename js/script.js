
/*----------------------navbar-------------------*/
        $(document).ready(function () {
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 10) {
                    $('.main-header').addClass('sticky');
                } else {
                    $('.main-header').removeClass("sticky");
                }
            });
        });


/*---------------------TESTIMONIALS--(slick-slider)------------*/

/*$(document).ready(function () {

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:false,
        arrows:false,
        dots:true,
        autoplaySpeed:2000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                infinite: true,
                slidesToShow: 3,
             slidesToScroll: 3,
             autoplay:false,
                arrows:false,
                dots:true,
                autoplaySpeed:2000,
              }
            },
        ]
      })

    AOS.init({
        duration: 800,
        delay: 200,
    });
});   */






  