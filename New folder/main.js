(function($) {
	
	/*$(".heading").click(function(){
		$(".desc").hide();
	});
	$(".heading").click(function(){
		$(".heading").removeClass();
		$(this).next().show(".desc").addClass("p1");

	});*/

		var allPanels = $(".desc").hide();
		$(".heading").click(function(){
			allPanels.slideUp();
			$(".heading").removeClass("active");
			$(this).next().slideDown().addClass("p1");
			$(this).addClass("active");

			//return false;
		});

	

	


})(jQuery);