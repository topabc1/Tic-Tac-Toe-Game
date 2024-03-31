document.addEventListener("DOMContentLoaded", () => {
	
	// START *******************************************
	let mode = '';
	let character = '';
	let turn = '';
	let gameID = 0;
	let points = [0, 0];
	let playerNames = [];
	let display = document.querySelector("#display");
	let gridCells;
	let start = 0;
	const drawQuotes = ["It was a draw..."];
	const drawQuotesMulti = ["It was a draw..."]
	const winQuotes = ["Congrats! You won!"];
	const winQuotesMulti = ["Player 1 Wins!", "Player 2 Lost!"];
	const loseQuotes = ["Uh oh, you lost.."];
	const loseQuotesMulti = ["Player 2 Wins!", "Player 1 Lost!"];
	
	stage1();

	// UPDATE ********************************************
	function stage1() {
		document.querySelector("#turn-1").style.marginTop = "-10rem";
		document.querySelector("#turn-2").style.marginTop = "-10rem";
		display.style.opacity = "100%";
		display.innerHTML = `
			<h1>How do you want to play?</h1>
			<h2 id='single-player'>One Player</h2>
			<h2 id='multi-player'>Two Player</h2>
		`;
		
		document.querySelector("#single-player").addEventListener("click", () => {
			mode = "single";
			display.style.opacity = "0";
			setTimeout(stage2, 400);
		});
	
		document.querySelector("#multi-player").addEventListener("click", () => {
			mode = "multi";
			display.style.opacity = "0";
			setTimeout(stage2, 400);
		});
	}
	
	
	
	
	
	function stage2() {
		display.style.opacity = "100%";
		display.innerHTML = `
			<h1>Player 1: Would you like X or O?</h1>
			<h2 id='x'>X</h2>
			<h2 id='o'>O</h2>
			<button class='go-back-btn'><i class="fa-solid fa-arrow-left"></i> Back</button>
		`;
		
		document.querySelector(".go-back-btn").addEventListener("click", () => {
			display.style.opacity = "0";
			setTimeout(stage1, 400);
		});
		
		document.querySelector("#x").addEventListener("click", () => {
			character = 'x';
			
			if(start === 0) {
				turn = "first";
			} else {
				turn = "second";
			}
			
			if(mode === "multi") {
				playerNames[0] = "player 1";
				playerNames[1] = "player 2";
			} else {
				playerNames[0] = "me";
				playerNames[1] = "computer";
			}
			
			display.style.opacity = "0";
			setTimeout(stage3, 400);
		});
		
		document.querySelector("#o").addEventListener("click", () => {
			character = 'o';
			
			if(start === 0) {
				turn = "first";
			} else {
				turn = "second";
			}
			
			if(mode === "multi") {
				playerNames[0] = "player1";
				playerNames[1] = "player2";
			} else {
				playerNames[0] = "me";
				playerNames[1] = "computer";
			}
			
			display.style.opacity = "0";
			setTimeout(stage3, 400);
		});
	}
	
	
	
	
	
	function stage3() {
		display.style.opacity = "100%";
		document.querySelector("#end-screen").style.opacity = "0";
		document.querySelector("#end-screen").style.display = "none";
		display.innerHTML = `
			<button class='reset-all-btn'>Reset All</button>
			<p class='player1'>${playerNames[0]}</p>
			<p class='score1'>${points[0]}</p>
			<p class='player2'>${playerNames[1]}</p>
			<p class='score2'>${points[1]}</p>
		
			<div id='grid'>
				<div id='grid-1' class='grid-cell'></div>
				<div id='grid-2' class='grid-cell'></div>
				<div id='grid-3' class='grid-cell'></div>
				<div id='grid-4' class='grid-cell'></div>
				<div id='grid-5' class='grid-cell'></div>
				<div id='grid-6' class='grid-cell'></div>
				<div id='grid-7' class='grid-cell'></div>
				<div id='grid-8' class='grid-cell'></div>
				<div id='grid-9' class='grid-cell'></div>
			</div>
		`;
		
		document.querySelector(".reset-all-btn").addEventListener("click", () => {
			display.style.opacity = "0";
			points = [0, 0];
			setTimeout(stage1, 400);
		});
		
		gridCells = Array.from(document.querySelectorAll(".grid-cell"));
		
		if(start === 0) {
			turn = "first";
			myTurn();
		} else {
			if(mode === "single") {
				turn = "second";
				computerTurn();
			} else {
				turn = "second";
				myTurn();
			}
		}
	}
	
	
	
	
	
	function checkForEnd() {
		if(gridCells[0].innerHTML && gridCells[0].innerHTML === gridCells[1].innerHTML && gridCells[2].innerHTML === gridCells[1].innerHTML) {
			gameID = 1;
			gridCells[0].style.backgroundColor = "black";
			gridCells[0].style.color = "aqua";
			gridCells[1].style.backgroundColor = "black";
			gridCells[1].style.color = "aqua";
			gridCells[2].style.backgroundColor = "black";
			gridCells[2].style.color = "aqua";
		}
		
		if(gridCells[3].innerHTML && gridCells[3].innerHTML === gridCells[4].innerHTML && gridCells[5].innerHTML === gridCells[4].innerHTML) {
			gameID = 1;
			gridCells[3].style.backgroundColor = "black";
			gridCells[3].style.color = "aqua";
			gridCells[4].style.backgroundColor = "black";
			gridCells[4].style.color = "aqua";
			gridCells[5].style.backgroundColor = "black";
			gridCells[5].style.color = "aqua";
		}
		
		if(gridCells[6].innerHTML && gridCells[6].innerHTML === gridCells[7].innerHTML && gridCells[8].innerHTML === gridCells[7].innerHTML) {
			gameID = 1;
			gridCells[6].style.backgroundColor = "black";
			gridCells[6].style.color = "aqua";
			gridCells[7].style.backgroundColor = "black";
			gridCells[7].style.color = "aqua";
			gridCells[8].style.backgroundColor = "black";
			gridCells[8].style.color = "aqua";
		}
		
		if(gridCells[0].innerHTML && gridCells[0].innerHTML === gridCells[3].innerHTML && gridCells[6].innerHTML === gridCells[3].innerHTML) {
			gameID = 1;
			gridCells[0].style.backgroundColor = "black";
			gridCells[0].style.color = "aqua";
			gridCells[3].style.backgroundColor = "black";
			gridCells[3].style.color = "aqua";
			gridCells[6].style.backgroundColor = "black";
			gridCells[6].style.color = "aqua";
		}
		
		if(gridCells[1].innerHTML && gridCells[1].innerHTML === gridCells[4].innerHTML && gridCells[7].innerHTML === gridCells[4].innerHTML) {
			gameID = 1;
			gridCells[1].style.backgroundColor = "black";
			gridCells[1].style.color = "aqua";
			gridCells[4].style.backgroundColor = "black";
			gridCells[4].style.color = "aqua";
			gridCells[7].style.backgroundColor = "black";
			gridCells[7].style.color = "aqua";
		}
		
		if(gridCells[2].innerHTML && gridCells[2].innerHTML === gridCells[5].innerHTML && gridCells[8].innerHTML === gridCells[5].innerHTML) {
			gameID = 1;
			gridCells[2].style.backgroundColor = "black";
			gridCells[2].style.color = "aqua";
			gridCells[5].style.backgroundColor = "black";
			gridCells[5].style.color = "aqua";
			gridCells[8].style.backgroundColor = "black";
			gridCells[8].style.color = "aqua";
		}
		
		if(gridCells[0].innerHTML && gridCells[0].innerHTML === gridCells[4].innerHTML && gridCells[8].innerHTML === gridCells[4].innerHTML) {
			gameID = 1;
			gridCells[0].style.backgroundColor = "black";
			gridCells[0].style.color = "aqua";
			gridCells[4].style.backgroundColor = "black";
			gridCells[4].style.color = "aqua";
			gridCells[8].style.backgroundColor = "black";
			gridCells[8].style.color = "aqua";
		}
		
		if(gridCells[2].innerHTML && gridCells[2].innerHTML === gridCells[4].innerHTML && gridCells[6].innerHTML === gridCells[4].innerHTML) {
			gameID = 1;
			gridCells[2].style.backgroundColor = "black";
			gridCells[2].style.color = "aqua";
			gridCells[4].style.backgroundColor = "black";
			gridCells[4].style.color = "aqua";
			gridCells[6].style.backgroundColor = "black";
			gridCells[6].style.color = "aqua";
		}
		
		if(gridCells[0].innerHTML && gridCells[1].innerHTML && gridCells[2].innerHTML && gridCells[3].innerHTML && gridCells[4].innerHTML && gridCells[5].innerHTML && gridCells[6].innerHTML && gridCells[7].innerHTML && gridCells[8].innerHTML) {
			gameID = 2;
		}
		
		if(gameID === 1) {
			gameID = 0;
			
			if(start === 0) {
				start = 1;
			} else {
				start = 0;
			}
			
			if(turn === "first") {
				loseScreen();
				points[1]++;
			} else {
				winScreen();
				points[0]++;
			}
			
			setTimeout(stage3, 1600);
		} else if(gameID === 2) {
			gameID = 0;
			
			if(start === 0) {
				start = 1;
			} else {
				start = 0;
			}
			
			drawScreen();
			setTimeout(stage3, 1600);
		}
	}
	
	
	
	
	
	function computerTurn() {
		if(gridCells[0].innerHTML == character && gridCells[0].innerHTML && gridCells[1].innerHTML == character && gridCells[1].innerHTML && !gridCells[2].innerHTML) {
			gridCells[2].innerHTML = character;
		} else if(gridCells[1].innerHTML == character && gridCells[1].innerHTML && gridCells[2].innerHTML == character && gridCells[2].innerHTML && !gridCells[0].innerHTML) {
			gridCells[0].innerHTML = character;
		} else if(gridCells[0].innerHTML == character && gridCells[0].innerHTML && gridCells[2].innerHTML == character && gridCells[2].innerHTML && !gridCells[1].innerHTML) {
			gridCells[1].innerHTML = character;
		} else if(gridCells[3].innerHTML == character && gridCells[3].innerHTML && gridCells[4].innerHTML == character && gridCells[4].innerHTML && !gridCells[5].innerHTML) {
			gridCells[5].innerHTML = character;
		} else if(gridCells[4].innerHTML == character && gridCells[4].innerHTML && gridCells[5].innerHTML == character && gridCells[5].innerHTML && !gridCells[3].innerHTML) {
			gridCells[3].innerHTML = character;
		} else if(gridCells[3].innerHTML == character && gridCells[3].innerHTML && gridCells[5].innerHTML == character && gridCells[5].innerHTML && !gridCells[4].innerHTML) {
			gridCells[4].innerHTML = character;
		} else if(gridCells[6].innerHTML == character && gridCells[6].innerHTML && gridCells[7].innerHTML == character && gridCells[7].innerHTML && !gridCells[8].innerHTML) {
			gridCells[8].innerHTML = character;
		} else if(gridCells[7].innerHTML == character && gridCells[7].innerHTML && gridCells[8].innerHTML == character && gridCells[8].innerHTML && !gridCells[6].innerHTML) {
			gridCells[6].innerHTML = character;
		} else if(gridCells[6].innerHTML == character && gridCells[6].innerHTML && gridCells[8].innerHTML == character && gridCells[8].innerHTML && !gridCells[7].innerHTML) {
			gridCells[7].innerHTML = character;
		} else if(gridCells[0].innerHTML == character && gridCells[0].innerHTML && gridCells[3].innerHTML == character && gridCells[3].innerHTML && !gridCells[6].innerHTML) {
			gridCells[6].innerHTML = character;
		} else if(gridCells[3].innerHTML == character && gridCells[3].innerHTML && gridCells[6].innerHTML == character && gridCells[6].innerHTML && !gridCells[0].innerHTML) {
			gridCells[0].innerHTML = character;
		} else if(gridCells[0].innerHTML == character && gridCells[0].innerHTML && gridCells[6].innerHTML == character && gridCells[6].innerHTML && !gridCells[3].innerHTML) {
			gridCells[3].innerHTML = character;
		} else if(gridCells[1].innerHTML == character && gridCells[1].innerHTML && gridCells[4].innerHTML == character && gridCells[4].innerHTML && !gridCells[7].innerHTML) {
			gridCells[7].innerHTML = character;
		} else if(gridCells[4].innerHTML == character && gridCells[4].innerHTML && gridCells[7].innerHTML == character && gridCells[7].innerHTML && !gridCells[1].innerHTML) {
			gridCells[1].innerHTML = character;
		} else if(gridCells[1].innerHTML == character && gridCells[1].innerHTML && gridCells[7].innerHTML == character && gridCells[7].innerHTML && !gridCells[4].innerHTML) {
			gridCells[4].innerHTML = character;
		} else if(gridCells[2].innerHTML == character && gridCells[2].innerHTML && gridCells[5].innerHTML == character && gridCells[5].innerHTML && !gridCells[8].innerHTML) {
			gridCells[8].innerHTML = character;
		} else if(gridCells[5].innerHTML == character && gridCells[5].innerHTML && gridCells[8].innerHTML == character && gridCells[8].innerHTML && !gridCells[2].innerHTML) {
			gridCells[2].innerHTML = character;
		} else if(gridCells[2].innerHTML == character && gridCells[2].innerHTML && gridCells[8].innerHTML == character && gridCells[8].innerHTML && !gridCells[5].innerHTML) {
			gridCells[5].innerHTML = character;
		} else if(gridCells[0].innerHTML == character && gridCells[0].innerHTML && gridCells[4].innerHTML == character && gridCells[4].innerHTML && !gridCells[8].innerHTML) {
			gridCells[8].innerHTML = character;
		} else if(gridCells[4].innerHTML == character && gridCells[4].innerHTML && gridCells[8].innerHTML == character && gridCells[8].innerHTML && !gridCells[0].innerHTML) {
			gridCells[0].innerHTML = character;
		} else if(gridCells[0].innerHTML == character && gridCells[0].innerHTML && gridCells[8].innerHTML == character && gridCells[8].innerHTML && !gridCells[4].innerHTML) {
			gridCells[4].innerHTML = character;
		} else if(gridCells[2].innerHTML == character && gridCells[2].innerHTML && gridCells[4].innerHTML == character && gridCells[4].innerHTML && !gridCells[6].innerHTML) {
			gridCells[6].innerHTML = character;
		} else if(gridCells[4].innerHTML == character && gridCells[4].innerHTML && gridCells[6].innerHTML == character && gridCells[6].innerHTML && !gridCells[2].innerHTML) {
			gridCells[2].innerHTML = character;
		} else if(gridCells[2].innerHTML == character && gridCells[2].innerHTML && gridCells[6].innerHTML == character && gridCells[6].innerHTML && !gridCells[4].innerHTML) {
			gridCells[4].innerHTML = character;
		}
		
		else if(gridCells[0].innerHTML !== character && gridCells[0].innerHTML && gridCells[1].innerHTML !== character && gridCells[1].innerHTML && !gridCells[2].innerHTML) {
			gridCells[2].innerHTML = character;
		} else if(gridCells[1].innerHTML !== character && gridCells[1].innerHTML && gridCells[2].innerHTML !== character && gridCells[2].innerHTML && !gridCells[0].innerHTML) {
			gridCells[0].innerHTML = character;
		} else if(gridCells[0].innerHTML !== character && gridCells[0].innerHTML && gridCells[2].innerHTML !== character && gridCells[2].innerHTML && !gridCells[1].innerHTML) {
			gridCells[1].innerHTML = character;
		} else if(gridCells[3].innerHTML !== character && gridCells[3].innerHTML && gridCells[4].innerHTML !== character && gridCells[4].innerHTML && !gridCells[5].innerHTML) {
			gridCells[5].innerHTML = character;
		} else if(gridCells[4].innerHTML !== character && gridCells[4].innerHTML && gridCells[5].innerHTML !== character && gridCells[5].innerHTML && !gridCells[3].innerHTML) {
			gridCells[3].innerHTML = character;
		} else if(gridCells[3].innerHTML !== character && gridCells[3].innerHTML && gridCells[5].innerHTML !== character && gridCells[5].innerHTML && !gridCells[4].innerHTML) {
			gridCells[4].innerHTML = character;
		} else if(gridCells[6].innerHTML !== character && gridCells[6].innerHTML && gridCells[7].innerHTML !== character && gridCells[7].innerHTML && !gridCells[8].innerHTML) {
			gridCells[8].innerHTML = character;
		} else if(gridCells[7].innerHTML !== character && gridCells[7].innerHTML && gridCells[8].innerHTML !== character && gridCells[8].innerHTML && !gridCells[6].innerHTML) {
			gridCells[6].innerHTML = character;
		} else if(gridCells[6].innerHTML !== character && gridCells[6].innerHTML && gridCells[8].innerHTML !== character && gridCells[8].innerHTML && !gridCells[7].innerHTML) {
			gridCells[7].innerHTML = character;
		} else if(gridCells[0].innerHTML !== character && gridCells[0].innerHTML && gridCells[3].innerHTML !== character && gridCells[3].innerHTML && !gridCells[6].innerHTML) {
			gridCells[6].innerHTML = character;
		} else if(gridCells[3].innerHTML !== character && gridCells[3].innerHTML && gridCells[6].innerHTML !== character && gridCells[6].innerHTML && !gridCells[0].innerHTML) {
			gridCells[0].innerHTML = character;
		} else if(gridCells[0].innerHTML !== character && gridCells[0].innerHTML && gridCells[6].innerHTML !== character && gridCells[6].innerHTML && !gridCells[3].innerHTML) {
			gridCells[3].innerHTML = character;
		} else if(gridCells[1].innerHTML !== character && gridCells[1].innerHTML && gridCells[4].innerHTML !== character && gridCells[4].innerHTML && !gridCells[7].innerHTML) {
			gridCells[7].innerHTML = character;
		} else if(gridCells[4].innerHTML !== character && gridCells[4].innerHTML && gridCells[7].innerHTML !== character && gridCells[7].innerHTML && !gridCells[1].innerHTML) {
			gridCells[1].innerHTML = character;
		} else if(gridCells[1].innerHTML !== character && gridCells[1].innerHTML && gridCells[7].innerHTML !== character && gridCells[7].innerHTML && !gridCells[4].innerHTML) {
			gridCells[4].innerHTML = character;
		} else if(gridCells[2].innerHTML !== character && gridCells[2].innerHTML && gridCells[5].innerHTML !== character && gridCells[5].innerHTML && !gridCells[8].innerHTML) {
			gridCells[8].innerHTML = character;
		} else if(gridCells[5].innerHTML !== character && gridCells[5].innerHTML && gridCells[8].innerHTML !== character && gridCells[8].innerHTML && !gridCells[2].innerHTML) {
			gridCells[2].innerHTML = character;
		} else if(gridCells[2].innerHTML !== character && gridCells[2].innerHTML && gridCells[8].innerHTML !== character && gridCells[8].innerHTML && !gridCells[5].innerHTML) {
			gridCells[5].innerHTML = character;
		} else if(gridCells[0].innerHTML !== character && gridCells[0].innerHTML && gridCells[4].innerHTML !== character && gridCells[4].innerHTML && !gridCells[8].innerHTML) {
			gridCells[8].innerHTML = character;
		} else if(gridCells[4].innerHTML !== character && gridCells[4].innerHTML && gridCells[8].innerHTML !== character && gridCells[8].innerHTML && !gridCells[0].innerHTML) {
			gridCells[0].innerHTML = character;
		} else if(gridCells[0].innerHTML !== character && gridCells[0].innerHTML && gridCells[8].innerHTML !== character && gridCells[8].innerHTML && !gridCells[4].innerHTML) {
			gridCells[4].innerHTML = character;
		} else if(gridCells[2].innerHTML !== character && gridCells[2].innerHTML && gridCells[4].innerHTML !== character && gridCells[4].innerHTML && !gridCells[6].innerHTML) {
			gridCells[6].innerHTML = character;
		} else if(gridCells[4].innerHTML !== character && gridCells[4].innerHTML && gridCells[6].innerHTML !== character && gridCells[6].innerHTML && !gridCells[2].innerHTML) {
			gridCells[2].innerHTML = character;
		} else if(gridCells[2].innerHTML !== character && gridCells[2].innerHTML && gridCells[6].innerHTML !== character && gridCells[6].innerHTML && !gridCells[4].innerHTML) {
			gridCells[4].innerHTML = character;
		}
		
		else if(!gridCells[4].innerHTML) {
			gridCells[4].innerHTML = character;
		} else if(gridCells[0].innerHTML == character && !gridCells[8].innerHTML) {
			gridCells[8].innerHTML = character;
		} else if(gridCells[2].innerHTML == character && !gridCells[6].innerHTML) {
			gridCells[6].innerHTML = character;
		} else if(gridCells[6].innerHTML == character && !gridCells[2].innerHTML) {
			gridCells[2].innerHTML = character;
		} else if(gridCells[8].innerHTML == character && !gridCells[0].innerHTML) {
			gridCells[0].innerHTML = character;
		} else if(!gridCells[0].innerHTML) {
			gridCells[0].innerHTML = character;
		} else if(!gridCells[2].innerHTML) {
			gridCells[2].innerHTML = character;
		} else if(!gridCells[6].innerHTML) {
			gridCells[6].innerHTML = character;
		} else if(!gridCells[8].innerHTML) {
			gridCells[8].innerHTML = character;
		} else if(!gridCells[1].innerHTML) {
			gridCells[1].innerHTML = character;
		} else if(!gridCells[3].innerHTML) {
			gridCells[3].innerHTML = character;
		} else if(!gridCells[5].innerHTML) {
			gridCells[5].innerHTML = character;
		} else if(!gridCells[7].innerHTML) {
			gridCells[7].innerHTML = character;
		}
		
		if(turn === "first") {
			turn = "second";
		} else {
			turn = "first";
		}

		if(character === 'x') {
			character = 'o';
		} else {
			character = 'x';
		}
		
		setTimeout(myTurn, 400);
	}
	
	
	
	
	
	function myTurn() {
		if(turn === "first") {
			turn1();
		} else {
			turn2();
		}
		
		Array.from(document.querySelectorAll(".grid-cell")).forEach((item, index) => {
			item.addEventListener("click", () => {
				if(mode === "multi" && !item.innerHTML) {
					item.innerHTML = character;

					if(turn === "first") {
						turn = "second";
					} else {
						turn = "first";
					}
					
					if(character === 'x') {
						character = 'o';
					} else {
						character = 'x';
					}
					
					myTurn();
					checkForEnd();
				} else if(mode === "single" && !item.innerHTML && turn === "first") {
					item.innerHTML = character;
					
					if(turn === "first") {
						turn = "second";
					} else {
						turn = "first";
					}

					if(character === 'x') {
						character = 'o';
					} else {
						character = 'x';
					}
					
					turn2();
					setTimeout(() => {
						computerTurn();
						checkForEnd();
					}, 400);
				}
			});
		});
	}
	
	
	
	
	
	function drawScreen() {
		if(mode === 'single') {
			document.querySelector("#end-screen").innerHTML = drawQuotes[Math.floor(Math.random() * drawQuotes.length)];
		} else {
			document.querySelector("#end-screen").innerHTML = drawQuotesMulti[Math.floor(Math.random() * drawQuotesMulti.length)];
		}
		
		document.querySelector("#end-screen").style.display = "block";
		document.querySelector("#end-screen").style.opacity = "50%";
	}
	
	
	
	
	
	function winScreen() {
		if(mode === 'single') {
			document.querySelector("#end-screen").innerHTML = winQuotes[Math.floor(Math.random() * winQuotes.length)];
		} else {
			document.querySelector("#end-screen").innerHTML = winQuotesMulti[Math.floor(Math.random() * winQuotesMulti.length)];
		}
		
		document.querySelector("#end-screen").style.display = "block";
		document.querySelector("#end-screen").style.opacity = "50%";
	}
	
	
	
	
	
	function loseScreen() {
		if(mode === 'single') {
			document.querySelector("#end-screen").innerHTML = loseQuotes[Math.floor(Math.random() * loseQuotes.length)];
		} else {
			document.querySelector("#end-screen").innerHTML = loseQuotesMulti[Math.floor(Math.random() * loseQuotesMulti.length)];
		}
		
		document.querySelector("#end-screen").style.display = "block";
		document.querySelector("#end-screen").style.opacity = "50%";
	}
	
	
	
	
	
	function turn1() {
		document.querySelector("#turn-2").style.marginTop = "-10rem";
		document.querySelector("#turn-1").innerHTML = `${playerNames[0]}'s turn!`;
		document.querySelector("#turn-1").style.marginTop = "-25rem";
	}
	
	
	
	
	
	function turn2() {
		document.querySelector("#turn-1").style.marginTop = "-10rem";
		document.querySelector("#turn-2").innerHTML = `${playerNames[1]}'s turn!`;
		document.querySelector("#turn-2").style.marginTop = "-25rem";
	}
});
