$(function(){
	$('.invest-item').filter('.simple-item').on('mouseenter', function(e){
		$(this).addClass('simple-item-hover');
	}).on('mouseleave', function(e){
		$(this).removeClass('simple-item-hover');
	});

})