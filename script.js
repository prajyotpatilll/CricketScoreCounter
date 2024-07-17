// Add all Query selectors
const mainScore = document.querySelector(".score-over");
const mainOver = document.querySelector(".overs-h");
const ballsLogo = document.querySelectorAll(".ball");
const actionButtons = document.querySelectorAll(".action-but-1 .act-btn");
const wicketButton = document.querySelector(".action-but-1 .act-btn1");
const targetModeButton = document.querySelector(".target");
const overButtons = document.querySelectorAll(".action-but-1 .overupdate");
const ballUpdateButtons = document.querySelectorAll(".action-but-1 .ballupd");

// Main score variables
let score = 0;
let wickets = 0;

// Over update variables
let overBalls = 0;
let totalBalls = 0;

// Wicket update variable
let wicketCount = 0;

// Ball update variable
let ballIndex = 0;

// Target mode variables
let targetRuns;
let targetBalls;
let targetParagraph;
let isTargetMode = false;

// Function to update the score
const updateScore = (value) => {
  score += value;
  mainScore.innerText = `${score}/${wickets}`;

  if (isTargetMode) {
    targetRuns -= value;
    updateTargetStatus();
  }
};

// Function to update the wicket count
const updateWickets = () => {
  wickets++;
  mainScore.innerText = `${score}/${wickets}`;
};

// Function to update the target status
const updateTargetStatus = () => {
  if (targetRuns <= 0) {
    targetParagraph.textContent = "You win";
  } else if (targetBalls <= 0) {
    targetParagraph.textContent = `You lose by ${targetRuns} Runs`;
  } else {
    targetParagraph.textContent = `Runs: ${targetRuns}, Balls: ${targetBalls}`;
  }
};

// Function to handle over update
const updateOver = () => {
  overBalls++;
  totalBalls++;

  if (overBalls >= 6) {
    overBalls = 0;
  }

  const overCount = Math.floor(totalBalls / 6);
  mainOver.innerText = `overs ${overCount}.${overBalls}`;

  if (isTargetMode) {
    targetBalls--;
    updateTargetStatus();
  }
};

// Function to handle ball updates
const updateBalls = (value) => {
  const ballsArray = Array.from(ballsLogo);

  if (ballIndex >= 6) {
    ballIndex = 0;
    ballsArray.forEach(ball => {
      ball.innerText = ' ';
      ball.style.backgroundColor = "white";
      ball.style.color = "black";
    });
  }

  ballsArray[ballIndex].innerText = value;
  ballsArray[ballIndex].style.backgroundColor = "#2c3343";
  ballsArray[ballIndex].style.color = "white";

  ballIndex++;
};

// Adding event listeners to action buttons
actionButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const value = parseInt(event.target.value);
    updateScore(value);
  });
});

// Adding wicket score button
wicketButton.addEventListener("click", updateWickets);

// Adding over update buttons
overButtons.forEach(button => {
  button.addEventListener('click', updateOver);
});

// Adding ball update buttons
ballUpdateButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    const value = event.target.value;
    updateBalls(value);
  });
});

// Target mode logic
targetModeButton.addEventListener("click", () => {
  targetRuns = parseInt(prompt("Enter target runs:"));
  targetBalls = parseInt(prompt("Enter target overs:")) * 6;

  targetParagraph = document.createElement("p");
  targetParagraph.textContent = `Runs: ${targetRuns}, Balls: ${targetBalls}`;
  targetParagraph.style.paddingTop = "10px"
  targetParagraph.style.paddingBottom = "10px"
  document.querySelector(".Score-div").appendChild(targetParagraph);

  isTargetMode = true;
});
