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

$(function(){
    function displayTab () {
        const elems = {
          tab_wrap: document.getElementsByClassName('js-tab-wrap'),
          tab_display_wrap: document.getElementsByClassName('js-tab-display-wrap')
        }
        let selection_state_elem = "floorball";
    
        var paramStr = location.search;
        var paramArray = [];
    
        // setUpUrlAnkerLink ();
    
        paramHandle ();
    
        tabSelection ();
    
        if (slide2 !== undefined) {
          slide2.slick('unslick');
        }
        setSlide2();
        if (slide5 !== undefined) {
          slide5.slick('unslick');
        }
        setSlide5()
    
        tabEvent ();
    
        function tabSelection () {
          Array.prototype.forEach.call(elems.tab_wrap, function (elem) {
            const elem_dress_tabs = elem.getElementsByClassName('js-tab');
            Array.prototype.forEach.call(elem_dress_tabs, function (elem) {
              elem.classList.remove('is-active');
              if ( selection_state_elem === elem.dataset.tabRelation ) {
                elem.classList.add('is-active');
              }
            });
          });
          Array.prototype.forEach.call(elems.tab_display_wrap, function (elem) {
            const elem_tab_display = elem.getElementsByClassName('js-tab-display');
            Array.prototype.forEach.call(elem_tab_display, function (elem) {
              elem.classList.remove('is-show');
              if ( selection_state_elem === elem.dataset.tabRelation ) {
                elem.classList.add('is-show');
              }
            });
          });
        }
    
        function tabEvent () {
          Array.prototype.forEach.call(elems.tab_wrap, function (elem) {
            const elem_dress_tabs = elem.getElementsByClassName('js-tab');
            Array.prototype.forEach.call(elem_dress_tabs, function (elem) {
              elem.addEventListener('click', function () {
                selection_state_elem = elem.dataset.tabRelation;
                tabSelection (elems);
    
                if ( selection_state_elem === 'volleyball') {
                  if (slide2 !== undefined) {
                    $('.slide_dress.js-slide_volleyball').slick('unslick');
                  }
                  setSlide2();
                  $('.slide_dress.js-slide_volleyball').slick('setPosition');
                 } else if ( selection_state_elem === 'dresslift' ) {
                  if (slide5 !== undefined) {
                    $('.slide_dress.js-slide_dresslift').slick('unslick');
                  }
                  setSlide5()
                  $('.slide_dress.js-slide_dresslift').slick('setPosition');
                 }
              });
            });
          });
        }
    
        function paramHandle () {
          getParam();
          if ( paramStr && paramArray.tab ) {
            selection_state_elem = paramArray.tab;
          }
        }
    
        function getParam (name) {
          if (paramStr) {
            var temp = paramStr.replace('?', '');
            var temp1 = temp.split('&');
            Array.prototype.forEach.call(temp1, function (item) {
              var temp2 = item.split('=');
              paramArray[temp2[0]] = temp2[1];
            });
          }
        };
        function setParam () {
          var paramStr = '?';
    
          var paramKeys = Object.keys(paramArray);
          if (paramKeys.length) {
            Array.prototype.forEach.call(paramKeys, function (item, index) {
              if (index !== 0) {
                paramStr += '&';
              }
              paramStr += item + '=' + paramArray[item];
            });
            history.replaceState({}, '', paramStr);
          }
        };
    
        function setUpUrlAnkerLink () {
          var headH = $('header').outerHeight();
          var animeSpeed = 500;
          var urlHash = location.hash;
    
          // header要素の高さがスクロール後、変わる場合は
          // 下記にて各画面幅毎に指定してください。
          // if (deviceFlag === 'pc') {
          //   headH = 100;
          // } else {
          //   headH = 50;
          // }
    
          window.addEventListener('resize', function () {
            headH = $('header').outerHeight();
          });
    
          if (urlHash) {
            $('body,html').scrollTop(0);
            var target = $(urlHash);
            if (target.length) {
              var position = target.offset().top - headH;
              $('body,html').stop().animate(
                {
                  scrollTop: position,
                },
                animeSpeed,
                'swing'
              );
            }
          }
        };
    }
});
