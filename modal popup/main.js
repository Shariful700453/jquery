(function($){

	$(".open-btn").on('click', function(){
		$(".popup").fadeIn(2000);
	});

	$(".close,.cancel").on('click', function(){
		$(".popup").fadeOut(2000);
	});


})(jQuery);