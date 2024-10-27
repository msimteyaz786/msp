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
    question: "Who developed Python Programming Language?",
    options: ["Wick van Rossum", "Guido van Rossum", "Rasmus Lerdorf", "Niene Stom"],
    correct: "Guido van Rossum",
  },
  {
    id: "1",
    question: "Which of the following is a valid Python comment?",
    options: ['None of these', "/* */", "#", "/ /"],
    correct: "#",
  },
  {
    id: "",
    question: "In which year was the Python language developed?",
    options: ["1995", "1989", "1990", "1992"],
    correct: "1989",
  },{
    id: "",
    question: "Which of the following is an invalid variable?",
    options: ["my_string_1", "1st_string", "foo", "_"],
    correct: "1st_string",
  },{
    id: "",
    question: "In which language is python written?",
    options: ["English", "C", "PHP", "All of these"],
    correct: "C",
  },{
    id: "",
    question: "Which one of the following is the correct extension of the pythone file?",
    options: [".python", ".py", ".p", "All of these"],
    correct: ".py",
  },{
    id: "",
    question: "Which of the following cannot be a variable?",
    options: ["_init_", "in", "it", "on"],
    correct: "in",
  },{
    id: "",
    question: "Which of the following statement is true for a python?",
    options: ["Python is a high level programmign language", "Python is an interpreted language", "Python is an object-oriented language", "All of these"],
    correct: "All of these",
  },{
    id: "",
    question: "What is the answer to this expression, 22 % 3 is ?",
    options: ["7", "1", "0", "5"],
    correct: "1",
  },{
    id: "",
    question: "Which one of the following is not a keyword in Python language?",
    options: ["True", "and", "switch", "None of these"],
    correct: "switch",
  },{
    id: "",
    question: "What will be the output of the following code? a=5; b=15 then print(b/a)",
    options: ["3.0", "3", "45", "1/3"],
    correct: "3.0",
  },{
    id: "",
    question: "What datatype is the object below?",
    options: ["List", "Diction", "String", "Tuple"],
    correct: "List",
  },{
    id: "",
    question: "Which of the following is not valid relational operator",
    options: ["<", "=", ">=", "<="],
    correct: "=",
  },{
    id: "",
    question: "Which is the correct operator for pow(x,y)?",
    options: ["x^y", "x**y", "x^^y", "None of these"],
    correct: "x**y",
  },{
    id: "",
    question: "What is the return type of function id?",
    options: ["int", "char", "float", "double"],
    correct: "int",
  },{
    id: "",
    question: "Which of the following can not be used as identifiers?",
    options: ["Space", "Letters", "Digit", "Underscore"],
    correct: "Space",
  },{
    id: "",
    question: "Which of these in not a core data type?",
    options: ["List", "Tuples", "DIctionary", "Class"],
    correct: "Class",
  },{
    id: "",
    question: "What is the type of int?",
    options: ["Float", "Boolean", "Integer", "Complex"],
    correct: "Float",
  },{
    id: "",
    question: "Which of the following is a valid identifier?",
    options: ["1return", "return 1", "return", "$return"],
    correct: "return 1",
  },{
    id: "",
    question: "Which of the following is a valid string constant?",
    options: ['"Programming"', "Programming", "'Programming", "$programming$"],
    correct: '"Programming"',
  },{
    id: "",
    question: "The result of a Relational operation is always:",
    options: ["Either True or False", "Is less than or is more than", "Is equal or lesss or more", "All of these"],
    correct: "Either True or False",
  },{
    id: "",
    question: "Which of the follwoing is false in 'python' programming language?",
    options: ["Undercore can be used as variable names", "Variable names can contain digit", "Variable names van contain blank space", "Capital letters can be used in variable names."],
    correct: "Variable names van contain blank space",
  },{
    id: "",
    question: "Which of the following is not a keyword?",
    options: ["eval", "assert", "nonlocal", "pass"],
    correct: "eval",
  },{
    id: "",
    question: "The keyword used to transfer control from a function back to the calling function is",
    options: ["jump", "return", "go back", "else"],
    correct: "return",
  },{
    id: "",
    question: "Which of the follwoing language is predecessor to 'python' programming language?",
    options: ["A", "ABC", "ADA", "C++"],
    correct: "ABC",
  },{
    id: "",
    question: "if a=8, b=3 and c=-5 are integers, then value of a*b/c is",
    options: ["-4", "4.8", "+2.8", "+3"],
    correct: "4.8",
  },{
    id: "",
    question: "Python is known as:",
    options: ["A compiled language", "An interpreted language", "An assembly language", "A machine language"],
    correct: "An interpreted language",
  },{
    id: "",
    question: "Which version of Python removed the print statement?",
    options: ["Python 3.x", "Python 4.x", "Python 2.x", "Python 1.x"],
    correct: "Python 3.x",
  },{
    id: "",
    question: "Python is a:",
    options: ["High-level language", "Machine-level language", "Middle-level language", "Low-level language"],
    correct: "High-level language",
  },{
    id: "",
    question: "Which of these data types does Python not natively support?",
    options: ["Lists", "Tuples", "Arrays", "Dictionaries"],
    correct: "Arrays",
  },{
    id: "",
    question: "Which of the following is a mutable data type in Python?",
    options: ["String", "Tuple", "List", "Integer"],
    correct: "List",
  },{
    id: "",
    question: "What data type would you use to store a whole number in Python?",
    options: ["bool", "str", "float", "int"],
    correct: "int",
  },{
    id: "",
    question: "Which of the following is not a Python built-in data type?",
    options: ["dict", "array", "set", "frozenset"],
    correct: "array",
  },{
    id: "",
    question: "What will be the data type of the variable x after this assignment: x = 3.5?",
    options: ["int", "float", "str", "complex"],
    correct: "float",
  },{
    id: "",
    question: "Which of the following is an immutable data type?",
    options: ["Tuples", "Sets", "Dictionaries", "Lists"],
    correct: "Tuples",
  },{
    id: "",
    question: "Which function is used to read input from the console in Python?",
    options: ["input()", "read()", "scan()", "getInput()"],
    correct: "input()",
  },{
    id: "",
    question: "What is the default type of data returned by the input() function in Python 3.x?",
    options: ["int", "string", "boolean", "list"],
    correct: "string",
  },{
    id: "",
    question: "Which function in Python is used to display data as output?",
    options: ["display()", "print()", "output()", "show()"],
    correct: "print()",
  },{
    id: "",
    question: "What is the purpose of the end parameter in the print() function?",
    options: ["To add a space at the end", "To specify the string appended after the last value", "To break the line", "To end the script"],
    correct: "To specify the string appended after the last value",
  },{
    id: "",
    question: "What does the sep parameter do in the print() function?",
    options: ["Separates lines", "Specifies separator between values", "Separates syntax errors", "None of these"],
    correct: "Specifies separator between values",
  },{
    id: "",
    question: "Pseudocode: Print each element in list [1, 2, 3] with a space in between",
    options: ["123", "[1, 2, 3]", "37623", "37623"],
    correct: "123",
  },{
    id: "",
    question: 'Identify the error: print("Hello World!"))',
    options: ["Extra parenthesis", "No error", "Missing parenthesis", "Missing quotation marks"],
    correct: "Extra parenthesis",
  },{
    id: "",
    question: "What is the purpose of an if statement in Python?",
    options: ["To loop through a sequence", "To execute a block conditionally", "To define a function", "To handle exceptions"],
    correct: "To execute a block conditionally",
  },{
    id: "",
    question: "What is the result of round(0.5) - round(-0.5)?",
    options: ["0.0", "2.0", "1.0", "0.25"],
    correct: "0.0",
  },{
    id: "",
    question: "The readlines() method returns ___________.",
    options: ["str", "A list of lines", "A list of single character", "A list of integers"],
    correct: "A list of lines",
  },{
    id: "",
    question: "Open() function returns a file object called _____________.",
    options: ["File handle", "Object handle", "Read handle", "Write handle"],
    correct: "File handle",
  },{
    id: "",
    question: "Which are two built-in function to read a line of text from standard input, which by default comes from the keyboard?",
    options: ["Raw input and output", "Input & Scan", "Scane and Scanner", "None of these"],
    correct: "Raw input and output",
  },{
    id: "",
    question: "To include the use functions which are present in the library, we must use the options:",
    options: ["import random", "random.h", "import.random", "ramdom.random"],
    correct: "import random",
  },{
    id: "",
    question: "Which module is to be imported for using randint() function?",
    options: ["random", "randrange", "randomrange", "rand"],
    correct: "random",
  },{
    id: "",
    question: "What does the basic model of computation decribe?",
    options: ["How to solve complex problem", "How computers execute programs", "How to write efficient algorithms", "How to optimize memory usage"],
    correct: "How to solve complex problem",
  },{
    id: "",
    question: "What is another term for pseudocode?",
    options: ["True code", "False code", "Representation of code", "False code"],
    correct: "False code",
  },{
    id: "",
    question: "What is role of memory in computation?",
    options: ["Storing instructions and data", "Executing Calculations", "Reading instructions from the notepad", "Processing input/output operations?"],
    correct: "Storing instructions and data",
  },{
    id: "",
    question: "Which of the name following is NOT a valid python indetifier?",
    options: ["myName", "1name", "_area", "_sum1"],
    correct: "1name",
  },{
    id: "",
    question: "Which generation of programming language is machine language?",
    options: ["First Generation", "second Generation", "Third Generation", "Fourth Generation"],
    correct: "First Generation",
  },{
    id: "",
    question: "When was the first version of Python launched?",
    options: ["1989", "1991", "2008", "2000"],
    correct: "1991",
  },{
    id: "",
    question: "When was the latest version of Python launched?",
    options: ["1989", "1991", "2008", "2000"],
    correct: "2008",
  },{
    id: "",
    question: "Which keyword is used to exit from the nearest enclosing loop in Python?",
    options: ["Break", "contuniu", "return", "None of these"],
    correct: "Break",
  },{
    id: "",
    question: "What is the primary character of high level language?",
    options: ["They are easier for programmer to understand and use", "They are written in binary code", "They are difficult for humans to understand", "They are closer to machine language"],
    correct: "They are easier for programmer to understand and use",
  },{
    id: "",
    question: "What does the sep argument in the print() function do?",
    options: ["Sets the separator between printed objects.", "Sets the end character for the printed output", "Sets the starting character for the printed outpur.", "None of these"],
    correct: "Sets the separator between printed objects.",
  },{
    id: "",
    question: "What is the primary function of an assembler?",
    options: ["Translates accembly language into machine language", "Converts high-level languaeg into machine language", "Executes programs directly", "Tests software for bugs."],
    correct: "Translates accembly language into machine language",
  },{
    id: "",
    question: "When does the else clause on a loop execute?",
    options: ["Wgen the loop is terminated with a break statement", "When the loop completes all iterations without encountering a break statement", "When the loop is nested", "When the loop encounters an error"],
    correct: "When the loop completes all iterations without encountering a break statement",
  },{
    id: "",
    question: "Which keyword is used to check if a value exists in a sequence like a list or a string?",
    options: ["in", "for", "is", "assert"],
    correct: "in",
  },{
    id: "",
    question: "Which keyword is used to declare a function or method in Python?",
    options: ["def", "del", "return", "assert"],
    correct: "def",
  },{
    id: "",
    question: "What is the purpose of the input() function in Python?",
    options: ["A display output on the console.", "To read input from the user", "To perform mathematical calculations", "To imort external modules."],
    correct: "To read input from the user",
  },{
    id: "",
    question: "What is the output f the expression 60 & 13?",
    options: ["61", "12", "49", "-61"],
    correct: "12",
  },{
    id: "",
    question: "What does the input() function returns in Python?",
    options: ["A string", "An integer", "A float", "None of these"],
    correct: "A string",
  },{
    id: "",
    question: "What is the purpose of a linker in programming?",
    options: ["Converts high-level language into machine language", "Combines objects files into executable programs", "Translates assembly language into machine language", "Executes programs directlyy"],
    correct: "Combines objects files into executable programs",
  },{
    id: "",
    question: "Which module in Python provides supports for regular expresion operations?",
    options: ["os", "sys", "math", "re"],
    correct: "re",
  },{
    id: "",
    question: "What is an operator in Python?",
    options: ["A special symbol that performs operatins on variables and value", "A keyword", "A built in function", "A data type"],
    correct: "A special symbol that performs operatins on variables and value",
  },{
    id: "",
    question: "Which of the following is NOT a valid Python keyword?",
    options: ["and", "loop", "if", "or"],
    correct: "loop",
  },{
    id: "",
    question: "Who developed the Python language?",
    options: ["Zim Den", "Guido van Rossum", "Niene Stom", "Wick van Rossum"],
    correct: "Guido van Rossum",
  },{
    id: "",
    question: "In which year was the Python language developed?",
    options: ["1989", "1981", "1972", "1995"],
    correct: "1989",
  },{
    id: "",
    question: "In which year was the Python 3.0 version developed?",
    options: ["2008", "2000", "2010", "2005"],
    correct: "2008",
  },{
    id: "",
    question: "What do we use to define a block of code in Python language?",
    options: ["Key", "Brackets", "None of these", "Indentation"],
    correct: "Indentation",
  },{
    id: "",
    question: "Which of the following statements is correct regarding the object-oriented programming concept in Python?",
    options: ["Classes are real-world entities while objects are not real", "Objects are real-world entities while classes are not real", "Both objects and classes are real-world entities", "All of the above"],
    correct: "Objects are real-world entities while classes are not real",
  },{
    id: "",
    question: "What is the method inside the class in python language?",
    options: ["Object", "Function", "Attribute", "Argument"],
    correct: "Function",
  },{
    id: "",
    question: "Why does the name of local variables start with an underscore discouraged?",
    options: ["To identify the variable", "It confuses the interpreter", "It indicates a private variable of a class", "None of these"],
    correct: "It indicates a private variable of a class",
  },{
    id: "",
    question: "Which of the following is not a keyword in Python language?",
    options: ["val", "raise", "try", "with"],
    correct: "val",
  },{
    id: "",
    question: "Which of the following words cannot be a variable in python language?",
    options: ["_val", "val", "try", "_try_"],
    correct: "try",
  },{
    id: "",
    question: "Which of the following operators is the correct option for power(ab)?",
    options: ["a ^ b", "a**b", "a ^ ^ b", "a ^ * b"],
    correct: "a**b",
  },{
    id: "",
    question: "Which one of the following has the highest precedence in the expression?",
    options: ["Division", "Parentheses", "Power", "Subtraction"],
    correct: "Parentheses",
  },
  {
    id: "",
    question: "Which of the following functions is a built-in function in python language?",
    options: ["val()", "print()", "printf()", "None of these"],
    correct: "print()",
  },{
    id: "",
    question: "The output to execute string.ascii_letters can also be obtained from:?",
    options: ["character", "ascii_lowercase+string.ascii_upercase", "lowercase_string.upercase", "ascii_lowercase_string.digits"],
    correct: "ascii_lowercase+string.ascii_upercase",
  },{
    id: "",
    question: "Which of the following option is not a core data type in the python language?",
    options: ["Dictionary", "Class", "All of the above", "Lists"],
    correct: "Class",
  },{
    id: "",
    question: "What happens when '2' == 2 is executed?",
    options: ["False", "Ture", "TypeError occurs", "ValueError occurs"],
    correct: "False",
  },{
    id: "",
    question: "Is Python case sensitive when dealing with identifiers?",
    options: ["no", "yes", "machine dependent", "none of the mentioned"],
    correct: "yes",
  },{
    id: "",
    question: "Is Python code compiled or interpreted?",
    options: ["Python code is only compiled", "Python code is only interpreted", "Python code is neither compiled nor interpreted", "Python code is both compiled and interpreted"],
    correct: "Python code is both compiled and interpreted",
  },{
    id: "",
    question: "Which of the following is used to define a block of code in Python language?",
    options: ["Indentation", "Key", "Brackets", "All of the mentioned"],
    correct: "Indentation",
  },{
    id: "",
    question: "Which keyword is used for function in Python language?",
    options: ["Function", "def", "Define", "Fun"],
    correct: "def",
  },
  {
    id: "",
    question: "Which of the following character is used to give single-line comments in Python?",
    options: ["//", "#", "!", "/*"],
    correct: "#",
  },{
    id: "",
    question: "Which of the following functions can help us to find the version of python that we are currently working on?",
    options: ["sys.version(1)", "sys.version(0)", "sys.version()", "sys.version"],
    correct: "sys.version",
  },{
    id: "",
    question: "Python supports the creation of anonymous functions at runtime, using a construct called __________.",
    options: ["pi", "anonymous", "lambda", "none of the mentioned"],
    correct: "lambda",
  },
  {
    id: "",
    question: "What does pip stand for python?",
    options: ["Pip Installs Python", "Pip Installs Packages", "Preferred Installer Program", " All of the mentioned"],
    correct: "Preferred Installer Program",
  },{
    id: "",
    question: "Which of the following is the truncation division operator in Python?",
    options: ["|", "//", "/", "%"],
    correct: "//",
  },{
    id: "",
    question: "Which of the following functions is a built-in function in python?",
    options: ["factorial()", "print()", "seed()", "sqrt()"],
    correct: "print()",
  },{
    id: "",
    question: "Which of the following is the use of id() function in python?",
    options: ["Every object doesn’t have a unique id", "Id returns the identity of the object", "All of the mentioned", "None of the mentioned"],
    correct: "Id returns the identity of the object",
  },{
    id: "",
    question: "Which of these is the definition for packages in Python?",
    options: ["A set of main modules", "A folder of python modules", "A number of files containing Python definitions and statements", "A set of programs making use of Python modules"],
    correct: "A folder of python modules",
  },{
    id: "",
    question: "What arithmetic operators cannot be used with strings in Python?",
    options: ["*", "-", "+", "All of the above"],
    correct: "",
  },{
    id: "",
    question: "Which of the following statements is used to create an empty set in Python?",
    options: ["( )", "[ ]", "{ }", "set()"],
    correct: "set()",
  },
  
  {
    id: "",
    question: "To add a new element to a list we use which Python command?",
    options: ["list1.addEnd(5)", "list1.addLast(5)", "list1.append(5)", "list1.add(5)"],
    correct: "list1.append(5)",
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