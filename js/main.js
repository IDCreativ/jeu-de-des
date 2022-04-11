console.log("Main.JS Loaded");

const rollDice = document.querySelector("#js-roll-dice");
const theDice = document.querySelector("#the-dice");

rollDice.addEventListener("click", function () {
	let randomNumber = Math.floor(Math.random() * 6) + 1;
	theDice.innerHTML = '<img src="images/' + randomNumber + '.jpg">';
});
