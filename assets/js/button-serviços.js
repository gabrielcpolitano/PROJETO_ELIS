!(function($) {
  "use strict";

  // Existing code...

  // Handle click on the 'Go to Services' button
  $(document).ready(function() {
    $('#scroll-to-services').on('click', function(e) {
      e.preventDefault(); // Prevent the default action

      // Trigger click on the Serviços navigation link
      $('#nav-services').trigger('click');

      // Simulate the section display logic
      var target = $('#services');
      if (target.length) {
        if ($('#header').hasClass('header-top')) {
          $("section").removeClass('section-show');
          target.addClass('section-show');
        } else {
          $('#header').addClass('header-top');
          setTimeout(function() {
            $("section").removeClass('section-show');
            target.addClass('section-show');
          }, 350);
        }
      }

      // Update the navigation menu to reflect the active item
      $('.nav-menu .active, .mobile-nav .active').removeClass('active');
      $('#nav-services').closest('li').addClass('active');
    });
  });

})(jQuery);