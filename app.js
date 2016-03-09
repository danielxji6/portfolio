console.log('app.js loaded');

$('#fullpage').fullpage({
  sectionsColor: ['#dde9ee', '#7BAABE', '#437489'],
  anchors: ['about-page', 'project-page', 'skill-page'],
  menu: '#menu',
  scrollingSpeed: 1000,
  verticalCentered: false,
  slidesNavigation: true,
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
  }

  $('#phone').click(function functionName() {
    $('#contact-p').text('Give me a call 669-900-3292');
  });

  $p.text(text);
  $p.css('color', 'white');
});
