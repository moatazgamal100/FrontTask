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
    let sectionoffset1 = $("#sccroll").offset().top;
    let vediooffset = $("#vedio").offset().top;
    $(window).scroll(function () {
      let windowscroll = $(Window).scrollTop();
      let newHeight = windowscroll * 0.1 + 30;
      let newtop = -newHeight * 0.125;
      let newtopback = -newHeight * 0.25 + 50;

      $(".img-front").css({
        height: newHeight + "vh",
        top: newtop + "%",
      });
      if (windowscroll >= sectionoffset1) {
        $(".img-back").css({
          top: newtopback + "%",
        });
        }
        console.log(windowscroll);
      if (windowscroll >= 800) {
        $(".img-front").css({
            height: 85 + "vh",
            top: -15 + "%",
          });
      }
    });
  });
