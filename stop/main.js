(function($) {
	$('.slidedown').click(function(){
		$('.slidedown1').slideDown(5000);
	});
	$('.stop').click(function(){
		$('.slidedown1').stop();
	});

	


})(jQuery);