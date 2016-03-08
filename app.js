console.log('app.js loaded');

$('#fullpage').fullpage({
  sectionsColor: ['whitesmoke', '#4BBFC3', '#7BAABE'],
  anchors: ['about-page', 'project-page', 'skill-page'],
  menu: '#menu',
  scrollingSpeed: 1000,
  verticalCentered: false,
  slidesNavigation: true,
});
