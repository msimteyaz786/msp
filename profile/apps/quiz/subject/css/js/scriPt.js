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
    question: "Cascading Style Sheet (CSS) _________ is a language.",
    options: ["Structural", "Presentational", "Markup", "Behavioral"],
    correct: "Presentational",
  },
  {
    id: "1",
    question: "Style that are placed with style tag are called as - ",
    options: ['Embedded Styles', "Inline Style", "HTML Style ", "External Style"],
    correct: "Embedded Styles",
  }, {
    id: "",
    question: "Name the syntax of declaring a CSS rule is - ",
    options: ["Property - name: value", "Property - name = value", "Property + name: value", "Property : name - value"],
    correct: "Property - name: value",
  }, {
    id: "",
    question: "Which tag is used to link an external styles sheet to a web page?",
    options: ["@media", "Style tag", "Script tag", "Link tag"],
    correct: "Link tag",
  }, {
    id: "",
    question: "Which symbol indicates the 'class selector' in the CSS?",
    options: ["Plus (+)", "Hash (#)", "Dot (.)", "None of these"],
    correct: "Dot (.)",
  }, {
    id: "",
    question: "Which symbol indicates the 'id selector' in the CSS?",
    options: ["Plus (+)", "Hash (#)", "Dot (.)", "None of these"],
    correct: "Hash (#)",
  }, {
    id: "",
    question: "Which of the following CSS list properties is correct?",
    options: ["Set defferent list item markers for unordered list", "Set an image as the list item mark", "Set different list item markers for ordered list", "All of the above"],
    correct: "All of the above",
  }, {
    id: "",
    question: "Which selector is being used to specify a group of elements?",
    options: ["Name", "Tag", "ID", "Class"],
    correct: "Class",
  }, {
    id: "",
    question: "Whic properties is used in CSS to change the background color?",
    options: ["background:color", "background-color", "bgcolor", "Color"],
    correct: "background-color",
  }, {
    id: "",
    question: "CSS stand for - ",
    options: ["Cascading Style Sheets", "Cashcade Style Sheet", "Color and Style Sheet", "None of these"],
    correct: "Cascading Style Sheets",
  }, {
    id: "",
    question: "Which of the following CSS property is used to set the backgournd-image of an element?",
    options: ["background-image", "background-attachment", "background-color", "None of these"],
    correct: "background-image",
  }, {
    id: "",
    question: "Which of the following is the correct syntax to make the background-color of all paragraph elements to green?",
    options: ["p{background-color: green;}", "p{background-color: #green;}", "p{background-color: .green;}", "None of these"],
    correct: "p{background-color: green;}",
  }, {
    id: "",
    question: "Which of the following is the correct syntax to display the 'hyperlinks' without any underline?",
    options: ["a{text-decoration: none;}", "a{text-decoration: underline;}", "a{decoration : no-underline;}", "None of these"],
    correct: "a{text-decoration: none;}",
  }, {
    id: "",
    question: "Which of the following property is used as the shorthand property for the padding properties?",
    options: ["padding-left", "padding-right", "padding", "All of these"],
    correct: "padding",
  }, {
    id: "",
    question: "Which of the following property is used as the shorthand property for the margin properties?",
    options: ["margin-left", "margin-right", "margin", "All of these"],
    correct: "margin",
  },
  {
    id: "",
    question: "The CSS property used to make the text bold is _____.",
    options: ["font: bold", "font-weight : bold", "weight : bold", "style : bold"],
    correct: "font-weight : bold",
  }, {
    id: "",
    question: "In CSS property used to specify the transparency of an element is - ",
    options: ["opacity", "filter", "visibility", "ovarlay"],
    correct: "opacity",
  }, {
    id: "",
    question: "Which of the following syntax is correct in CSS to make each word of a sentence start with a capital letter?",
    options: ["text-style: capital;", "text-transform: capitalize;", "transform: capitalize", "text-transfrom: capital;"],
    correct: "text-transform: capitalize;",
  }, {
    id: "",
    question: "Which of the following is the correct syntax to select all paragraph elements in a div element?",
    options: ["div p", "p", "div#p", "div~p"],
    correct: "div p",
  }, {
    id: "",
    question: "Which of the following is the correct syntax to select the p sibling of a div element?",
    options: ["div ~ p", "p", "div + p", "div - p"],
    correct: "div ~ p",
  }, {
    id: "",
    question: "The CSS property used to draw a line around the elements outside the border?",
    options: ["border", "padding", "outline", "line"],
    correct: "outline",
  }, {
    id: "",
    question: "Which of the following CSS properties is used to add shadow to the text?",
    options: ["text-stroke", "text-shadow", "text-overflow", "text-decoration"],
    correct: "text-shadow",
  }, {
    id: "",
    question: "If you want to make the rounded border, or rounded corners around then which element you will be used?",
    options: ["border-radius", "border-collapse", "border-spacing", "None of these"],
    correct: "border-radius",
  }, {
    id: "",
    question: "How many ways can CSS be written in?",
    options: ["1", "2", "3", "4"],
    correct: "3",
  }, {
    id: "",
    question: "The CSS property used to set the indentation of the firtst line in a block of text is - ",
    options: ["text-stroke", "text-indent", "text-decoration", "text-overflow"],
    correct: "text-indent",
  }, {
    id: "",
    question: "What is the primary purpos of CSS in web development?",
    options: ["To create a web page", "To create style web page", "To store data", "To paragraph web application"],
    correct: "To create style web page",
  }, {
    id: "",
    question: "Which of the following is a valid way to integrate CSS into a webpage?",
    options: ["Inline", "External", "Internal", "All three ways"],
    correct: "All three ways",
  }, {
    id: "",
    question: "Which CSS property is used to change the text color of an element?",
    options: ["text-color: red;", "font:color: red;", "color: red;", "backgournd-color: red;"],
    correct: "color: red;",
  }, {
    id: "",
    question: "Givn the following CSS, what color will the <h1> text be?, like → body{color:white;} h1{color:yellow;}",
    options: ["Red", "Green", "Yellow", "Black"],
    correct: "Yellow",
  }, {
    id: "",
    question: "Which selector is used to target an element on its id?",
    options: ["#id_name", ".id_name", "*id_name", "None of these"],
    correct: "#id_name",
  }, {
    id: "",
    question: "What does the universal selector (*) do in CSS?",
    options: ["Targets no elements", "Targets all elements in a documents", "Targets the body element", "Targets elements with a specific id"],
    correct: "Targets all elements in a documents",
  }, {
    id: "",
    question: "How do you select elements with the class name 'mspoint'?",
    options: [".mspoint", "#mspoint", "*mspoint", "mspoint"],
    correct: ".mspoint",
  }, {
    id: "",
    question: "What componets make up the CSS Box Model?",
    options: ["Copntent, Padding, Border, Margin", "Padding, Margin, Border, Shadow", "Content, Margin, Border, Outline,", "Content, Padding, Shadow, Margin"],
    correct: "Copntent, Padding, Border, Margin",
  },{
    id: "",
    question: "Which property is used to set the space between the border of an element and its content?",
    options: ["Margin", "Padding", "Border", "Outline"],
    correct: "Padding",
  }, {
    id: "",
    question: "What does the 'box-sizing' property do?",
    options: ["Change the CSS Box Model calculation", "Alters the display property", "Adjusts the border thickness", "Modifies the margin size"],
    correct: "Change the CSS Box Model calculation",
  }, {
    id: "",
    question: "Which properties is used to control outer space aound an element?",
    options: ["Padding", "Margin", "Border", "Content"],
    correct: "Margin",
  },{
    id: "",
    question: "How can you make the total widhth of an element be 50px including padding and border?",
    options: ["Set width to 50px without 'box-sizing' property", "Use 'box-sizing: border-box;' with width set to 50px", "Use 'box-sizing: content-box;' with width set to 50px", "Set width, padding, and border so their sum is 50px"],
    correct: "Use 'box-sizing: border-box;' with width set to 50px",
  }, {
    id: "",
    question: "What is the default value of the 'box-sizing' property?",
    options: ["content-cox", "border-box", "jpadding-box", "margin-box"],
    correct: "content-cox",
  }, {
    id: "",
    question: "Given an element with padding:20px; and width: 200px;, what is the total width of the element?",
    options: ["200px", "220px", "240px", "260px"],
    correct: "240px",
  },{
    id: "",
    question: "Which of the folowing is not a type of combitor in CSS?",
    options: [">", "~", "+", "*"],
    correct: "*",
  }, {
    id: "",
    question: "Which of these protocols would enable a hyperlink to easily access any file on the available local file system?",
    options: ["ftp", "https", "file", "telnet"],
    correct: "file",
  }, {
    id: "",
    question: "Which CSS3 Color Feature is like RGB color and adds the alpha channel value so as to specify a color’s opacity?",
    options: ["RGB", "RGBa", "RGBalpha", "AlphaRGB"],
    correct: "RGBa",
  },{
    id: "",
    question: "Which property sets the actual amount of spacing between the various letters?",
    options: ["letter-spacing", " letter-space", "line-height", "space"],
    correct: " letter-space",
  }, {
    id: "",
    question: "he screen media type can be used with:",
    options: ["handheld screens", "all devices", "computer devices", "television-type devices"],
    correct: "computer devices",
  }, {
    id: "",
    question: "What tag do you use to directly write the style rules within a document found within the document’s head?",
    options: ["css", "style", "php", "script"],
    correct: "style",
  },{
    id: "",
    question: " No single, integrated ____________________ specification exists, because it gets split into various separate modules:",
    options: ["CSS4", "CSS3", "CSS2", "CSS1"],
    correct: "CSS4",
  }, {
    id: "",
    question: "Which value is a slightly bolder weight than the standard bold in the font attribute?",
    options: ["dark", "lighter", "light", "emphasize"],
    correct: "dark",
  }, {
    id: "",
    question: "The CSS property that is equivalent to the align attribute is:",
    options: ["text-align", "float", "ext-align & float", "centre"],
    correct: "float",
  },{
    id: "",
    question: "Which of these functions would convert the color of an element by the filter property to a grey shade, for use?",
    options: ["grayscale()", "shade()", "brightness()", "black()"],
    correct: "",
  }, {
    id: "",
    question: "The “color:red” in CSS can be known as _____________:",
    options: ["Value", "Declaration", "Selector", "Rule"],
    correct: "Declaration",
  }, {
    id: "",
    question: "The correct syntax to give a line over text is -",
    options: ["text-decoration: underline", "text-decoration: overline", "text-decoration: none", "text-decoration: line-through"],
    correct: "text-decoration: overline",
  },{
    id: "",
    question: "text-decoration: underline",
    options: ["quotes property", "None of the above", "hyphens property", "z-index property"],
    correct: "quotes property",
  }, {
    id: "",
    question: "The CSS property which is used to define the set the difference between two lines of your content is - ",
    options: ["None of these", "line-height property", "max-height property", "min-height property"],
    correct: "line-height property",
  }, {
    id: "",
    question: "The CSS property used to set the minimum width of the element's content box is -",
    options: ["max-width property", "min-width property", "width property", "All of the above"],
    correct: "min-width property",
  },{
    id: "",
    question: "Which of the following selector in CSS is used to select the elements that do not match the selectors?",
    options: [":! selector", ":empty selector", ":not selector", "None of the above"],
    correct: ":not selector",
  }, {
    id: "",
    question: "The CSS property used to set the distance between the borders of the adjacent cells in the table is.",
    options: ["All of these", "border-spacing", "border-radius", "border-collapse"],
    correct: "border-spacing",
  }, {
    id: "",
    question: "Which of the following CSS property is used to specify the space between every letter inside an element?",
    options: ["alpha-spacing", "letter-spacing", "character-spacing", "alphabet-spacing"],
    correct: "letter-spacing",
  },{
    id: "",
    question: "The HTML attribute used to define the inline styles is",
    options: ["style", "styles", "class", "None of these"],
    correct: "style",
  }, {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  }, {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },{
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  }, {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  }, {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },{
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  }, {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  }, {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },{
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  }, {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  }, {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  
  {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  }, {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  }, {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },{
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  }, {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  }, {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },{
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  }, {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  }, {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },{
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  }, {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  }, {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },{
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  }, {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  }, {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",
  },
  
  
  {
    id: "",
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