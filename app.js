console.log('app.js loaded');

$('#fullpage').fullpage({
  sectionsColor: ['#ff8533', '#3399ff', '#33cc33'],
  anchors: ['about-page', 'project-page', 'skill-page'],
  menu: '#menu',
  scrollingSpeed: 1000,
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
