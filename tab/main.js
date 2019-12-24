(function($) {
	

	$(".tab button").click(function(){
		$(".tab button").removeClass("activelink");
		$(this).addClass("activelink");
		var tagid=$(this).data('tag');
		$(".list").removeClass("active").addClass("hide");
		$("#"+tagid).addClass("active").removeClass("hide");
	});



})(jQuery);