$('.onclick-menu-content').hide();
$('aside').on('click', 'h1 .menu-icon', function(e) {
  e.preventDefault();
  $('.onclick-menu-content').slideToggle('slow');
});

$('.main-top').on('click', function() {
  window.open('https://media.giphy.com/media/96LNxTLGyLO6s/giphy.gif');
});

$('.main-bottom').on('click', function() {
  window.open('https://media.giphy.com/media/CKkYMJ0hEGYz6/giphy.gif');
});