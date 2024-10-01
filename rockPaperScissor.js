const args = process.argv.slice(2);
// Check if the user provided one word
if (args.length !== 1) {
  console.error(
    "Please provide exactly one choice (Either rock, paper or scissors)"
  );
  return;
}

const userChoice = args[0].toLowerCase();
//console.log(`You chose: ${userChoice}`);

const computerChoice = ["rock", "paper", "scissors"];

// Check if the user provided the correct word
if (
  userChoice !== "rock" &&
  userChoice !== "paper" &&
  userChoice !== "scissors"
) {
  console.error("One word must be written,  either rock, paper or scissors");
  return;
}

// Generate a random index based on the array length
const randomIndex = Math.floor(Math.random() * computerChoice.length);

// Get the random choice from the array
const randomChoice = computerChoice[randomIndex];


if (userChoice === randomChoice) {
  console.log(
    `You choose ${userChoice} and the computer choose ${randomChoice}. Nobody wins`
  );
} else if (
   (userChoice === "rock" && randomChoice === "scissors") || 
   (userChoice === "paper" && randomChoice === "rock") ||
   (userChoice === "scissors" && randomChoice === "paper"))
   {
  console.log(
    `You choose ${userChoice} and the computer choose ${randomChoice}. You win`
  );
} else {
  console.log(
    `You choose ${userChoice} and the computer choose ${randomChoice}. You lose!`
  );
}
return;
