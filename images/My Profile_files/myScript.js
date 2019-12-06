$(document).ready(function(){
	$('.menu').click(function(){
		$('.navbar-collapse').toggleClass('active');
	});
	$('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').removeClass('active');
  });
});