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
    question: "Which of the following is metal or plastic case that holds all the physical parts of the computer? (IBPS Clerk Mains 2017)",
    options: ["System Unit", "Micro processor", "CPU", "Mainframe"],
    correct: "System Unit",
  },
  {
    id: "0",
    question: "Which of the following items is not used in Local Area Network? (SSC CGL 2012) ",
    options: ["Interface", "Computer", "Cable", "Modem"],
    correct: "Computer",
  },
  {
    id: "0",
    question: "What is m-commerce? (SSC CGL 2012)",
    options: ["Machine Commerce", "Mobile Commerce", "Money Commerce", "Marketing Commerce"],
    correct: "Mobile Commerce",
  },
  {
    id: "0",
    question: "An alternate name for the completely interconnected network topology is (SSC CGL 2012)",
    options: ["Mesh", "Star", "Tree", "Ring"],
    correct: "Mesh",
  },
  {
    id: "0",
    question: "What types of information  system would be recognised by digital circuits? (SSC CGL 2013)",
    options: ["Binary System", "Hexadecimal System", "Both", "None of these"],
    correct: "Binary System",
  },
  {
    id: "0",
    question: "Identify the FIFO structure amone the following : (SSC CGL 2013)",
    options: ["Stack", "Queue", "De-Queue", "Array"],
    correct: "Stack",
  },
  {
    id: "0",
    question: "CPU scheduler is also known as (SSC CGL 2016)",
    options: ["Short-term shedular", "Job shedular", "Resouce shedular", "None"],
    correct: "Short-term shedular",
  },
  {
    id: "0",
    question: "Data in database at a particular point of time is called as? (SSC CGL 2016)",
    options: ["Extension", "Intension", "Back-up", "Application"],
    correct: "Extension",
  },
  // {
  //   id: "0",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",
  // },
  // {
  //   id: "0",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",
  // },
  // {
  //   id: "0",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",
  // },
  // {
  //   id: "0",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",
  // },
  // {
  //   id: "0",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",
  // },
  {
    id: "0",
    question: "What is the brain of Computer? (SSC CGL 2016)",
    options: ["CPU", "Keyboard", "Mouse", "Printer"],
    correct: "CPU",
  },
  {
    id: "0",
    question: "Which of the following is not an operating system (SSC CGL 2016)",
    options: ["Opera", "Android", "Vista", "iOS"],
    correct: "Opera",
  },
  {
    id: "0",
    question: "Who among the following introduced the world'd first laptop computer in the marker? (SSC CGL 2014)",
    options: ["Epson", "Hewlett-Packard", "Both", "None"],
    correct: "Epson",
  },
  {
    id: "0",
    question: "Which was the first electronic computer constructed at the Moore School of Enginnering? (SSC CGL 2013)",
    options: ["TCP/IP", "HTTP", "SMTP", "SLIP"],
    correct: "TCP/IP",
  },
  {
    id: "0",
    question: "A Group 'Ware' is a (SSC CGL 2011)",
    options: ["Hardware", "Software", "Firmware", "Network"],
    correct: "Software",
  },
  {
    id: "0",
    question: "In which of the following areas, a spreadsheet software is more useful? (SSC CGL 2011)",
    options: ["Statistics", "Psychology", "Publishing", "Message sending"],
    correct: "Statistics",
  },
  {
    id: "0",
    question: "The first computer made available for commercial use was (SSC CGL 2011)",
    options: ["UNIVAC", "EDSAC", "ENIAC", "MANIAC"],
    correct: "UNIVAC",
  },
  {
    id: "0",
    question: "Window 7, the latest operating system from Microsoft corporation has _____ Indian language fonts. (SSC CGL 2010)",
    options: ["14", "26", "37", "49"],
    correct: "49",
  },
  {
    id: "0",
    question: "'C' Language is a (SSC CGL 2010)",
    options: ["High Level Language", "Low Level Language", "Machine Level Language", "Assemble Lavel Language"],
    correct: "High Level Language",
  },
  {
    id: "0",
    question: "Processor's speed of a computer is measured in (SSC CGL 2010)",
    options: ["MIPS", "BPS", "Baud", "Hertz"],
    correct: "MIPS",
  },
  {
    id: "0",
    question: "Which of the following countries has recently become the third largest market for Twitter? (SSC CGL 2010)",
    options: ["Brazil", "China", "India", "Indonesia"],
    correct: "Brazil",
  },
  {
    id: "0",
    question: "The messenger satellite launched by NASA is to study (SSC CGL 2010)",
    options: ["Mercury", "Venus", "Satrun", "Jupiter"],
    correct: "Mercury",
  },
  // {
  //   id: "0",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",
  // },
  
  
  


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
}

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