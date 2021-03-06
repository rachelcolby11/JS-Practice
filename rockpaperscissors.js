var userChoice = prompt("Do you choose rock, paper or scissors?");
console.log("User: " + userChoice);

var computerChoice;
var setComputerChoice = function() {
    var random = Math.random();
    if (random < 0.34) {
      computerChoice = "rock";
    } else if(random <= 0.67) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    };
    console.log("Computer: " + computerChoice);
    return computerChoice;
};

setComputerChoice();

var compare = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        if (confirm("It's a tie! Rematch?") === true) {
            var secondUserChoice = prompt("Do you choose rock, paper or scissors?");
            console.log("User: " + secondUserChoice);
            var newComputerChoice = setComputerChoice();
            
            compare(secondUserChoice, newComputerChoice);
        } else {
            alert("Ok, let's play again soon :)");
        };
    } else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            alert("Good choice! Rock smashes scissors. You win!");
        } else { //computer has chosen paper
            alert("Sorry, paper covers rock. Paper wins!");
        };
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            alert("Good choice! Paper covers rock.You win!");
        } else { //computer has chosen scissors
            alert("Sorry, scissors cuts paper. Scissors wins!");
        };
    } else if (userChoice === "scissors") {    
        if (computerChoice === "paper") {
            alert("Good choice! Scissors cuts paper. You win!");
        } else { //computer has chosen rock
            alert("Sorry, rock smashes scissors. Rock wins!");
        };
    } else {
        userChoice = prompt(userChoice + " is not a valid entry. Do you choose rock, paper or scissors?");
        compare(userChoice,computerChoice);
    };    
};

compare(userChoice,computerChoice);