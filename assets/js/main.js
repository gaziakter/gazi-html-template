(function ($) {
  "use strict";

  $(document).ready(function () {
    function toggleNavbarState() {
      if ($(window).scrollTop() > 10) {
        $(".navbar").addClass("scrolled");
      } else {
        $(".navbar").removeClass("scrolled");
      }
    }

    toggleNavbarState(); // Run on page load
    $(window).on("scroll", toggleNavbarState);
  });

  //animation in service section
      AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });

})(jQuery);

