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
    id: "",
    question: "What was the name of C++ Earlier ?",
    options: ['C++', "CPP", "C with classes", "None of these"],
    correct: "C with classes",
  },{
    id: "",
    question: "In which year C++ was developed?",
    options: ['1995', "1983", "1979", "1972"],
    correct: "1979",
  },{
    id: "",
    question: "The Term OOPs stands for _________.",
    options: ['Object oriented programming', "Object Oriented Programming System", "Oriented Oriented Programming Language", "None of these"],
    correct: "Object Oriented Programming System",
  },{
    id: "",
    question: "Size of Turbo C/C++ Compiler is?",
    options: ['16 Bit', "32 Bit", "64 Bit", "None of these"],
    correct: "16 Bit",
  },{
    id: "",
    question: "C++ is a language ________.",
    options: ['Object oriented Programming', "Semi-object oriented Programming", "Procedural Oriented Programming", "None of these"],
    correct: "Semi-object oriented Programming",
  },{
    id: "",
    question: "What is the size of int datatype in CPP?",
    options: ['1 Byte', "2 Byte", "4 Byte", "Depends on Compiler"],
    correct: "Depends on Compiler",
  },{
    id: "",
    question: "Which type of language in C++?",
    options: ['Statically typed language', "Dynamically Typed Language", "Both are possible", "None of these"],
    correct: "Statically typed language",
  },{
    id: "",
    question: "In which lab C++ was developed?",
    options: ['IBM', "Bell Lab", "ANSI", "SDL"],
    correct: "IBM",
  },{
    id: "",
    question: "Who is the developer of C++?",
    options: ['Dennis Rithie', "Charles Babbage", "Bjarne Stroustrup's", "None of these"],
    correct: "Bjarne Stroustrup's",
  },{
    id: "",
    question: "Which loops is faster in C++?",
    options: ['for', "while", "Do while", "All work at same speed"],
    correct: "All work at same speed",
  },{
    id: "",
    question: "The if-else statement can be replaced by which operator ?",
    options: ['Conditional Operator', "Bitwise operator", "Logical Operator", "Arthmetic Operator"],
    correct: "Conditional Operator",
  },{
    id: "",
    question: "Destructor has the same name as the constructor and it is preceded by ___________.",
    options: ["!", "#", "?", "~"],
    correct: "~",
  },
  {
    id: "",
    question: "Wrapping data & function in a single unit is known as ?",
    options: ["Abstraction", "Polymorphism", "Encapsulation", "None of these"],
    correct: "Encapsulation",
  },{
    id: "",
    question: "Which of the following class allows only to create single object?",
    options: ["Virtual class", "Singleton class", "Abstract class", "Friend class"],
    correct: "Singleton class",
  },{
    id: "",
    question: "How run-time polymorphism are implemented in C++?",
    options: ["Using templates", "Using inheritance and using virtual function", "Using Virtual Function", "Using Inheritance"],
    correct: "Using inheritance and using virtual function",
  },{
    id: "",
    question: "What is the other name used for funcitons inside a class?",
    options: ["Member function", "data Member", "Member variable", "Class function"],
    correct: "Member function",
  },{
    id: "",
    question: "Which operator is overlaoded for cout object?",
    options: ["(<)", "(>)", "(<<)", "(>>)"],
    correct: "(<<)",
  },{
    id: "",
    question: "Which Datatype is best suited to represent logical values? ",
    options: ["int", "char", "float", "boolean"],
    correct: "boolean",
  },{
    id: "",
    question: "Which of the following is the default return values of function?",
    options: ["void", "int", "char", "float"],
    correct: "int",
  },{
    id: "",
    question: "You can never use address of ___________ variable?",
    options: ["static", "register", "global", "auto"],
    correct: "register",
  },{
    id: "",
    question: "The default storage for local variable is:",
    options: ["auto", "register", "static", "None of these"],
    correct: "auto",
  },{
    id: "",
    question: "Which of the following will not return a value ?",
    options: ["int", "void", "empty", "null"],
    correct: "void",
  },{
    id: "",
    question: "Which is not a feature of OOP in general definitions?",
    options: ["Efficient Code", "Code reusability", "Modularity", "Duplicate/Redundant data"],
    correct: "Duplicate/Redundant data",
  },{
    id: "",
    question: "Which was the first purely object oriented programming language developed?",
    options: ["Kotlin", "SmallTalk", "Java", "C++"],
    correct: "SmallTalk",
  },{
    id: "",
    question: "When OOP concept did first came into picture?",
    options: ["1970’s", "1993", "1995's", "1980’s"],
    correct: "1970’s",
  },{
    id: "",
    question: "Which feature of OOP indicates code reusability?",
    options: ["Abstraction", "Polymorphism", "Encapsulation", "Inheritance"],
    correct: "Inheritance",
  },{
    id: "",
    question: "Why Java is Partially OOP language?",
    options: ["It supports usual declaration of primitive data types", "It does not support pointers", "It doesn’t support all types of inheritance", "It allows code to be written outside classes"],
    correct: "It supports usual declaration of primitive data types",
  },{
    id: "",
    question: "Which among the following doesn’t come under OOP concept?",
    options: ["Data binding", "Platform independent", "Message passing", "Data hiding"],
    correct: "Platform independent",
  },{
    id: "",
    question: "The feature by which one object can interact with another object is _____________.",
    options: ["Message Passing", "Data transfer", "Data Binding", "Message reading"],
    correct: "Message Passing",
  },{
    id: "",
    question: "How many types of access specifiers are provided in OOP (C++)?",
    options: ["1", "2", "3", "4"],
    correct: "3",
  },{
    id: "",
    question: "In multilevel inheritance, which is the most significant feature of OOP used?",
    options: ["Code efficiency", "Code readability", "Flexibility", "Code reusability"],
    correct: "Code reusability",
  },{
    id: "",
    question: "Which among the following can show polymorphism?",
    options: ["Overloading <<", "Overloading ||", "Overloading +=", "Overloading &&"],
    correct: "Overloading <<",
  },{
    id: "",
    question: "In which access should a constructor be defined, so that object of the class can be created in any function?",
    options: ["Any access specifier will work", "Protected", "Public", "Private"],
    correct: "Public",
  },{
    id: "",
    question: "Which among the following represents correct constructor?",
    options: ["classname()", "()classname", "~classname()", "–classname()"],
    correct: "classname()",
  },{
    id: "",
    question: "Which access specifier is usually used for data members of a class?",
    options: ["Protected", "Private", "Public", "Default"],
    correct: "Private",
  },{
    id: "",
    question: "How to access data members of a class?",
    options: ["Dot or arrow as required", "Arrow operator", "Dot operator", "Dot, arrow or direct call"],
    correct: "Dot or arrow as required",
  },{
    id: "",
    question: "Which feature of OOP reduces the use of nested classes?",
    options: ["Inheritance", "Binding", "Abstraction", "Encapsulation"],
    correct: "Inheritance",
  },
  {
    id: "",
    question: "Which keyword among the following can be used to declare an array of objects in java?",
    options: ["allocate", "arr", "new", "create"],
    correct: "new",
  },{
    id: "",
    question: "Which operator can be used to free the memory allocated for an object in C++?",
    options: ["Unallocate", "delete", "Collect", "Free()"],
    correct: "delete",
  },{
    id: "",
    question: "Which of the following is not a property of an object?",
    options: ["Properties", "Names", "Identity", "Attributes"],
    correct: "Names",
  },
  //{
  //   id: "",
  //   question: "Which type of members can’t be accessed in derived classes of a base class?",
  //   options: ["Public", "Private", "Protected", "All can be accessed"],
  //   correct: "",
  // },
  {
    id: "",
    question: "Single level inheritance supports _____________ inheritance.",
    options: ["Language independency", "Multiple inheritance", "Compile time", "Runtime"],
    correct: "Runtime",
  },{
    id: "",
    question: "Which keyword is used to declare virtual functions?",
    options: ["virt", "virtually", "anonymous", "virtual"],
    correct: "virtual",
  },{
    id: "",
    question: "Where is the memory allocated for the objects?",
    options: ["RAM", "HDD", "ROM", "Cache"],
    correct: "RAM",
  },{
    id: "",
    question: "Which feature of OOP is exhibited by the function overriding?",
    options: ["Polymorphism", "Inheritance", "Abstraction", "Encapsulation"],
    correct: "Polymorphism",
  },
  {
    id: "",
    question: "Which keyword should be used to declare static variables?",
    options: ["static", "stat", "common", "const"],
    correct: "static",
  },{
    id: "",
    question: "Which is correct syntax for declaring pointer to object?",
    options: ["className objectName();", "className objectName;", "className* objectName;", "*className objectName;"],
    correct: "className* objectName;",
  },{
    id: "",
    question: "Instance of which type of class can’t be created?",
    options: ["Nested class", "Anonymous class", "Abstract class", "Parent class"],
    correct: "Abstract class",
  },{
    id: "",
    question: "___________ underlines the feature of Polymorphism in a class.",
    options: ["Virtual Function", "Inline function", "Enclosing class", "Nested class"],
    correct: "Virtual Function",
  },{
    id: "",
    question: "Which feature can be implemented using encapsulation?",
    options: ["Polymorphism", "Abstraction", "Inheritance", "Overloading"],
    correct: "Abstraction",
  },{
    id: "",
    question: "Which of the following best defines a class?",
    options: ["Parent of an object", "Instance of an object", "Blueprint of an object", "Scope of an object"],
    correct: "Blueprint of an object",
  },{
    id: "",
    question: "Who invented OOP?",
    options: ["Alan Kay", "Andrea Ferro", "Dennis Ritchie", "Adele Goldberg"],
    correct: "Alan Kay",
  },{
    id: "",
    question: "What is the additional feature in classes that was not in structures?",
    options: ["Data members", "Member functions", "Static data allowed", "Public access specifier"],
    correct: "Member functions",
  },{
    id: "",
    question: "Which is not feature of OOP in general definitions?",
    options: ["Code reusability", "Duplicate/Redundant data", "Modularity", "Efficient Code"],
    correct: "Duplicate/Redundant data",
  },{
    id: "",
    question: "Which Feature of OOP illustrated the code reusability?",
    options: ["Polymorphism", "Abstraction", "Inheritance", "Encapsulation"],
    correct: "Inheritance",
  },{
    id: "",
    question: "Which language does not support all 4 types of inheritance?",
    options: ["Java", "Small Talk", "Kotlin", "C++"],
    correct: "Java",
  },{
    id: "",
    question: "How many classes can be defined in a single program?",
    options: ["Only 1", "Only 100", "Only 999", "As many as you want"],
    correct: "As many as you want",
  },{
    id: "",
    question: "When OOP concept did first came into picture?",
    options: ["1970’s", "1980", "1995", "1993"],
    correct: "1970’s",
  },{
    id: "",
    question: "Which header file is required in C++ to use OOP?",
    options: ["OOP can be used without using any header file", "stdlib.h", "stdio.h", "iostream.h"],
    correct: "OOP can be used without using any header file",
  },{
    id: "",
    question: "Which of the two features match each other?",
    options: ["Encapsulation and Abstraction", "Abstraction and Polymorphism", "Encapsulation and Polymorphism", "Inheritance and Encapsulation"],
    correct: "Encapsulation and Abstraction",
  },{
    id: "",
    question: "Which feature allows open recursion, among the following?",
    options: ["Use of this pointer", "Use of pointers", "Use of pass by value", "Use of parameterized constructor"],
    correct: "Use of this pointer",
  },{
    id: "",
    question: "What is C++?",
    options: ["C++ is an object oriented programming language", "C++ is a procedural programming language", "C++ supports both procedural and object oriented programming language", "C++ is a functional programming language"],
    correct: "C++ supports both procedural and object oriented programming language",
  },{
    id: "",
    question: "Which of the following is not a type of Constructor in C++?",
    options: ["Default constructor", "Parameterized constructor", "Copy constructor", "Friend constructor"],
    correct: "Friend constructor",
  },{
    id: "",
    question: "Which of the following approach is used by C++?",
    options: ["Left-right", "Right-left", "Top-left", "Top-down"],
    correct: "Right-left",
  },{
    id: "",
    question: "Which of the following type is provided by C++ but not C?",
    options: ["double", "float", "int", "bool"],
    correct: "bool",
  },{
    id: "",
    question: "By default, all the files in C++ are opened in _________ mode.",
    options: ["Binary", "VTC", "Text", "ISCII"],
    correct: "Text",
  },{
    id: "",
    question: "Which of the following correctly declares an array in C++?",
    options: ["array{10};", "array array[10];", "int array[10];", "int array;"],
    correct: "int array[10];",
  },{
    id: "",
    question: "What is the size of wchar_t in C++?",
    options: ["Based on the number of bits in the system", "2 or 4", "5", "4"],
    correct: "2 or 4",
  },{
    id: "",
    question: "Which of the following is used to terminate the function declaration in C++?",
    options: [";", "]", ")", ":"],
    correct: ";",
  },{
    id: "",
    question: "Which keyword is used to define the macros in c++?",
    options: ["#define", "macro", "define", "#macro"],
    correct: "#define",
  },{
    id: "",
    question: "What is Inheritance in C++?",
    options: ["Deriving new classes from existing classes", "Overloading of classes", "Wrapping of data into a single class", "Classes with same names"],
    correct: "Deriving new classes from existing classes",
  },{
    id: "",
    question: "Which of the following symbol is used to declare the preprocessor directives in C++?",
    options: ["@", "#", "%", "*"],
    correct: "#",
  },{
    id: "",
    question: "Which concept allows you to reuse the written code in C++?",
    options: ["Inheritance", "Polymorphism", "Abstraction", "Encapsulation"],
    correct: "Inheritance",
  },{
    id: "",
    question: "From which function the execution of C++ program starts?",
    options: ["main()", "new()", "start()", "None of these"],
    correct: "main()",
  },{
    id: "",
    question: "Which of the function is important in function?",
    options: ["Return_type", "Function_name", "Return_type and Function_name", "parameter"],
    correct: "Return_type and Function_name",
  },{
    id: "",
    question: "What is only function all C++ programs must contain?",
    options: ["new function", "main function", "start function", "inline function"],
    correct: "main function",
  },{
    id: "",
    question: "What is also known as the name of Constants?",
    options: ["literals", "const", "pre-processor", "none"],
    correct: "literals",
  },{
    id: "",
    question: "Array index start at _______.",
    options: ["0", "1", "-1", "None of these"],
    correct: "0",
  },{
    id: "",
    question: "Which of the following is address of operator?",
    options: ["&", "&&", "[]", "*"],
    correct: "&",
  },{
    id: "",
    question: "Which looping process is best used when we known the number of iterations?",
    options: ["for loop", "while loop", "do-while", "All of these"],
    correct: "for loop",
  },{
    id: "",
    question: "Which of the following is scope resolution operation?",
    options: [":", ": :", "? :", "None of these"],
    correct: ": :",
  },{
    id: "",
    question: "What is the following operator (?:) called?",
    options: ["Ternary Operator", "if-else Operator", "Scope Resolution", "Conditional"],
    correct: "Ternary Operator",
  },{
    id: "",
    question: "Identify the storage classes that have global visibility?",
    options: ["Static", "Register", "Auto", "Extern"],
    correct: "Register",
  },{
    id: "",
    question: "The C++ programs are highly portable. It means",
    options: ["Same program executes on different computers", "Program occupies very less computer resuource while executing", "Program occupies very less computer resource while executing", "Execution speed of program is very high"],
    correct: "Same program executes on different computers",
  },{
    id: "",
    question: "C++ is mainly influenced by ",
    options: ["C and smalltalk", "C and silmula", "C only", "None of these"],
    correct: "C and silmula",
  },{
    id: "",
    question: "What would be content of the following array after initilalization?, int rate[4]={3,2,1}",
    options: ["{3,2,1}", "'{3,2,1,0}'", "Both", "None of these"],
    correct: "{'{3,2,1,0}'}",
  },{
    id: "",
    question: "What is the value of !0?",
    options: ["0", "1", "2", "10"],
    correct: "1",
  },{
    id: "",
    question: "Which of the following is considered as first object oriented programming langugage?",
    options: ["Smalltalk", "Simula67", "Ada", "++"],
    correct: "Simula67",
  },{
    id: "",
    question: "Array elements are stored in ",
    options: ["Scattered memory loacation", "Sequential memory location", "Either one", "Both memory location"],
    correct: "Sequential memory location",
  },{
    id: "",
    question: "Array are passed to a function through call by value method:",
    options: ["True", "False", "Not Sure", "Depends up program requirement"],
    correct: "False",
  },{
    id: "",
    question: "If statement can be replaced by",
    options: ["Relational operator", "Conditional operator", "Logical operator", "None of these"],
    correct: "Conditional operator",
  },{
    id: "",
    question: "Which of the following can be used accept choices in switch construct?",
    options: ["int, float", "int, char", "char, body", "any, data type"],
    correct: "int, char",
  },{
    id: "",
    question: "Find the output of z=x++ * ++x(if x=10)",
    options: ["20", "21", "22", "23"],
    correct: "22",
  },{
    id: "",
    question: "Which function is used to terminete program execution?",
    options: ["getch()", "exit()", "break()", "end()"],
    correct: "exit()",
  },{
    id: "",
    question: "0 || 1 returns {where || is OR operator}",
    options: ["0", "1", "Compile error", "Runtime error"],
    correct: "1",
  },{
    id: "",
    question: '10 && "mspoint" returns',
    options: ["0", "10", "Compile error", "Runtime error"],
    correct: "10",
  },{
    id: "",
    question: "The main()  function returns a/an _________ value to the operating systtem",
    options: ["bool", "integer", "void", "null"],
    correct: "integer",
  },{
    id: "",
    question: "A real number is by default considered as _______.",
    options: ["Float", "Double", "Long Double", "Long int"],
    correct: "Double",
  },{
    id: "",
    question: "Private members of a class can be accessed",
    options: ["Within the class", "Within class and its derived class", "By any class", "Within class, derived class and friend class"],
    correct: "Within the class",
  },{
    id: "",
    question: "By default all members of c class is ",
    options: ["Private", "Protected", "Public", "Static"],
    correct: "Private",
  },{
    id: "",
    question: "'Virtual function()' in OOPs in C++ implements ",
    options: ["Runtime Polymorphism", "Compile time Polymorphism", "Data encapsulation", "Data abstraction"],
    correct: "Runtime Polymorphism",
  }
  //,{
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