// Add all Query selectors

const mainScore = document.querySelector(".score-over");
const mainOver = document.querySelector(".overs-h");
const ballsLogo = document.querySelectorAll(".ball");
const actionBut = document.querySelectorAll(".action-but-1 .act-btn");
const wiketScore = document.querySelector(".action-but-1 .act-btn1")
const BoardBut = document.querySelector(".act-btn2");
const undoBut = document.querySelector(".act-btn3");
const targetMode = document.querySelector(".target");
const overboard = document.querySelectorAll(".action-but-1 .overupdate")
const ballupdate = document.querySelectorAll(".action-but-1 .ballupd")

//main score update
let score = 0;
let wicket = 0;

//over update
let over = 0;
let overcounter = 0;

//wiket update
let value1 = 0;

//balls update
let indexBall = 0;



// Function to update the score

const finalScoreUpdate = (value) => {
  score += value;
  mainScore.innerText = `${score}/${wicket}`;
}

// Function to update the wicket count

const finalWicketUpdate = (value) => {
  wicket = value;
  mainScore.innerText = `${score}/${wicket}`;
}


// Adding event listeners to the action buttons

actionBut.forEach(button => {
  button.addEventListener('click', (event) => {
    let value = parseInt(event.target.value);
    finalScoreUpdate(value);
  });
});

// Adding wicket score button

wiketScore.addEventListener("click", () => {
  value1++;

  finalWicketUpdate(value1);

});

//over update

overboard.forEach(button => {
  button.addEventListener('click', () => {
    over++;
    overcounter++;

    if (over >= 6) {
      over = 0;
    }

    let overCou = Math.floor(overcounter / 6);

    mainOver.innerText = `overs ${overCou}.${over}`;
  });
});

//overballs logic here

ballupdate.forEach(button => {
  button.addEventListener("click", () => {

    let value2 = button.value;
    const ballsArray = Array.from(ballsLogo);

    if (indexBall >= 6) {
      indexBall = 0;

      for (let i = 0; i <= 5; i++) {
        ballsArray[i].innerText = ' ';
        ballsArray[i].style.backgroundColor = "white";
        ballsArray[i].style.color = "black";
      }

    };

    ballsArray[indexBall].innerText = value2;
    ballsArray[indexBall].style.backgroundColor = "#2c3343";
    ballsArray[indexBall].style.color = "white";

    indexBall++;
  })
});


//undo button logic
// undoBut.addEventListener("click", ()=>{
//   score--;
//   over--;
//   overcounter--;
//   value1--;
//   indexBall--;
// })








