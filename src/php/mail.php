<?php
	$userName = $_POST['user_name'];
	$userSurname = $_POST['user_surname'];
	$userPhone = $_POST['user_phone'];
	$userEmail = $_POST['user_email'];


	$email_from = 'yourname@yourwebsite.com';

	$email_subject = "Registration information from form";

	$email_body = "You have received a new message from the user: $userName.\n".
	    "His surname: $userSurname". 
	    "\nHis phone: $userPhone".
	    "\nHis email: $userEmail\n".

	$to = "yourname@yourwebsite.com";

  	$headers = "From: $email_from \r\n";

  	$headers .= "Reply-To: $userEmail \r\n";

  	mail($to,$email_subject,$email_body,$headers);

?>
