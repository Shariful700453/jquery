(function($) {
	$('.btn1').click(function(){
		$('p').hide(function(){
			alert("this paragraph is hide")
		});
	});

	$(".btn2").click(function(){
		$(".panel").hide(2000);
		alert("this paragraph is hide");
	});

	


})(jQuery);