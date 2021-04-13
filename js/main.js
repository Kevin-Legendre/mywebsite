$(function () {
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
  

  const ratio = .1;

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }

  const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > ratio) {
        entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target)
      }
    })
    console.log('handle')
  }

  const observer = new IntersectionObserver(handleIntersect, options)
  document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r)
  })
  
})
