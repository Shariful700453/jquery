(function () {


	$("#form").on('submit', function(e){
		e.preventDefault();
		var firstname = $('input[name="fname"]').val();
		if(firstname.length === 0){
			$('input[name="fname"]').parent().addClass('haserror');
		}  
		var lastname = $('input[name="lname"]').val();
		if(lastname.length === 0){
			$('input[name="lname"]').parent().addClass('haserror');
		}
		var email = $('input[name="email"]').val();
		if(email.length === 0){
			$('input[name="email"]').parent().addClass('haserror');
		}
		var password = $('input[name="password"]').val();
		if(password.length === 0){
			$('input[name="password"]').parent().addClass('haserror');
		}
	});

	
	

})(jQuery);