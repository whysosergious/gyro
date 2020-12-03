window.onload = function start() {

	var status = document.getElementById('status-text');

	// elements
	var hero = document.getElementById('hero');
	var container = document.getElementById('container');
	var leftWall = document.getElementById('left-wall');
	var rightWall = document.getElementById('right-wall');


	var obsticles = document.querySelectorAll('.obscticle');

	// position and container
	var heroHeight = hero.offsetHeight;
	var heroWidth = hero.offsetWidth;

	var containerHeight = container.offsetHeight - heroHeight * 2;
	var containerWidth = container.offsetWidth - heroWidth * 2;
	var containerTop = -(containerHeight / 2);
	var containerBottom = containerHeight / 2;
	var containerRight = -(containerWidth / 2);
	var containerLeft = containerWidth / 2;


	for (var i = 0; i < obsticles.length; i++) {

	}


	var heroY = 0;
	var heroX = 0;
	var heroTurn = 0;

	var tiltY = 0;
	var tiltX = 0;
	var rotate = 0;

	function handleOrientation(event) {
		var moveY = (event.beta - 30) - tiltY / 1.2;
		var moveX = event.gamma - tiltX / 1.2;
		var turn = event.alpha;

		tiltY = moveY;
		tiltX = moveX;
		rotate = turn;

		if (heroY >= containerTop && moveY < 0) {
			heroY += moveY;
		} else if (heroY <= containerBottom && moveY > 0) {
			heroY += moveY;
		}

		if (heroX >= containerRight && moveX < 0) {
			heroX += moveX;
		} else if (heroX <= containerLeft && moveX > 0) {
			heroX += moveX;
		}

		// if (turn > 180 && turn < 330) {
			// heroTurn += 2;
		// } else if (turn < 180 && turn > 30) {
			// heroTurn -= 2;
		// }


		leftWall.style.transform = 'scale(' + (1 + Math.floor(moveX) / 10) + ', 1)';
		rightWall.style.transform = 'scale(' + (1 - Math.floor(moveX) / 10) + ', 1)';



		hero.style.transform = 'translate3d(' + Math.floor(heroX) + 'px,' + Math.floor(heroY) + 'px, 0) rotateY(' + (moveX * -3) + 'deg)' + 'rotateX(' + (moveY * 3) + 'deg)';

		// developer ****
		var orientValues = 'heroY: ' + Math.floor(heroY) +
			'<br> heroX: ' + Math.floor(heroX) +
			'<br> tiltY: ' + Math.floor(moveY) +
			'<br> tiltX: ' + (1 + Math.floor(moveX) / 10);

		status.innerHTML = orientValues;


	}

	function backToCenter() {

	}

	window.addEventListener('deviceorientation', handleOrientation);
	console.log(window.DeviceOrientationEvent);

}