(function($) {
	$('button').click(function(){
		$('.div1').fadeIn();
		$('.div2').fadeIn("slow");
		$('.div3').fadeIn(4000);
	});

	$('.btn2').click(function(){
		$('.div4').fadeOut();
		$('.div5').fadeOut("slow");
		$('.div6').fadeOut(4000);
	});

	$('.btn3').click(function(){
		$('.div7').fadeToggle();
		$('.div8').fadeToggle("slow");
		$('.div9').fadeToggle(4000);
	});
	




})(jQuery);