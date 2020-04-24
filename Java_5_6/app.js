$(function(){
    $('.box1').on('click',function(){
        $('.box1').addClass('box1-ext');
    });
    $('.box1').mouseout(function(){
    	$('.box1').removeClass('box1-ext');
    });
});

$(function(){
	$('.box2').mouseover(function() {
        $('.box2').addClass('box2-ext');
	});
	$('.box2').mouseout(function(){
    	$('.box2').removeClass('box2-ext');
    });
});