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
const header = document.querySelector('.sp-js-scrollHeader');
let prevY = window.scrollY; // 前回のスクロール位置を初期化

window.addEventListener('scroll', () => {
  const currentY = window.scrollY; // 現在のスクロール位置を取得
  if (currentY < prevY) { // 上にスクロールしている場合
        $('.sp-js-scrollHeader').removeClass('sp-scroll-hidden'); // sp-scroll-hiddenクラスを削除して表示する
  } else { // 下にスクロールしている場合
  if (currentY > 0) { //Safariなどのバウンススクロール対策
        $('.sp-js-scrollHeader').addClass('sp-scroll-hidden'); // sp-scroll-hiddenクラスを追加して非表示にする
    }
  }
  prevY = currentY; // 前回のスクロール位置を更新
});

$(function () {
    $(window).on('scroll', function () {
        if ($('.mv').height()  < $(this).scrollTop()) {
            $('.sp-js-scrollHeader').addClass('sp-scroll-change-color');
        } else {
            $('.sp-js-scrollHeader').removeClass('sp-scroll-change-color');
        }

        if ($('.mv').height()  < $(this).scrollTop()) {
            $('.openbtn1-span').addClass('span-change-color');
        } else {
            $('.openbtn1-span').removeClass('span-change-color');
        }
    });
});

// -- Title text one by one --//
const CLASSNAME = "-visible";
const TIMEOUT = 1500;
const $target = $(".mv-text-title");

setInterval(() => {
  $target.addClass(CLASSNAME);
  setTimeout(() => {
    $target.removeClass(CLASSNAME);
  }, TIMEOUT);
}, TIMEOUT * 2);

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