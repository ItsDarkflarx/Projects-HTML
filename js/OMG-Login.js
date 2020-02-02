var regEmail, regPassword, regPassword2;
var logEmail, logPassword;

var registerDetails = function() {
	regEmail = document.getElementById('regEm').value;
	regPassword = document.getElementById('regPw').value;
	regPassword2 = document.getElementById('regPw2').value;
	// document.getElementById('loginTest').innerHTML=(regEmail);
	// document.getElementById('pwTest').innerHTML=(regPassword);
	// document.getElementById('pw2Test').innerHTML=(regPassword2);

	if (regEmail == '' || regPassword == '' || regPassword2 == '') {
		alert("No Input!");
	} 
	else if (regPassword != regPassword2 || regPassword2 != regPassword) {
		alert("Wrong Password!");
	} 
	else if (regPassword == regPassword2) {
		alert("Register Successful!");
		// document.getElementById("myForm").submit();
	}
}

var loginDetails = function() {
	logEmail = document.getElementById('logEm').value;
	logPassword = document.getElementById('logPw').value;
	// document.getElementById('loginTest').innerHTML=(logEmail);
	// document.getElementById('pwTest').innerHTML=(logPassword);
	
	if (logEmail == '' || logPassword == '') {
		alert("No Input!");
	} 
	else if (logEmail != regEmail || logPassword != regPassword) {
		alert("Wrong Details!");
	} 
	else if (logEmail == regEmail && logPassword == regPassword) {
		alert("Login Successful!");
	}
}

function showPopup() {
	var popup = document.getElementById('popup');
	popup.classList.add('show');
}

function hidePopup() {
	var popup = document.getElementById('popup');
	popup.classList.remove('show');
}