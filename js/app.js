let message = document.getElementById("message");
let btn = document.getElementById("checkNumber");
numberOfGuess = document.getElementById("guess");
let randomNumber = Math.floor(Math.random() * 10)+1;
console.log(randomNumber);


btn.addEventListener("click", function() {


	let number = document.getElementById("number").value;
 if (number == randomNumber) {
 	message.innerText = "You Guessed the number!";
 	btnDiv = document.getElementById("btnDiv");
	btnDiv.innerHTML = `<input type="button" id="playAgain" onclick="document.location.reload()" value="Play Again">`;
	return false;
 }
 else if (number > randomNumber) {
 	message.innerText = "Your Guess is High!";
 	numberOfGuess.innerText = Number(numberOfGuess.innerText) + 1;

 }
 else if (number < randomNumber) {
 	message.innerText = "Your Guess is Low!";
 	numberOfGuess.innerText = Number(numberOfGuess.innerText) + 1;

 }

 if (Number(numberOfGuess.innerText) == 5) {
 		message.innerText = "You lose the game."
		btnDiv = document.getElementById("btnDiv");
		btnDiv.innerHTML = `<input type="button" id="playAgain" onclick="document.location.reload()" value="Play Again">`;
		return false;
	}


});
var winPercentage;
if (Number(numberOfGuess) == 1) {
	console.log(numberOfGuess)
}
document.body.style.backgroundColor = "#062066";
