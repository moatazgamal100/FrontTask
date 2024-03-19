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
  $(window).scroll(function () {
    let windowscroll = $(Window).scrollTop();

    
    if (windowscroll >= 600) {
      console.log("hello");
      $(".img-front").css('animation' , 'img 2s forwards');
      $(".img-back").css('animation' , 'imgg 2s forwards');
      $(".side-div").css('animation' , 'side 2s forwards');
      $(".right-side").css('animation' , 'rightside 2s forwards');
    }
    else{
      $(".img-front").css('animation' , 'img-back 2s forwards');
      $(".img-back").css('animation' , 'imgg-back 2s forwards');
      $(".side-div").css('animation' , 'side-back 2s forwards');
      $(".right-side").css('animation' , 'rightside-back 2s forwards');
    }
  });
});