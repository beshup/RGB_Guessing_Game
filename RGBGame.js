var numSq = 6;
var colours = generateRandoColours(numSq);

function generateRandoColours(x){
	var array = [];
	for (var i=0; i<x; i++){
		array.push(randomColour());
	}
	return array;
}

function randomColour(){
	var red = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	console.log("rgb(" + red + ", " + blue + ", " + green + ")");
	return "rgb(" + red + ", " + blue + ", " + green + ")";
}


var squares = document.querySelectorAll(".choices");
var goalColour = randoCol();
var rgbDisplay = document.getElementById("RGBtext");
var msgDisplay = document.querySelector("#message");
var reset = document.getElementById("reset");
var h1 = document.querySelector("h1");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function(){
	msgDisplay.textContent = "";
	easyBtn.classList.add("slctd");
	hardBtn.classList.remove("slctd");
	numSq = 3;

	colours = generateRandoColours(numSq);
	goalColour = randoCol();
	rgbDisplay.textContent = goalColour;

	for (var i=0; i<squares.length; i++){
		if (colours[i]){
			squares[i].style.background = colours[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}


	h1.style.backgroundColor = "steelblue";
})

hardBtn.addEventListener("click", function(){
	msgDisplay.textContent = "";
	easyBtn.classList.remove("slctd");
	hardBtn.classList.add("slctd");
	numSq = 6;

	colours = generateRandoColours(numSq);
	goalColour = randoCol();
	rgbDisplay.textContent = goalColour;

	for (var i=0; i<squares.length; i++){
		squares[i].style.display = "block";
		squares[i].style.background = colours[i];		
	}


	h1.style.backgroundColor = "steelblue";
})

rgbDisplay.textContent = goalColour;

reset.addEventListener("click", function(){
		
	colours = generateRandoColours(numSq);	
	goalColour = randoCol();
	rgbDisplay.textContent = goalColour;
	for (var i=0; i<squares.length; i++){
		squares[i].style.background = colours[i];
	}

	h1.style.backgroundColor = "steelblue";
	this.textContent = "New Colours";
	msgDisplay.textContent = "";
})

function changeCol(colour){
	for (var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colour;
	}
}

for (var i=0; i<squares.length; i++){

	squares[i].style.backgroundColor = colours[i];

	squares[i].addEventListener("click", function(){
		var clickedColour = this.style.backgroundColor;

		if (clickedColour == goalColour){
			msgDisplay.textContent = "Correct!";
			changeCol(clickedColour);
			h1.style.backgroundColor = clickedColour;
			reset.textContent = "Play again?";
		}

		else {
			this.style.backgroundColor = "#232323"; 
			msgDisplay.textContent = "Try Again.";
		}
	});
}

function randoCol(){
	var random =  Math.floor(Math.random() * colours.length);
	return colours[random];
}
