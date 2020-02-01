var registerDetails = function() {
	var regEmail, regPassword, regPassword2;
	regEmail = document.getElementById('regEm').value;
	regPassword = document.getElementById('regPw').value;
	regPassword2 = document.getElementById('regPw2').value;
	// document.getElementById('loginTest').innerHTML=(regEmail);
	// document.getElementById('pwTest').innerHTML=(regPassword);
	// document.getElementById('pw2Test').innerHTML=(regPassword2);
	if (regEmail == '' || regPassword == '' || regPassword2 == '') {
		alert("No Input!");
	} else if (regPassword != regPassword2 || regPassword2 != regPassword) {
		alert("Wrong Password!");
	} else if (regPassword == regPassword2) {
		alert("Register Successful!");
	} 
}

var loginDetails = function() {
	var logEmail, logPassword;
	logEmail = document.getElementById('logEm').value;
	logPassword = document.getElementById('logPw').value;
	// document.getElementById('loginTest').innerHTML=(logEmail);
	// document.getElementById('pwTest').innerHTML=(logPassword);
	
	if (logEmail == '' || logPassword == '') {
		alert("No Input!");
	} 
	// else if (logEmail != regEmail && logPassword != regPassword) {
	// 	alert("Wrong Details!");
	// } else if (logEmail == regEmail && logPassword == regPassword) {} {
	// 	alert("Login Successful!");
	// }
}