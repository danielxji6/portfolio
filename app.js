console.log('app.js loaded');

$('#fullpage').fullpage({
  sectionsColor: ['#ff8533', '#3399ff', '#33cc33'],
  anchors: ['about-page', 'project-page', 'skill-page'],
  menu: '#menu',
  scrollingSpeed: 1000,
  slidesNavigation: true,
  verticalCentered: false,

  afterLoad: function(anchorLink, index) {
    if (index == 1) {
      $('#to-top').fadeOut();
    }
    if (index == 2 || index == 3) {
      console.log('hs');
      $('#to-top').fadeIn();
    }
  }
});

var offset = 300,
  $back_to_top = $('#to-top');

//hide or show the "back to top" link
$(window).scroll(function() {
  if ($(this).scrollTop() > offset) {
    $back_to_top.addClass('cd-is-visible');
  } else {
    $back_to_top.removeClass('cd-is-visible cd-fade-out');
  }
});

$('.icon').hover(function() {
  $p = $('#contact-p');
  var text = '';
  switch ($(this).attr('alt')) {
    case 'phone':
      text = 'Give me a call 669-900-3292';
      break;
    case 'email':
      text = 'Send me a email';
      break;
    case 'github':
      text = 'Checkout my Github';
      break;
    case 'linkedin':
      text = 'Find me on LinkedIn';
      break;
    case 'resume':
      text = 'See my resume';
      break;
  }

  $('#phone').click(function functionName() {
    $('#contact-p').text('Give me a call 669-900-3292');
  });

  $p.text(text);
  $p.css('color', 'white');
});
