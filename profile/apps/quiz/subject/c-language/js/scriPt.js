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
    question: "What is C Editor?",
    options: ["C Compiler", "C assember", "C code editor like notepad", "None of the above"],
    correct: "C code editor like notepad",
  },{
    id: "1",
    question: "What is the keyword used to declare a C file pointer?",
    options: ["File", "Flle", "FILEEP", "Dilefp"],
    correct: "File",
  },{
    id: "2",
    question: "What is the output filename of C program build process?",
    options: ["filename.ex", "filename.bak", "filename.exe", "filename.asm"],
    correct: "filename.exe",
  },{
    id: "3",
    question: "What is the input file a C program building process?",
    options: ["filename.k", "filename.cpp.", "filename.c", "filename.C"],
    correct: "filename.c",
  },{
    id: "4",
    question: "Which of these is NOT a relational or logical operator?",
    options: ["=", "||", "==", "!="],
    correct: "=",
  },{
    id: "5",
    question: "What is the abbreviatation of C STDIO in stdio.h?",
    options: ["Standard Input Output", "String Terminating Operations", "Store Input Output", "None of the above"],
    correct: "Standard Input Output",
  },{
    id: "6",
    question: "If an integer array pointer is incremented, how many bytes will be skipped to reach next element location?",
    options: ["1", "2", "8", "None"],
    correct: "2",
  },{
    id: "7",
    question: "What is the dimension of the C array int ary [10][5]?",
    options: ["1", "2", "5", "10"],
    correct: "2",
  },{
    id: "8",
    question: "What is the size of an array in the below C Program statement? int ary[a];  return 0;",
    options: ["8", "9", "10", "None of these"],
    correct: "None of these",
  },
  {
    id: "9",
    question: "What happens when you try to access an array variable outside its size?",
    options: ['Compiler error is throuwn', "0 value will be returned", "1 value will be returned", "Some garbage value will be returned"],
    correct: "Some garbage value will be returned",
  }, {
    id: "",
    question: "An entire array is always passed by ____ to a called function.",
    options: ["Call by value", "Call by refercence", "Address restructure", "Address relocation"],
    correct: "Call by refercence",
  }, {
    id: "",
    question: "Which of the following type is provide by C++ but not C?",
    options: ["Double", "Float", "Int", "Bool"],
    correct: "Bool",
  }, {
    id: "",
    question: "What is array base Address in Language?",
    options: ["Base address is the address of 0th index element.", "An array b[] base address is & b[0].", 'An array b[] base address can be printed with print f(%d",b)', "All the above"],
    correct: "Base address is the address of 0th index element.",
  }, {
    id: "",
    question: "An array index starts with?",
    options: ["-1", "0", "1", "2"],
    correct: "0",
  }, {
    id: "",
    question: "Which one of the following is a loop construct that will always be executed once?",
    options: ["for", "while", "switch", "do while"],
    correct: "do while",
  }, {
    id: "",
    question: "What is the types of Array?",
    options: ["Int, long, float, double", "Strict, enum", "Char", "All the above"],
    correct: "All the above",
  }, {
    id: "",
    question: "Choose the correct statement about C language arrays?",
    options: ["An array address is the address of first element of array itself.", "An array size must be declared if not initialized immediately", "Array size is the sum of size of all elements of the array", "All of the above"],
    correct: "All of the above",
  }, {
    id: "",
    question: "What is an array  in C language?",
    options: ["A group of elements of same data type.", "An array contains more than one element", "Array elements are stored in memory in continous or contiguous location", "All of the above"],
    correct: "All of the above",
  }, {
    id: "",
    question: "Array if array is also called?",
    options: ["Multi Data Array", "Multi Size Array", "Multi Dmensional Array", "Multi Byte Array"],
    correct: "Multi Dmensional Array",
  }, {
    id: "",
    question: "If P is an integer pointer with a value 1000, then what will the value of P+5 be?",
    options: ["1020", "1005", "1004", "1010"],
    correct: "1020",
  }, {
    id: "",
    question: "Which of the following accesses the seventh elementh stored in array?",
    options: ["Array[6]", "Array[7]", "Array[5]", "Array"],
    correct: "Array[6]",
  }, {
    id: "",
    question: "The size of an object of a type can be determmined using which operator?",
    options: ["Malloc", "Size of", "Mallok", "Caloc"],
    correct: "Size of",
  }, {
    id: "",
    question: "In which of the following languages is function overloading not possible?",
    options: ["C", "C++", "Java", "Python"],
    correct: "C",
  }, {
    id: "",
    question: "What is the dimension of the below C array? Example of → int ary[] = {1, 3, 5, 7};",
    options: ["1", "2", "3", "5"],
    correct: "1",
  }, {
    id: "",
    question: "What does '\a' excape code represent?",
    options: ["Alert", "Backslash", "tab", "Form feed"],
    correct: "Alert",
  }, {
    id: "",
    question: "What is the function used to allocate memory to an array at run time without initializing array elements?",
    options: ["Calloc ()", "Mallloc ()", "Palloc ()", "Kalloc ()"],
    correct: "Calloc ()",
  }, {
    id: "",
    question: "What is the funcion used to allocate memory to an array at the run time with zero initial value to each?",
    options: ["Calloc ()", "Mallloc ()", "Palloc ()", "Kalloc ()"],
    correct: "Mallloc ()",
  }, {
    id: "",
    question: "How many instances of a class can be declared?",
    options: ["1", "10", "As per required", "None of these"],
    correct: "As per required",
  }, {
    id: "",
    question: "Can we change the starting index of an array from 0 to 1 in array way?",
    options: ["Yes, through pointers", "Yes through call by value", "Yes through call by reference", "None of the above"],
    correct: "None of the above",
  }, {
    id: "",
    question: "A mildimensional array of demension N is a collection of?",
    options: ["Single dimensinal arrays", "N demensional array", "N-1 demensional array", "N-2 dimensinal array"],
    correct: "N-1 demensional array",
  }, {
    id: "",
    question: "Which function is used to check whether a character is a number?",
    options: ["Isalpha ()", "Isalnum ()", "Isdigit ()", "Isblank ()"],
    correct: "Isdigit ()",
  }, {
    id: "",
    question: "Which of the following are correct file opening modes in C?",
    options: ["r", "rb", "w", "All of the above"],
    correct: "All of the above",
  }, {
    id: "",
    question: "Which of the following is not a storage class specifier in C?",
    options: ["Volatile", "Extern", "None of these", "Static"],
    correct: "Volatile",
  }, {
    id: "",
    question: "What is the format specifier used to print a string or character warray in C printf or scanf function?",
    options: ["% c", "% C", "% s", "% w"],
    correct: "% c",
  }, {
    id: "",
    question: "Which of the following gives the memory address of the first element in array?",
    options: ["array [0]", "array [1]", "array [2]", "array"],
    correct: "array [0]",
  },
  {
    id: "",
    question: "What is the size of the int data type  (in bytes) in C?",
    options: ["4", "5", "1", "3"],
    correct: "4",
  },{
    id: "",
    question: "Choose the correct statement about C array pointers.",
    options: ["You can compare 2 array elements with P==(P+i)", "You can compare 2 pointers with P1==P2", "Accessing out of bounds index element is valid and it returns a garbage value.", "All the above"],
    correct: "All the above",
  },{
    id: "",
    question: "Why is a macro used in place of a function?",
    options: ["It increases code size.", "It increases execution time.", "It reduces code size.", "It reduces execution time."],
    correct: "It increases code size.",
  }, {
    id: "",
    question: "The value 132.54 can be represented using data type?",
    options: ["Double", "Void", "Int", "Bool"],
    correct: "Double",
  }, {
    id: "",
    question: "How many variables can the following string contain bat [45]?",
    options: ["20", "40", "45", "44"],
    correct: "45",
  },{
    id: "",
    question: "Which of the following is the wrong way of writting C langauge?",
    options: ["Int bat;", "Float cat-a;", "Int @ rat", "All of the above"],
    correct: "ALl of the above",
  },{
    id: "",
    question: "What are the types of data allowed inside a structure?",
    options: ["Int, float, double, long double", "Char, enum, union", "Pointers and same structure type members", "All the above"],
    correct: "All the above",
  },{
    id: "",
    question: "What is the ASCII value of NULL or 10?",
    options: ["0", "1", "10", "49"],
    correct: "0",
  },{
    id: "",
    question: "When was C programmming developed?",
    options: ["1950s", "1960s", "1980s", "1970s"],
    correct: "1970s",
  },{
    id: "",
    question: "What feature makes C++ so powerful?",
    options: ["Easy implementation", "Reusing the old code", "Easy memory management", "All of the above"],
    correct: "All of the above",
  },{
    id: "",
    question: "Which function is used to check whether a character is a number?",
    options: ["isapha()", "jisalnum()", "isdigit()", "isblank()"],
    correct: "isdigit()",
  },{
    id: "",
    question: "Which function is used to check whether a character is an alphabet or number?",
    options: ["isapha()", "jisalnum()", "isdigit()", "isblank()"],
    correct: "isapha()",
  },{
    id: "",
    question: "Processor directive in C Language start with?",
    options: ["$", "@", "&", "#"],
    correct: "#",
  },{
    id: "",
    question: "Which header file uses gets ()?",
    options: ["Stdio.h", "Stdlib.h", "Conio.h", "All of the above"],
    correct: "All of the above",
  },{
    id: "",
    question: "A C structure or user defined data type is also called?",
    options: ["Derived data type", "Secondary Data Type", "Aggregate data type", "All of the above"],
    correct: "Derived data type",
  },{
    id: "",
    question: "What was C programming adapted from?",
    options: ["C++", "Combined Programming Language", "Python", "All of the above"],
    correct: "Combined Programming Language",
  },{
    id: "",
    question: "Which of the following is not a variable type in C programmig?",
    options: ["Float", "Int", "While loop", "All the above"],
    correct: "All the above",
  },{
    id: "",
    question: "What are float variable?",
    options: ["Integer Value", "Unknown", "Decimal value", "All of the above"],
    correct: "Decimal value",
  },{
    id: "",
    question: "What is the keyword used to define a C macro?",
    options: ["def", "definition", "define", "defy"],
    correct: "define",
  },{
    id: "",
    question: "What is the C Keyword used to create global constants?",
    options: ["Constant", "Definition", "Def", "Define"],
    correct: "Constant",
  },{
    id: "",
    question: "What is the minimum and maximum values in Octal Number System?",
    options: ["1 to 8", "0 to 7", "2 to 9", "None of these"],
    correct: "0 to 7",
  },{
    id: "",
    question: "What is the 16-bit compiler allowable range for integer constants?",
    options: ["-3.4e38 to 3.4e38", "-32767 to 32768", "-32668 to 32667", "-32768 to 32767"],
    correct: "-32768 to 32767",
  },{
    id: "",
    question: "Each instance of a class has a different set of:",
    options: ["Class interfaces", "Methods", "Return types", "Attribute values"],
    correct: "Attribute values",
  },{
    id: "",
    question: "Left shift operator is equivalent to?",
    options: ["Division by 2", "Multiplying by 2", "Adding 2", "Subtracting 2"],
    correct: "Multiplying by 2",
  },{
    id: "",
    question: "What are the types of C Preprocessor directives?",
    options: ["Macros", "Conditional Compilation", "File Inclusion", "All the above"],
    correct: "",
  },{
    id: "",
    question: "What is the result of 0110 & 1100?",
    options: ["1000", "0100", "0001", "1010"],
    correct: "0100",
  },{
    id: "",
    question: "Directives are translated by the:",
    options: ["Pre-processor", "Compiler", "Linker", "Editor"],
    correct: "Pre-processor",
  },{
    id: "",
    question: "Choose a C fromatted input output function below.",
    options: ["Printf()", "S printf ()", "F printf()", "All the above"],
    correct: "Printf()",
  },{
    id: "",
    question: "Choose a C unformatted input output function below.",
    options: ["gets (), puts()", "gets char() put char()", "Both", "None"],
    correct: "gets (), puts()",
  },{
    id: "",
    question: "Which of the following function is used to open a file in C?",
    options: ["fopen", "fclose", "fseek", "fgets"],
    correct: "fopen",
  },{
    id: "",
    question: "What is the C preprocessor directive to be used to add a header file or any file to?",
    options: ["#add", "#present", "#include", "$include"],
    correct: "#include",
  },{
    id: "",
    question: "What is the output file generate after processing a file?",
    options: [".h file", ".exe file", ".cp file", ".bak file"],
    correct: ".h file",
  },{
    id: "",
    question: "What is the another name for .C file?",
    options: ["Executable code", "Source Code", "Distributable", "macro code"],
    correct: "Source Code",
  },{
    id: "",
    question: "How to declare a doble-pointer in C?",
    options: ["int**val", "int*val", "int&val", "int&val"],
    correct: "int**val",
  },{
    id: "",
    question: "We cannot use the keyword 'break' simply within ____.",
    options: ["While", "For", "If-else", "Do-while"],
    correct: "If-else",
  },{
    id: "",
    question: "What are the C functions used to read or write in Text Mode?",
    options: ["fprint(), fscanf()", "fread(), fwrite()", "fprint(), fscan()", "read(), write()"],
    correct: "fread(), fwrite()",
  },{
    id: "",
    question: "In Trubo C, search path of directories of # include is mentioned under the option?",
    options: ["Include Directories", "Exclude Directories", "Add Directories", "Extra Directories"],
    correct: "Include Directories",
  },{
    id: "",
    question: "What is the next step to preprocessing in C program build process?",
    options: ["Compiling", "Assembling", "Linking", "None of these"],
    correct: "Compiling",
  },
  {
    id: "",
    question: "Who is the father of Computer?",
    options: ["Stece Jobs", "James Gosling", "Dennis Ritcie", "Rasmus Leardorf"],
    correct: "Dennis Ritcie",
  },{
    id: "",
    question: "Which of the following is not a valid C variable name?",
    options: ["int number;", "float rate;", "int variable_count;", "int $main;"],
    correct: "int $main;",
  },{
    id: "",
    question: " All keywords in C are in ____.",
    options: ["LowerCase letters", "UpperCase letters", "CamelCase letters", " None of the mentioned"],
    correct: "LowerCase letters",
  },{
    id: "",
    question: "Which is valid C expression?",
    options: ["int my_num = 100,000;", "int my_num = 100000;", "int my num = 1000;", "int $my_num = 10000;"],
    correct: "int my_num = 100000;",
  },{
    id: "",
    question: "Which of the following cannot be a variable name in C?",
    options: ["volatile", "true", "friend", "export"],
    correct: "volatile",
  },{
    id: "",
    question: "What is short int in C programming?",
    options: ["The basic data type of C", "Qualifier", "Short is the qualifier and int is the basic data type", "All of the mentioned"],
    correct: "Short is the qualifier and int is the basic data type",
  },{
    id: "",
    question: "Which keyword is used to prevent any changes in the variable within a C program?",
    options: ["volatile", "const", "mutable", "immutable"],
    correct: "const",
  },{
    id: "",
    question: "What is an example of iteration in C?",
    options: ["All of the mentioned", "do-while", "while", "for"],
    correct: "All of the mentioned",
  },{
    id: "",
    question: "Functions in C Language are always ___.",
    options: ["External and Internal are not valid terms for functions", "Both Internal and External", "External", "Internal"],
    correct: "External",
  },{
    id: "",
    question: "What is #include <stdio.h>?",
    options: ["Preprocessor directive", "Inclusion directive", "File inclusion directive", "None of the mentioned"],
    correct: "Preprocessor directive",
  },{
    id: "",
    question: "C preprocessors can have compiler specific features.",
    options: ["True", "False", "Depends on the standard", "Depends on the platform"],
    correct: "True",
  },{
    id: "",
    question: "Which of the following are C preprocessors?",
    options: ["#ifdef", "#define", "#endif", "All of the mentioned"],
    correct: "All of the mentioned",
  },{
    id: "",
    question: " The C-preprocessors are specified with ___ symbol.",
    options: ["#", "$", '" "', "&"],
    correct: "#",
  },{
    id: "",
    question: "In C language, FILE is of which data type?",
    options: ["int", "char *", "struct", "None of the mentioned"],
    correct: "struct",
  },{
    id: "",
    question: "What is the sizeof(char) in a 32-bit C compiler?",
    options: ["1 bit", "2 bits", "1 Byte", "2 Bytes"],
    correct: "1 Byte",
  },{
    id: "",
    question: "scanf() is a predefined function in __ header file.",
    options: ["stdlib. h", "ctype. h", "stdio. h", "stdarg. h"],
    correct: "stdio. h",
  },{
    id: "",
    question: "What is the output of the expression 2<3?",
    options: ["0", "1", "2", "3"],
    correct: "1",
  },{
    id: "",
    question: "What does the '!' operator do in C?",
    options: ["None", "Multiplication", "Addition", "Negation"],
    correct: "Negation",
  },{
    id: "",
    question: "Which operator has higher precedence, '+' or '*'?",
    options: ["*", "=+", "Both are same", "None of these"],
    correct: "*",
  },{
    id: "",
    question: "What does the '+' operator do in C?",
    options: ["Addition", "Subtraction", "Multiplication", "Division"],
    correct: "Addition",
  },
  {
    id: "",
    question: "What is the result of the logical expression (1 && 0)?",
    options: ["1", "0", "TRUE", "FALSE"],
    correct: "0",
  },{
    id: "",
    question: "What does the '==' operator check?",
    options: ["Assignment", "Equality", "Greater than", "Less than"],
    correct: "Equality",
  },{
    id: "",
    question: "Which operator is used for division in C?",
    options: ["-", "*", "/", "=+"],
    correct: "/",
  },{
    id: "",
    question: "Pseudocode:READ number PRINT 'The number is', number What does this pseudocode do?",
    options: ["Reads and prints a number", "Prints a fixed number", "Prints a fixed number", "None of these"],
    correct: "Reads and prints a number",
  },{
    id: "",
    question: "What does %d signify in the printf or scanf function?",
    options: ["Double data type", "Decimal integer", "Dynamic allocation", "Directory path"],
    correct: "Decimal integer",
  },{
    id: "",
    question: "What is the difference between 'float' and 'double' data types in C?",
    options: ["Syntax only", "Precision", "Usage", "No difference"],
    correct: "Precision",
  },{
    id: "",
    question: "What is the size of 'int' data type in C?",
    options: ["Depends on the system", "4 bytes", "8 bytes", "2 bytes"],
    correct: "Depends on the system",
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
        questionCount + 1 + " of " + quizArray.length + " Questions";
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