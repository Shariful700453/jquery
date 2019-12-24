(function() {

	$(".smallimg a").click(function(){
		
		var imgscr= $(this).find('img').attr('src');

		$(".bigimg img").attr("src",imgscr);

		
	});
	


})(jQuery);