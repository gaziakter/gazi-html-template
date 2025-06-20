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


    //Portfolio Section Filter
    $('.filter-btn').on('click', function () {
      var filterValue = $(this).attr('data-filter');

      $('.filter-btn').removeClass('active');
      $(this).addClass('active');

      $('.portfolio-item').each(function () {
        var itemCategory = $(this).data('category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          $(this).fadeIn(400);
        } else {
          $(this).fadeOut(400);
        }
      });
    });

})(jQuery);

