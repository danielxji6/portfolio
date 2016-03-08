console.log('app.js loaded');

$('#fullpage').fullpage({
  sectionsColor: ['whitesmoke', '#4BBFC3', '#7BAABE'],
  anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
  menu: '#menu',
  scrollingSpeed: 1000,
  verticalCentered: false,
  slidesNavigation: true,
});
