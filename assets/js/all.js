// -- PC scroll header -- //
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

// -- SP scroll header -- //


// -- Upcoming events slider -- //
$(function(){
    function sliderSetting(){
 
        var width = $(window).width();
 
        if(width <= 768){
            $('.event-boxes').not('.slick-initialized').slick({
                autoplay: false,
                dots: true,
                arrows: false
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

// -- About us slider -- //
$(function(){
    function sliderSetting(){
 
        var width = $(window).width();
 
        if(width <= 768){
            $('.js-tab-display-wrap').not('.slick-initialized').slick({
                autoplay: false,
                dots: true,
                arrows: false
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

// -- 'What kind of sports do we play' area -- //
$(function(){
    $('.js-tab-display').hide();
    $('.display-first').show();
  
    $('.secList').on('click',function(){
      $('.js-tab-display').not($('.'+$(this).attr('id'))).hide();

      $('.'+$(this).attr('id')).show();
    });

    $('.secList').on('click',function(){
        $('.secList').not(this).removeClass('is-current');
        $(this).addClass('is-current');
    });
});

// -- include file --//
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }

  // -- header burger menu -- //
    $(".openbtn1").click(function () {
        $(this).toggleClass('active');
        $("#g-nav").toggleClass('panelactive');
        $(".circle-bg").toggleClass('circleactive');
    });

    $("#g-nav a").click(function () {
        $(".openbtn1").removeClass('active');
        $("#g-nav").removeClass('panelactive');
        $(".circle-bg").removeClass('circleactive');
    });
}