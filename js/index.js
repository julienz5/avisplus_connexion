$( document ).ready(function() {

	$('#error').hide();
	$("#login-button").click(function(event){

	 	if ($('#pwd').val() == "admin" && $('#email').val() == "admin@avisplus.fr") {
	 		$('#error').hide();
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			$('h1').text("Ravi de vous revoir");
	 	} 
	 	else /*if ($('#pwd').val() != "admin")*/{
	 		$('#error').fadeOut();
	 		$('#error').fadeIn();
	 		event.preventDefault();
	 		console.log("ko");
	 	}

	});

	$("#email").keyup(function(){
		$('#error').fadeOut();
		 var email = $("#email").val();
		 var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		 if (!filter.test(email) && email.length > 0) {
		   //alert('Please provide a valid email address');
		   $("#error_email").text(email+" is not a valid email");
		   email.focus;
		   //return false;
		} else {
		    $("#error_email").text("");
		}
 	});

 	$("#pwd").keyup(function(){
		$('#error').fadeOut();
 	});

});