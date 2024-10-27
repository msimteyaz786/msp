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
    question: "Why JavaScript and java have similar name?",
    options: ["JavaScript syntax is loosely based on java's", "Java and JavaScript are same", "JavaScript and Java developed by same company", "JavaScript and Java invented by same person"],
    correct: "JavaScript syntax is loosely based on java's",
  },
  {
    id: "",
    question: "Inside which  html element do we put the JavaScript?",
    options: ["script tag", "js tag", "javascript tag", "scripting"],
    correct: "script tag",
  },
  {
    id: "",
    question: "JavaScript entities start with __________ and end with __________.",
    options: ["Comma, Colon", "Ampersand, Semicolon", "Colon, Semicolon", "Semicolon, Ampersand"],
    correct: "Ampersand, Semicolon",
  },
  {
    id: "",
    question: "JavaScript code is written inside file having extension name of ________.",
    options: [".js", ".jvs", ".javascript", ".jsc"],
    correct: ".js",
  },
  {
    id: "",
    question: "Who was developed JavaScript?",
    options: ["Brendan Eich", "Brendan Rich", "John Eckerl", "John Mauchy"],
    correct: "Brendan Eich",
  },
  {
    id: "",
    question: "JavaScripted is an ___________ language?",
    options: ["Interpreted", "Compiled", "Interpreted and Compiled Both", "None of these"],
    correct: "Interpreted and Compiled Both",
  },
  {
    id: "",
    question: "JavaScript is designed for following purpose ___________.",
    options: ["To perform server side scripting operation", "To add interactivity to HTML Pages", "To Excute query related to DB on server", "To style HTML pages"],
    correct: "To add interactivity to HTML Pages",
  },
  {
    id: "",
    question: "Is JavaScript case-sensitive?",
    options: ["Yes", "No", "Nothing", "None of these"],
    correct: "Yes",
  },
  {
    id: "",
    question: "JavaScript runs was developed by __________.",
    options: ["Netscapce Communications", "Microsoft Corporation", "Sun Microsystem", "Oracle"],
    correct: "Netscapce Communications",
  }, {
    id: "",
    question: "Which programming language syntax influences JavaScript syntax?",
    options: ["C", "C++", "Java", "COBOL"],
    correct: "Java",
  },
  {
    id: "",
    question: "When a user views a page containing a JavaScripting program, which machine actually executes the script?",
    options: ["The User's machine running a web browsers", "The web server", "A central machine deep within Netscape's corporate offices", "None of these"],
    correct: "The User's machine running a web browsers",
  }, {
    id: "",
    question: "________ JavaScript is also called client-side JavaScript?",
    options: ["Microsft", "Navigator", "LiveWire", "Native"],
    correct: "Navigator",
  },
  {
    id: "",
    question: "_________ JavaScript is also called server-side JavaScript?",
    options: ["Microsft", "Navigator", "LiveWire", "Native"],
    correct: "LiveWire",
  }, {
    id: "",
    question: "Which is a statement terminator in JavaScript?",
    options: ["comma (,)", "semi colon (;)", "colon (:)", "full stop (.)"],
    correct: "semi colon (;)",
  },
  {
    id: "",
    question: "What are variable used for in JavaScript Programs?",
    options: ["Storing numbers, dates, or other values", "Causing high-school algebra flashbacks", "Varying randomly", "All of these"],
    correct: "Storing numbers, dates, or other values",
  }, {
    id: "",
    question: "What is the correct JavaScript syntax to write 'MS Point'?",
    options: ['document.write("MS Point")', 'system.out.println("MS Point")', 'println("MS Point")', 'prinf("MS Point")'],
    correct: 'document.write("MS Point")',
  },
  {
    id: "",
    question: "Which type of JavaScript language is ___",
    options: ["Object-Oriented", "Object-Based", "Assembly-language", "High-level"],
    correct: "Object-Based",
  }, {
    id: "",
    question: "Which one of the following also known as Conditional Expression?",
    options: ["Alternative to if-else", "Switch statement", "Immediate if", "If-then-else statement"],
    correct: "Immediate if",
  },
  {
    id: "",
    question: "Which of the following is not a valid javaScript variable name?",
    options: ["2names", "FirstAndLast", "_first_and_last_name", "None of these"],
    correct: "2names",
  }, {
    id: "",
    question: "Which  key is used to declare a variable in JavaScript?",
    options: ["Const", "Dim", "Var", "Let"],
    correct: "Var",
  },
  {
    id: "",
    question: "Which bracket is used to write object in JavaScript?",
    options: ["Curve Breacket", "Curly Bracket", "Square Bracket", "Corner Bracket"],
    correct: "Curly Bracket",
  }, {
    id: "",
    question: "JavaScript is interpreted by __________?",
    options: ["Client", "Object", "Server", "None of these"],
    correct: "Client",
  },
  {
    id: "",
    question: "Using _______ statement is how you test for a specific condition.",
    options: ["Select", "If", "Switch", "For"],
    correct: "If",
  }, {
    id: "",
    question: "JavaScript can be written ___________?",
    options: ["Directly into JS file and included into HTML", "Directly on the server page", "Directly onto HTML pages", "Directly itno the CSS file"],
    correct: "Directly into JS file and included into HTML",
  },
  {
    id: "",
    question: "The script tag must be placed in _____________.",
    options: ["The head tag", "The head or body tag", "The title or head", "After the body tag"],
    correct: "The head or body tag",
  }, {
    id: "",
    question: "What are the types of Pop-up boxes available in JavaScript?",
    options: ["Alert", "Prompt", "Confirm", "All of the above"],
    correct: "All of the above",
  },
  {
    id: "",
    question: "Which brackets is used to write array in JavaScript?",
    options: ["Square Bracket", "Curve Bracket", "Curly Bracket", "Corner Bracket"],
    correct: "Square Bracket",
  }, {
    id: "",
    question: "How many types of operations are there in JavaScript?",
    options: ["3", "6", "8", "4"],
    correct: "4",
  },
  {
    id: "",
    question: "How many part are there in 'For Loop'?",
    options: ["3", "6", "8", "4"],
    correct: "3",
  }, {
    id: "",
    question: "Which type of JavaScript language?",
    options: ["High-level", "Assembly-language", "Object-Based", "Object-Oriented"],
    correct: "Assembly-language",
  },
   {
    id: "",
    question: "In JavaScript, what is a block of statement?",
    options: ["block that contains a single statement", "both conditional block and a single statement", "block that combines a number of statements into a single compound statement", "Conditional block"],
    correct: "block that combines a number of statements into a single compound statement",
  },
  {
    id: "",
    question: "When interpreter encounters an empty statements, what it will do:",
    options: ["Shows a warning", "Prompts to complete the statement", "Throws an error", "Ignores the statements"],
    correct: "Ignores the statements",
  }, {
    id: "",
    question: 'The "function" and "var" are known as:',
    options: ["Prototypes", "Declaration statements", "Data types", "Keywords"],
    correct: "Declaration statements",
  },
  {
    id: "",
    question: "Which one of the following is the correct way for calling the JavaScript code?",
    options: ["Preprocessor", "Triggering Event", "RMI", "Function/Method"],
    correct: "Function/Method",
  }, {
    id: "",
    question: "Which of the following type of a variable is volatile?",
    options: ["Mutable variable", "Dynamic variable", "Immutable variable", "Volatile variable"],
    correct: "Mutable variable",
  },
  {
    id: "",
    question: "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints ______.",
    options: ["Prints an exception error", "Prints an overflow error", 'Displays "Infinity"', "Prints the value as such"],
    correct: 'Displays "Infinity"',
  }, {
    id: "",
    question: "In the JavaScript, which one of the following is not considered as an error:",
    options: ["Syntax error", "Missing of semicolons", "Division by zero", "Missing of Bracket"],
    correct: "Division by zero",
  },
  {
    id: "",
    question: "Which of the following number object function returns the value of the number?",
    options: ["valueOf()", "toLocaleString()", "toPrecision()", "toString()"],
    correct: "valueOf()",
  }, {
    id: "",
    question: "In JavaScript the x===y statement implies that:",
    options: ["Both x and y are equal in value, type and reference address as well.", "Both are x and y are equal in value only.", "Both are equal in the value and data type.", "Both are not same at all."],
    correct: "Both are equal in the value and data type.",
  },
  {
    id: "",
    question: 'Choose the correct snippet from the following to check if the variable "a" is not equal the "NULL":',
    options: ["if(a!==null)", "if (a!)", "if(a!null)", "if(a!=null)"],
    correct: "if(a!==null)",
  }, {
    id: "",
    question: "In JavaScript, what will be used for calling the function definition expression:",
    options: ["Function prototype", "Function literal", "Function calling", "Function declaration"],
    correct: "Function literal",
  },
  {
    id: "",
    question: "Which one of the following is used for the calling a function or a method in the JavaScript:",
    options: ["Property Access Expression", "Primary expression", "Invocation expression", "Functional expression"],
    correct: "Invocation expression",
  }, {
    id: "",
    question: 'The "new Point(3,2)", is a kind of _______ expression.',
    options: ["Object Creation Expression", "Primary Expression", "Invocation Expression", "Constructor Calling Expression"],
    correct: "Object Creation Expression",
  },
  {
    id: "",
    question: "Which one of the following operator is used to check weather a specific property exists or not:",
    options: ["Exists", "exist", "within", "in"],
    correct: "in",
  }, {
    id: "",
    question: "Which one of the following is an ternary operator:",
    options: ["?", ":", "-", "+"],
    correct: "?",
  },
  {
    id: "",
    question: 'What we will get if we compare the "one" with "8" using the less than operator ("one"<8)?',
    options: ["False", "True", "NaN", "Undefined"],
    correct: "False",
  }, {
    id: "",
    question: "Which one of the following is known as the Equality operator, which is used to check whether the two values are equal or not:",
    options: ["=", "===", "==", "&&"],
    correct: "==",
  },
  {
    id: "",
    question: "Which one of the following operator returns false if both values are equal?",
    options: ["!", "!==", "!=", "All of the above"],
    correct: "!=",
  },
  {
    id: "",
    question: "In a case, where the value of the operator is NULL, the typeof returned by the unary operator is___.",
    options: ["undefined", "string", "boolean", "object"],
    correct: "object",
  },{
    id: "",
    question: "Which one of the following is not a keyword:",
    options: ["use strict", "debugger", "with", "if"],
    correct: "use strict",
  },{
    id: "",
    question: "Which one of the following symbol is used for creating comments in the javascript:",
    options: ["//", "/* */", "Both", "None"],
    correct: "//",
  },{
    id: "",
    question: "What are the three important manipulations for a loop on a loop variable?",
    options: ["Updation, Incrementation, Initialization", "Initialization, Testing, Incrementation", "Testing, Updation, Testing", "Initialization, Testing, Updation"],
    correct: "Initialization, Testing, Updation",
  },{
    id: "",
    question: 'Which one of the following is not considered as "statement" in the JavaScript?',
    options: ["use strict", "debugger", "if", "with"],
    correct: "use strict",
  },{
    id: "",
    question: "A set of unordered properties that, has a name and value is called______.",
    options: ["Object", "Serialized Object", "Array", "String"],
    correct: "Object",
  },{
    id: "",
    question: "A collection of elements of the same data type which may either in order or not, is called _____.",
    options: ["String", "Array", "Serialized Object", "Object"],
    correct: "Array",
  },{
    id: "",
    question: "The linkage of a set of prototype objects is known as______.",
    options: ["prototype stack", "prototype", "prototype class", "prototype chain"],
    correct: "prototype chain",
  },{
    id: "",
    question: "If a function which does not return a value is known as _____.",
    options: ["Static function", "Procedures", "Method", "Dynamic function"],
    correct: "Procedures",
  },{
    id: "",
    question: "Which one of the following keywords is used for defining the function in the JavaScript?",
    options: ["Void", "init", "function", "main"],
    correct: "function",
  },{
    id: "",
    question: "Which one of the following is not a example of closures?",
    options: ["Graphics", "Objects", "Functions", "Variables"],
    correct: "Graphics",
  },{
    id: "",
    question: "Which one of the following utilize the CPU cycles in a massive manner?",
    options: ["GUI (Graphic User Interface)", "Statically generated graphics", "Generic scoping", "Dynamically generated graphics"],
    correct: "Dynamically generated graphics",
  },{
    id: "",
    question: "In JavaScript, what kind of scoping is used?",
    options: ["Lexical scoping", "Segmental scoping", "Sequential scoping", "Literal scoping"],
    correct: "Lexical scoping",
  },{
    id: "",
    question: "Which of the following is the correct syntax to print a page using JavaScript?",
    options: ["print();", "printf();", "printint();", "None of these"],
    correct: "print();",
  },{
    id: "",
    question: "Which of the following is not a JavaScript Data Types?",
    options: ["Boolean", "Undefined", "Number", "Float"],
    correct: "Float",
  },{
    id: "",
    question: 'Which of the following syntax can be used to write "MS Point" in an alert box?',
    options: ['window.alertBox("MS Point");', 'window.msgBox("MS Point");', 'window.alert("MS Point");', 'window.msg("MS Point");'],
    correct: 'window.alert("MS Point");',
  },{
    id: "",
    question: "Which of the following is not a JavaScript framework or library?",
    options: ["Polymer", "Meteor", "jQuery", "Cassandra"],
    correct: "Cassandra",
  },{
    id: "",
    question: "What are the different types of Pop up boxes available in JavaScript?",
    options: ["Alert", "Prompt", "Confirm", "All of the above"],
    correct: "All of the above",
  },{
    id: "",
    question: "What are the different types of errors in JavaScript?",
    options: ["Load time errors", "Run time errors", "Logical Errors", "All of the above"],
    correct: "Run time errors",
  },{
    id: "",
    question: "Which of the following built-in method is used to remove the last element from an array and return that element?",
    options: ["last()", "pop()", "get()", "None of these"],
    correct: "pop()",
  },{
    id: "",
    question: "Which of the following is a server-side JavaScript object?",
    options: ["Date", "FileUpload", "File", "Function"],
    correct: "FileUpload",
  },{
    id: "",
    question: "Which of the following is the correct syntax to create a cookie using JavaScript?",
    options: ["cookie = 'key1 = value1; key2 = value2; expires = date';", "cookie = 'key2 = value1; 2key2 = value; expires = date';", "cookie = 'key = value; key = value2; expires = date';", "cookie = 'key= value1; 2key = value; expires = date';"],
    correct: "cookie = 'key1 = value1; key2 = value2; expires = date';",
  },{
    id: "",
    question: "Which of the following JavaScript operator is used to assign a value to a variable based on some condition?",
    options: ["Logical Operator", "Conditional operator", "Bitwise Operator", "Assignment operator"],
    correct: "Logical Operator",
  },{
    id: "",
    question: "Which of the following is the correct way to write a comment in JavaScript code?",
    options: ["/*This is a comment*/", "//This is a comment", "**This is a comment**", "$This is a comment$"],
    correct: "//This is a comment",
  },{
    id: "",
    question: "What was the original name of JavaScript when it discovered?",
    options: ["LiveScript", "Mocha", "JScript", "EScript"],
    correct: "Mocha",
  },{
    id: "",
    question: "Which of the following is the correct statement of WHILE loop start?",
    options: ["while (i <= 10)", "while (i <= 10; i++)", "while i = 1 to 10", "None of These"],
    correct: "while (i <= 10)",
  },{
    id: "",
    question: "What is JavaScript?",
    options: ["JavaScript is a scripting language used to make the website interactive", "avaScript is an assembly language used to make the website interactive", "JavaScript is a compiled language used to make the website interactive", "None of the mentioned"],
    correct: "JavaScript is a scripting language used to make the website interactive",
  },{
    id: "",
    question: "Which of the following is correct about JavaScript?",
    options: ["JavaScript is an Object-Based language", "JavaScript is Assembly-language", "avaScript is an Object-Oriented language", "avaScript is a High-level language"],
    correct: "JavaScript is an Object-Based language",
  },{
    id: "",
    question: "Which of the following is not javascript data types?",
    options: ["Null type", "Undefined type", "Number type", "All of the mentioned"],
    correct: "All of the mentioned",
  },{
    id: "",
    question: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
    options: ["Position", "Window", "Standard", "Location"],
    correct: "Window",
  },{
    id: "",
    question: "Which of the following scoping type does JavaScript use?",
    options: ["Sequential", "Segmental", "Lexical", "Literal"],
    correct: "Lexical",
  },{
    id: "",
    question: "Which of the following is not a framework?",
    options: ["JavaScript .NET", "JavaScript", " Cocoa JS", "jQuery"],
    correct: "JavaScript",
  },{
    id: "",
    question: "Which of the following is the property that is triggered in response to JS errors?",
    options: ["onclick", "onerror", "onmessage", "onexception"],
    correct: "onerror",
  },{
    id: "",
    question: "Which of the following is not an error in JavaScript?",
    options: ["Missing of semicolons", "Syntax error", "Division by zero", "Missing of Bracket"],
    correct: "Division by zero",
  },{
    id: "",
    question: "What is the purpose of JavaScript in web development?",
    options: ["What is the purpose of JavaScript in web development?", "To style web pages", "To add interactivity and dynamic content to web pages", "To store data on the server"],
    correct: "To add interactivity and dynamic content to web pages",
  },{
    id: "",
    question: "Which keyword is used for declaring a variable in JavaScript that can be reassigned?",
    options: ["const", "var", "let", "static"],
    correct: "let",
  },{
    id: "",
    question: "In JavaScript, which of the following is a valid variable name?",
    options: ["2names", "$name", "-name", "name2"],
    correct: "$name",
  },{
    id: "",
    question: "Which data type in JavaScript is used to represent logical values?",
    options: ["String", "Boolean", "Number", "Undefined"],
    correct: "Boolean",
  },{
    id: "",
    question: "What does the undefined value in JavaScript represent?",
    options: ["An unassigned variable", "A null value", "A logical false", "An error condition"],
    correct: "An unassigned variable",
  },{
    id: "",
    question: "What will be the output of the following code? console.log(typeof null);",
    options: ["'object'", "'null'", "'undefined'", "'number'"],
    correct: "'object'",
  },{
    id: "",
    question: "Which of the following is an example of a loosely typed language?",
    options: ["Java", "C++", "JavaScript", "Python"],
    correct: "JavaScript",
  },{
    id: "",
    question: "Which operator is used to check both the value and the type of a variable in JavaScript?",
    options: ["==", "===", "!=", "!=="],
    correct: "===",
  },{
    id: "",
    question: "What is the output of the following code snippet? var a = 10; console.log(a);",
    options: ["'10'", "undefined", "null", "10"],
    correct: "10",
  },{
    id: "",
    question: "Which statement is used to execute a block of code multiple times in JavaScript?",
    options: ["for", "if", "return", "break"],
    correct: "for",
  },{
    id: "",
    question: "What does the if statement in JavaScript do?",
    options: ["Executes a block of code based on a condition", "Prints a message to the console", "Loops through a block of code", "Declares a variable"],
    correct: "Executes a block of code based on a condition",
  },{
    id: "",
    question: "Which of the following is not a loop structure in JavaScript?",
    options: ["while", "for", "if", "do-while"],
    correct: "if",
  },{
    id: "",
    question: "In a switch statement, what keyword is used to terminate a case in JavaScript?",
    options: ["end", "break", "stop", "exit"],
    correct: "break",
  },{
    id: "",
    question: "In a for loop, what are the three optional expressions, separated by semicolons?",
    options: ["Initializer, Condition, Incrementer", "Condition, Incrementer, Initializer", "Incrementer, Initializer, Condition", "Condition, Initializer, Incrementer"],
    correct: "Initializer, Condition, Incrementer",
  },{
    id: "",
    question: "What is the purpose of a function in JavaScript?",
    options: ["To create web pages", "To encapsulate code that performs a specific task", "To repeat a task multiple times", "To store data"],
    correct: "To encapsulate code that performs a specific task",
  },{
    id: "",
    question: "How do you define a function in JavaScript?",
    options: ["function = myFunc() {}", "function: myFunc() {}", "function myFunc() {}", "myFunc() = function {}"],
    correct: "function myFunc() {}",
  },{
    id: "",
    question: "Which of the following is true about arrow functions in JavaScript?",
    options: ["They do not have their own this context", "They can be used as constructors", "They must have a return statement", "They are the same as traditional functions"],
    correct: "They do not have their own this context",
  },{
    id: "",
    question: "Which of the following is true about arrow functions in JavaScript?",
    options: ["They do not have their own this context", "They can be used as constructors", "They must have a return statement", "They are the same as traditional functions"],
    correct: "They do not have their own this context",
  },
  //{
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",
  // },{
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",
  // },
  // {
  //   id: "",
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