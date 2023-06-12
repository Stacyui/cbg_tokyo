$(function () {
    $(window).on('scroll', function () {
        if ($('.mv').height()  < $(this).scrollTop()) {
            $('.js-scrollHeader').addClass('change-color');
        } else {
            $('.js-scrollHeader').removeClass('change-color');
        }

        if ($('.mv').height()  < $(this).scrollTop()) {
            $('.link-item').addClass('text-color');
        } else {
            $('.link-item').removeClass('text-color');
        }
    });
});

$(".openbtn1").click(function () {
    $(this).toggleClass('active');
});


$(function(){
    function sliderSetting(){
 
        var width = $(window).width();
 
        if(width <= 768){
            $('.event-boxes').not('.slick-initialized').slick({
                autoplay: false,
                dots: true,
                arrows: true
            });
        } else {
            $('.slide.slick-initialized').slick('unslick');
        }
    }
 
    sliderSetting();
 
    $(window).resize( function() {
        sliderSetting();
    });
});
