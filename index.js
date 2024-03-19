$(document).ready(function () {
 
  $(".owl-carousel").owlCarousel({
    items: 4,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 2000,
    loop: true,
    nav: false,
    dots: true,
    dotsClass: "owl-dots-custom",
    dotsEach: true,
    dotsData: true,
  });
  $(".owl-dot").text("");
  
  
});

$(window).scroll(function () {
  
});


let lastScrollTop = 0;

$(window).scroll(function() {
    let currentScroll = $(this).scrollTop();

    let windowscroll = $(Window).scrollTop();
    if (currentScroll > lastScrollTop) {

      if (windowscroll >= 600) {
        $(".img-front").css('animation' , 'img-finish 2s forwards');
        $(".img-back").css('animation' , 'imgg-finish 2s forwards');
        $(".right-side").css('animation' , 'rightside-finish 2s forwards');
        $(".side-div").css('animation' , 'side-finish 2s forwards');
      }
      else if (windowscroll >= 400) {
        $(".img-front").css('animation' , 'img 2s forwards');
        $(".img-back").css('animation' , 'imgg 2s forwards');
        $(".right-side").css('animation' , 'rightside 2s forwards');
        $(".side-div").css('animation' , 'side 2s forwards');
      }
      
      console.log("Scrolling down");
    } else {
      // User is scrolling up
      if (windowscroll <= 400) {
        $(".img-front").css('animation' , 'imgback 2s forwards');
        $(".img-back").css('animation' , 'imgg-back 2s forwards');
        $(".side-div").css('animation' , 'side-back 2s forwards');
        $(".right-side").css('animation' , 'rightside-back 2s forwards');
        
      }
      else if (windowscroll <= 600) {
        $(".img-front").css('animation', 'img-finishback 2s forwards');
        $(".img-back").css('animation' , 'imggfinish-back 2s forwards');
        $(".side-div").css('animation' , 'side-finishback 2s forwards');
        $(".right-side").css('animation' , 'rightside-finishback 2s forwards');
      }
      
        console.log("Scrolling up");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
