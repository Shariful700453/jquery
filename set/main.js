(function($) {
	$('.btn1').click(function(){
		$('.test1').text('hello mr. sumon');
	});

	$('.btn2').click(function(){
		$('.test2').html('<h1>hello mr. sumon</h1>');
	});

	$('.btn3').click(function(){
		$('.test3').val('sumon');
	});

	$(".btn4").click(function(){
		$(".test4").attr("href", "www.https://dhakacoders.com");
	});




})(jQuery);