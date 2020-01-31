var timer = null;
var countdownNumber = 10;

var changeState = function(state) {
	document.body.className = 'body-state' + state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;

	if (state == 2) {
		timer = setInterval(function() {
			countdownNumber = countdownNumber -1;
			document.getElementById('countdown').innerHTML = countdownNumber;

			if (countdownNumber < 8 && countdownNumber >= 5 ) {
				document.getElementById('nervous').className = 'nervous show';
			} else {
				document.getElementById('nervous').className = 'nervous';
			}

			if (countdownNumber < 5 && countdownNumber >= 1 ) {
				document.getElementById('cant-wait').className = 'cant-wait show';
			} else {
				document.getElementById('cant-wait').className = 'cant-wait';
			}

			if (countdownNumber <= 0) {
				changeState(3);
			}
		}, 700)
	} else if (state == 3) {
		var success = setTimeout(function() {
			var randomNumber= Math.round(Math.random()*10)

			if (randomNumber > 9) {
				changeState(4);
			} else {
				changeState(5);
			}
		}, 2000);
	}
}
