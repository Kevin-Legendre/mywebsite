window.onload = function () {
  document.querySelector('#datePicker').value = new Date().toISOString().substr(0, 10)
}

$(document).ready(function () {

  checkNavBar("scroll")

  function checkNavBar(event) {
    if (event == "scroll") {
      if (window.scrollY > $('#bg-hero').height()) {
        $('#navBar').addClass('nav-bg-color')
      } else if ($('#burger-icon').hasClass('active')) {
        $('#navBar').addClass('nav-bg-color')
      }
      else {
        $('#navBar').removeClass('nav-bg-color')
      }
    }

    if (event == "click") {
      if ($('#burger-icon').hasClass('collapsed')) {
        $('#burger-icon').addClass('active');
        if (window.scrollY < $('#bg-hero').height()) {
          $('#navBar').addClass('nav-bg-color')
        }
      } else {
        $('#burger-icon').removeClass('active');
        if (window.scrollY < $('#bg-hero').height()) {
          $('#navBar').removeClass('nav-bg-color')
        }
      }
    }
  }

  $(window).scroll(function () {
    checkNavBar("scroll")
  });

  $('#burger-icon').on('click', function () {
    checkNavBar("click")
  });

  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
    let burgerButton = $('.navbar-toggler')
    if (burgerButton.hasClass('active')) {
      burgerButton.removeClass('active')
    }
  });


  
})


