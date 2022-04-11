console.log("Main.JS Loaded");

const myModal = new bootstrap.Modal(document.getElementById("messageModal"), {
	keyboard: false,
});

const theDice = document.querySelector("#the-dice");

const newGame = document.querySelector("#js-new-game");
const rollDice = document.querySelector("#js-roll-dice");
const holdPoints = document.querySelector("#js-hold");

const modalToShow = document.querySelector("#messageModal");

var globalPointsPlayer1 = 0;
var globalPointsPlayer2 = 0;

var currentPointsPlayer1 = 0;
var currentPointsPlayer2 = 0;

rollDice.addEventListener("click", function () {
	let randomNumber = Math.floor(Math.random() * 6) + 1;
	theDice.innerHTML = '<img src="images/' + randomNumber + '.jpg">';
	if (randomNumber !== 1) {
		var activePlayer = document.querySelector(".player-active");
		addPointsToCurrent(activePlayer.id, randomNumber);
	}
	else {
		switchActive();
	}
});

newGame.addEventListener("click", function () {
	resetCurrentPoints();
	resetGlobalPoints();
	document.querySelector("#player-1").classList.add("player-active");
	document.querySelector("#player-2").classList.remove("player-active");
	myModal.show();
});

holdPoints.addEventListener("click", function () {
	var activePlayer = document.querySelector(".player-active");
	if (activePlayer.id === "player-1") {
		addPointsToGlobal(activePlayer.id, currentPointsPlayer1);
	}
	else {
		addPointsToGlobal(activePlayer.id, currentPointsPlayer2);
	}
	switchActive();	
});

function switchActive() {
	if (document.querySelector("#player-1").classList.contains("player-active")) {
		document.querySelector("#player-1").classList.remove("player-active");
		document.querySelector("#player-2").classList.add("player-active");
		resetCurrentPoints();
	} else {
		document.querySelector("#player-2").classList.remove("player-active");
		document.querySelector("#player-1").classList.add("player-active");
		resetCurrentPoints();
	}
}

function addPointsToCurrent(player, points) {
	if (player === "player-1") {
		currentPointsPlayer1 += points;
		document.querySelector("#js-score-" + player).innerHTML = currentPointsPlayer1;
	}
	else {
		currentPointsPlayer2 += points;
		document.querySelector("#js-score-" + player).innerHTML = currentPointsPlayer2;
	}
	console.log('On ajoute les points à current');
}

function addPointsToGlobal(player, points) {
	if (player === "player-1") {
		globalPointsPlayer1 += points;
		document.querySelector("#js-global-1").innerHTML = globalPointsPlayer1;
	}
	else {
		globalPointsPlayer2 += points;
		document.querySelector("#js-global-2").innerHTML = globalPointsPlayer2;
	}
	console.log('On ajoute les points à global');
}

function resetCurrentPoints() {
	currentPointsPlayer1 = 0;
	currentPointsPlayer2 = 0;
	document.querySelector("#js-score-player-1").innerHTML = currentPointsPlayer1;
	document.querySelector("#js-score-player-2").innerHTML = currentPointsPlayer2;
}

function resetGlobalPoints() {
	globalPointsPlayer1 = 0;
	globalPointsPlayer2 = 0;
	document.querySelector("#js-global-1").innerHTML = globalPointsPlayer1;
	document.querySelector("#js-global-2").innerHTML = globalPointsPlayer2;
}
