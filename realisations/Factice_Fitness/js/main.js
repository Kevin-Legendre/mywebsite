$( document ).ready(function() {
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
        let burgerButton = $('.navbar-toggler')
        if (burgerButton.hasClass('active')) {
          burgerButton.removeClass('active')
        }
      });
  
      $('#burger-icon').on('click', function () {
        if ($('#burger-icon').hasClass('collapsed')) {
          $('#burger-icon').addClass('active');
        } else {
          $('#burger-icon').removeClass('active');
        }
      });


}) 