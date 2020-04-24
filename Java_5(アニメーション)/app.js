$(function(){
	$('.box1').slideDown(4000, function() {
	  $('.box1').css({
	  	'background-color': '#0000FF',
	  	'width': '200px',
	  	'height': '100px'
	  }).slideUp(4000);
  });
});

$(function(){
	$('.box2').fadeIn(4000, function() {
	  $('.box2').css({
	  	'background-color': '#FF0000',
	  	'width': '200px',
	  	'height': '100px'
	  }).fadeOut(4000);
  });
});