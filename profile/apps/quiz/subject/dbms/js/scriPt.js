//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 20;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "1",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "2",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "3",
    question: "Between the users and the datbase itself, a DBMS will act as ?",
    options: ["Barrier", "Interface", "Referee", "Obstacle"],
    correct: "Interface",
  },
  {
    id: "4",
    question: "A computer file contains several records. What does each record contain ?",
    options: ["Byte", "Words", "Fields", "Database"],
    correct: "Fields",
  },
  {
    id: "5",
    question: "In DBMS, you can",
    options: ["Create a file", "Delete a file", "Retrieve a file", "All of the above"],
    correct: "All of the above",
  },
  {
    id: "6",
    question: "The data dictionary tells the DBMS ?",
    options: ["What files are in the datase", "What attributes are possessed by the data", "What these files contain", "All of these"],
    correct: "All of these",
  },
  {
    id: "7",
    question: "Which of the following is a hierarchical database ?",
    options: ["Oracle", "DBII", "Ingress", "All of these"],
    correct: "Oracle",
  },
  {
    id: "8",
    question: "Data processing comprises of?",
    options: ["Capturing of data", "Storing of data", "Updating and retrieving data", "All of the above"],
    correct: "All of the above",
  },
  {
    id: "9",
    question: "File is the collection of all related.",
    options: ["Database", "Records", "Fields", "File"],
    correct: "Records",
  },
  {
    id: "10",
    question: "In the relational modes, cardinality is termed as:",
    options: ["Numbers of tuples", "Number of attibutes", "Numbers of tables", "Numbers of constraints"],
    correct: "Numbers of tuples",
  },
  {
    id: "11",
    question: "Relational calculus is a ",
    options: ["Procedural Language", "Non - Procedural Language", "Data definition language", "High level language"],
    correct: "Non - Procedural Language",
  },
  {
    id: "0",
    question: "Cartesian product in relation algebra is ",
    options: ["A Binary Operator", "A unary Operator", "A Ternary Operator", "Not defined"],
    correct: "A Binary Operator",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  {
    id: "0",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  

  

];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 21;                 //timer setting start from 20 second.
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 20;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};