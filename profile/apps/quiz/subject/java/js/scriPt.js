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
    question: "Who is the developer of Java?",
    options: ["Bjarne Stroutrup", "James Gosling", "Dennis Ritchie", "None of these"],
    correct: "James Gosling",
  },
  {
    id: "1",
    question: "In which year, Java was developed?",
    options: ['1972', "1980", "1995", "1994"],
    correct: "1995",
  },{
    id: "0",
    question: "Which of the following is not a features of Java?",
    options: ["Simple", "Secure", "Plateform Indenpendent", "Lossy"],
    correct: "Lossy",
  },
  {
    id: "1",
    question: "Java is which types of language?",
    options: ['OOPs', "POP", "Semi-OOP", "Both OOP and POP"],
    correct: "OOPs",
  },{
    id: "0",
    question: "Java is a ______________ language?",
    options: ["Platform Indenpendent", "Platform Dependent", "POP", "None of these"],
    correct: "Platform Indenpendent",
  },
  {
    id: "1",
    question: "How many keywords in Java?",
    options: ['32', "62", "48", "52"],
    correct: "52",
  },{
    id: "0",
    question: "How many access modifier in Java?",
    options: ["1", "2", "3", "4"],
    correct: "4",
  },
  {
    id: "1",
    question: "How many loops in Java?",
    options: ['1', "2", "3", "4"],
    correct: "4",
  },{
    id: "0",
    question: "Which of the following is not a access modifier?",
    options: ["Secure", "Private", "Public", "Protected"],
    correct: "Secure",
  },
  {
    id: "1",
    question: "In Java for - each is a ________.",
    options: ['Conditional Statement', "Loop", "Constructor", "None of these"],
    correct: "Loop",
  },{
    id: "",
    question: "What loop is entry control loop?",
    options: ['do-while', "while", "for", "while and for, both"],
    correct: "while and for, both",
  },{
    id: "",
    question: "Array index is always starts from _________.",
    options: ['0', "1", "2", "3"],
    correct: "0",
  },{
    id: "",
    question: "Which of the following approach is adapted by Java?",
    options: ['top-down', "buttom-down", "low-high", "high-low"],
    correct: "buttom-down",
  },{
    id: "",
    question: "In Java every satatements ends with__________?",
    options: [':', ";", ".", "!"],
    correct: ";",
  },{
    id: "",
    question: "We used for input/output in Java.",
    options: ['system.out.println/system.in', "cin/cout", "Print/Input", "print/scanf"],
    correct: "system.out.println/system.in",
  },{
    id: "",
    question: "What we used in java for a new line?",
    options: ['endl', "/n", "endl & print/n, both", "None of these"],
    correct: "endl & print/n, both",
  },{
    id: "",
    question: "What is the extension name of Java?",
    options: ['.j', ".java", ".jv", "None of these"],
    correct: ".java",
  },{
    id: "",
    question: "Java was Developed by ____________.",
    options: ['Sun MicroSystem', "Oracle", "Microsoft", "ANSI"],
    correct: "Sun MicroSystem",
  },{
    id: "",
    question: "Whose product is Java right now?",
    options: ['Sun MicroSystem', "Oracle", "Microsoft", "ANSI"],
    correct: "Oracle",
  },{
    id: "",
    question: "What is the Compilation Process of java program?",
    options: ['java class_name.java', "javac class_name.java", "javac class_name", "class_name.java"],
    correct: "javac class_name.java",
  },{
    id: "",
    question: "What is the excution process of Java Program?",
    options: ['java class_name', "javac class_name", "class_name.java", "class_name java"],
    correct: "java class_name",
  },{
    id: "",
    question: "What is the stands for JDK in Java?",
    options: ['Java Development Kit', "Java Design Kit", "Java Developer Kit", "None of these"],
    correct: "Java Development Kit",
  },{
    id: "",
    question: "What is the stands for JRE in Java?",
    options: ['Java Runtime Enviroment', "Java Running Enviroment", "Java Runtime Executaion", "None of these"],
    correct: "Java Runtime Enviroment",
  },{
    id: "",
    question: "What is the stands for JVM in Java?",
    options: ['Java Virtual Machine', "Java Vertification Machine", "Java Virtual Moment", "None of these"],
    correct: "Java Virtual Machine",
  },{
    id: "",
    question: "In Java, System class is defined in _______.",
    options: ['java.util package', "java.lang package", "java.io.package", "None of these"],
    correct: "java.lang package",
  },{
    id: "",
    question: "In Java, Scanner class is defined in _____________?",
    options: ['java.util.package', "java.lang package", "java.io package", "All of the above"],
    correct: "java.util.package",
  },{
    id: "",
    question: "Which stream is used for input in Java?",
    options: ['System.out', "System.in", "Scanner", "System"],
    correct: "System.in",
  },{
    question: "Which stream is used for output in Java?",
    options: ['System.out', "System.in", "Scanner", "System"],
    correct: "System.out",
  },{
    id: "",
    question: "Which scanner class method is used to read integer value?",
    options: ['nextInt()', "next()", "readInt()", "nextInteger()"],
    correct: "nextInt()",
  },{
    id: "",
    question: "Which scanner class method to used to read string value?",
    options: ['nextLine()', "next()", "readString()", "nextLine() and next(), both"],
    correct: "nextLine() and next(), both",
  },{
    id: "",
    question: "How many types of Primitive Datatype in Java?",
    options: ['2', "4", "6", "8"],
    correct: "8",
  },{
    id: "",
    question: "How many types of primitive datatype in Java?",
    options: ['2', "4", "6", "8"],
    correct: "8",
  },{
    id: "",
    question: "What is the size of char datatype in Java?",
    options: ['2', "4", "6", "8"],
    correct: "2",
  },{
    id: "",
    question: "What is the default value of Boolean datype?",
    options: ['True', "False", "True or False", "None of these"],
    correct: "False",
  },{
    id: "",
    question: "Which of the following in not a Java features?",
    options: ['Dynamic and Extensible', "Use of Pointers", "Objects-Oriented", "Portable"],
    correct: "Use of Pointers",
  },{
    id: "",
    question: "In which year Java was publicly released?",
    options: ['26 - 05 - 1996', "27 - 05 - 1953", "28 - 05 - 1993", "25 - 05 - 1992"],
    correct: "27 - 05 - 1953",
  },{
    id: "",
    question: "Which of the following are correct advantage of Java?",
    options: ['Java is Secure', "Java is Simple", "Java is Portable", "All of these"],
    correct: "All of these",
  },{
    id: "",
    question: "What is the extension of compiled java classes?",
    options: ['.js', ".txt", ".java", ".class"],
    correct: ".class",
  },{
    id: "",
    question: "Which of these connot be used  for a variable name in Java?",
    options: ['Identifier', "Keyword", "Identifier and Keyword", "None of these"],
    correct: "Keyword",
  },{
    id: "",
    question: "Which of the following is a type of polymorphism in Java Programming?",
    options: ['Multiple Polymorphism', "Multilevel Polymorphism", "Compile Time Polymorphism", "Execution time Polymorphism"],
    correct: "Compile Time Polymorphism",
  },{
    id: "",
    question: "Which of the following package is used fot text formatting in Java Programming Language?",
    options: ['java.io', "java.text", "java.awt", "java.awt.text"],
    correct: "java.text",
  },{
    id: "",
    question: "Which component is used to compile, debug and execute the java programs?",
    options: ['JRE', "JIT", "JDK", "JVM"],
    correct: "JDK",
  },{
    id: "",
    question: "Which of the following is smallest integer Datatype?",
    options: ['byte', "short", "int", "long"],
    correct: "byte",
  },{
    id: "",
    question: "Which of the following Datatype comes under floating Datatypes?",
    options: ['long', "float", "double", "double and float"],
    correct: "double and float",
  },{
    id: "",
    question: "What is the range of byte datatype is?",
    options: ['-128 to 128', "-127 to 128", "-128 to 127", "-127 to 127"],
    correct: "-128 to 127",
  },{
    id: "",
    question: "How many loops are their in Java?",
    options: ['Two', "Three", "Four", "None the these"],
    correct: "Four",
  },{
    id: "",
    question: "What is the purpose for using loop?",
    options: ['For repeatation', "Check Condition", "Finding Errors", "None of these"],
    correct: "For repeatation",
  },{
    id: "",
    question: "Which of the following execute atleast once, even condition is false?",
    options: ['while loop', "do while loop", "for loop", "for-each loop"],
    correct: "do while loop",
  },{
    id: "",
    question: "Do while loop is also known as __________ loop?",
    options: ['entry loop', "exit loop", "entry and exit loop", "None of these"],
    correct: "exit loop",
  },{
    id: "",
    question: "Which of the following loops are Entry controlled loop?",
    options: ['while', "do while", "for loop", "while and for loop"],
    correct: "while and for loop",
  },{
    id: "",
    question: "Which loop is best suitable of Arrays in Java?",
    options: ['while loop', "do while loop", "of-each loop", "for loop"],
    correct: "of-each loop",
  },{
    id: "",
    question: "Which of the following is not a part of Binary Operator?",
    options: ['Assignment Operator', "Logical Operator", "Arithmetic Operator", "Relational Operatin"],
    correct: "Assignment Operator",
  },{
    id: "",
    question: "Which operator is used for alternate of if-else statement?",
    options: ['Ternary Operator', "Bitwise Operator", "Arthmetic Operator", "Increment and Decrement Operator"],
    correct: "Ternary Operator",
  },{
    id: "",
    question: "Which of the following in not a arthimetic operator?",
    options: ['+', "*", "&", "%"],
    correct: "&",
  },{
    id: "",
    question: "Relational Operator is used for?",
    options: ['Assignment', "Comparison", "Finding Errors", "All the above"],
    correct: "Assignment",
  },{
    id: "",
    question: "How many types of Logical operators?",
    options: ['1', "2", "3", "4"],
    correct: "3",
  },{
    id: "",
    question: "Which of the following is Bitwise AND operator?",
    options: ['&', "&&", "||", "!"],
    correct: "&",
  },{
    id: "",
    question: "What is the default value of static variable?",
    options: ['0', "1", "garbage", "None"],
    correct: "0",
  },{
    id: "",
    question: "A variable which is Declared inside the method called ___________.",
    options: ['Static variable', "Instance variable", "Local variable", "None of these"],
    correct: "Local variable",
  },{
    id: "",
    question: "Which of these selectoin statements test only for Equality?",
    options: ['if', "switch", "if and switch", "None of these"],
    correct: "switch",
  },{
    id: "",
    question: "I statement execute or skip statement depending on the ___________ expression?",
    options: ['Boolean', "Double", "Integeric", "None of these"],
    correct: "Boolean",
  },{
    id: "",
    question: "Which one is a valid declaration of Boolean datatype?",
    options: ['boolean b=0;', "bool b=false;", "boolean b='false'", "boolean b='false'"],
    correct: "bool b=false;",
  },{
    id: "",
    question: "What is the default data types of a decimal value in Java?",
    options: ['int', "char", "long", "double"],
    correct: "double",
  },{
    id: "",
    question: "In Java, Scanner is pre-defined?",
    options: ['class', "method", "variable", "package"],
    correct: "class",
  },{
    id: "",
    question: "What is the reason of portability & security of Java?",
    options: ['Bytecode', "Applet", "Exception Handling", "Dynamic"],
    correct: "Bytecode",
  },{
    id: "",
    question: "What does the expression double n=10/0; return?",
    options: ['0', "Infinity", "Exception", "Invalid Expression"],
    correct: "Infinity",
  },{
    id: "",
    question: "Which of these class is a superclass of every class in Java?",
    options: ['String class', "Object class", "Abstract class", "ArrayList class"],
    correct: "Object class",
  },{
    id: "",
    question: "Which one of the following is not an access modifier?",
    options: ['Public', "Void", "Private", "Protected"],
    correct: "Void",
  },{
    id: "",
    question: "Which of these are conditional statement in Java?",
    options: ['if()', "for()", "Break()", "Continue"],
    correct: "if()",
  },{
    id: "",
    question: "Who invented Java Programming?",
    options: ['Guido van Rossum', "James Gosling", "Dennis Ritchie", "None of these"],
    correct: "James Gosling",
  },{
    id: "",
    question: "Which component is used to compile, debug and execute the java programs?",
    options: ['JVM', "JDK", "JIT", "JRE"],
    correct: "JDK",
  },{
    id: "",
    question: "Which one of the following is not a Java feature?",
    options: ['Object-oriented', "Use of pointers", "Portable", "Dynamic and Extensible"],
    correct: "Use of pointers",
  },{
    id: "",
    question: "Which of these cannot be used for a variable name in Java?",
    options: ['None of the mentioned', "Keyword", "Identifier", "Identifier & keyword"],
    correct: "Keyword",
  },{
    id: "",
    question: "Which environment variable is used to set the java path?",
    options: ['MAVEN_Path', "JAVA_HOME", "JAVA", "JavaPATH"],
    correct: "JAVA_HOME",
  },{
    id: "",
    question: "Which of the following is not an OOPS concept in Java?",
    options: ['Polymorphism', "Compilation", "Encapsulation", "Inheritance"],
    correct: "Compilation",
  },{
    id: "",
    question: "Which of the following is a type of polymorphism in Java Programming?",
    options: ['Multiple polymorphism', "Compile time polymorphism", "Multilevel polymorphism", "Execution time polymorphism"],
    correct: "Compile time polymorphism",
  },{
    id: "",
    question: "Which of these are selection statements in Java?",
    options: ['if()', "for()", "continue", "break"],
    correct: "if()",
  },{
    id: "",
    question: " Which of these keywords is used to define interfaces in Java?",
    options: ['intf', "Intf", "Interface", "interface"],
    correct: "interface",
  },{
    id: "",
    question: "Which of the following is a superclass of every class in Java?",
    options: ['ArrayList', "String", "Object class", "Abstract class"],
    correct: "Object class",
  },{
    id: "",
    question: "Which of these keywords are used for the block to be examined for exceptions?",
    options: ['try', "catch", "throw", "check"],
    correct: "try",
  },{
    id: "",
    question: "Which one of the following is not an access modifier?",
    options: ['Protected', "Void", "Public", "Private"],
    correct: "Void",
  },{
    id: "",
    question: "What is the numerical range of a char data type in Java?",
    options: [' 0 to 256', "-128 to 127", "0 to 32767", "0 to 65535"],
    correct: "0 to 65535",
  },{
    id: "",
    question: "Which of these values can a boolean variable contain?",
    options: ['True & False', "0 & 1", "Any integer value", "true"],
    correct: "true",
  },{
    id: "",
    question: "Which one is a valid declaration of a boolean?",
    options: ['boolean b4 = ‘true’', "boolean b3 = false;", "boolean b2 = ‘false’;", "boolean b1 = 1;"],
    correct: "boolean b3 = false;",
  },{
    id: "",
    question: "Which of the following is not a arthmetic operation in Java?",
    options: ['+', "&", "*", "%"],
    correct: "&",
  },{
    id: "",
    question: "Which language is also known as 'Do while loop'?",
    options: ['entry loop', "exit loop", "entry and exit loop, both", "None of these"],
    correct: "exit loop",
  },{
    id: "",
    question: "Which loop always execute at once, even condition is false?",
    options: ['while loop', "do while loop", "for loop", "None of these"],
    correct: "do while loop",
  },{
    id: "",
    question: "Which of the following is not a part of Binary Language?",
    options: ['Arithmetic Operator', "Assignment Operator", "Relational Operator", "Logical Operator"],
    correct: "Assignment Operator",
  },{
    id: "",
    question: "How many types of logical operator?",
    options: ['1', "2", "3", "4"],
    correct: "3",
  },{
    id: "",
    question: "Relational Operator is used for _______.",
    options: ['Assign', "Comparison", "Finding Errors", "All of the above"],
    correct: "Comparison",
  },{
    id: "",
    question: "Which of these statement text only for equallity?",
    options: ['if', "switch", "both, if and switch", "None of these"],
    correct: "switch",
  },{
    id: "",
    question: "In, Java scanner is a predefined _________.",
    options: ['Class', "Method", "Object", "Package"],
    correct: "Class",
  },{
    id: "",
    question: "A variable which is declared inside the method called ______?",
    options: ['Local Variable', "Static Variable", "Instance Variable", "None of these"],
    correct: "Local Variable",
  },{
    id: "",
    question: "How many access specifier in java?",
    options: ['1', "2", "3", "4"],
    correct: "4",
  },{
    id: "",
    question: "How many keyword in Java?",
    options: ['35', "62", "52", "50"],
    correct: "52",
  },{
    id: "",
    question: "What is the full form of 'javac'?",
    options: ['Javacompany', "Javacompiler", "Javaconnectivity", "None of these"],
    correct: "Javacompiler",
  },{
    id: "",
    question: "JVM is a ________ .",
    options: ['Interpreter', "Compiler", "Linker", "Loader"],
    correct: "Interpreter",
  },{
    id: "",
    question: "What was the name of Java before?",
    options: ['OAK', "Java", "Javac", "None of these"],
    correct: "OAK",
  },{
    id: "",
    question: "What is the name of && in Java?",
    options: ['Address of operator', "Logical OR", "Logical AND", "Logical NOT"],
    correct: "Logical OR",
  },
  
  
  {
    id: "",
    question: "The function is also called as the name of ___________.",
    options: ["Procedure", "Function", "Method", "None of these"],
    correct: "Method",
  }
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