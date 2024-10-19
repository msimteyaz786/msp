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
    options: ["C Compiler", "C assember", "C code edotor like noterpad", "None of the above"],
    correct: "",
  },{
    id: "1",
    question: "What is the keyword used to declare a C file pointer?",
    options: ["File", "Flle", "FILEEP", "Dilefp"],
    correct: "",
  },{
    id: "2",
    question: "What is the output filename of C program build process?",
    options: ["filename.ex", "filename.bak", "filename.exe", "filename.asm"],
    correct: "",
  },{
    id: "3",
    question: "What is the input file a C program building process?",
    options: ["filename.k", "filename.cpp.", "filename.c", "filename.C"],
    correct: "",
  },{
    id: "4",
    question: "Which of these is NOT a relatioal or logical operator?",
    options: ["=", "||", "==", "!="],
    correct: "",
  },{
    id: "5",
    question: "What is the abbreviatation of C STDIO in stdio.h?",
    options: ["Standard Input Output", "String Terminating Operations", "Store Input Output", "None of the above"],
    correct: "Standard Input Output",
  },{
    id: "6",
    question: "If an integer array pointer is incremented, how many bytes will be skipped to reach next element location?",
    options: ["1", "2", "8", "None"],
    correct: "",
  },{
    id: "7",
    question: "What is the dimension of the C array int ary [10][5]?",
    options: ["1", "2", "5", "10"],
    correct: "",
  },{
    id: "8",
    question: "What is the size of an array in the below C Program statementent? int ary[a];  return 0;",
    options: ["8", "9", "10", "None of these"],
    correct: "",
  },
  {
    id: "9",
    question: "What happens when you try to access an array variable outside its size?",
    options: ['Compiler error is throuwn', "0 value will be returned", "1 value will be returned", "Some garbage value will be returned"],
    correct: "",
  }, {
    id: "",
    question: "An entire array is always passed by ____________ to a called function.",
    options: ["Call by value", "Call by refercence", "Address restructure", "Address relocation"],
    correct: "",
  }, {
    id: "",
    question: "Which of the following type is provide by C++ but not C?",
    options: ["Double", "Float", "Int", "Bool"],
    correct: "Bool",
  }, {
    id: "",
    question: "What is array base Address in Language?",
    options: ["Base address is the address of 0th index element.", "An array b[] base address is & b[0].", 'An array b[] base address can be printed with print f(%d",b)', "All the above"],
    correct: "",
  }, {
    id: "",
    question: "An array index starts with?",
    options: ["-1", "0", "1", "2"],
    correct: "",
  }, {
    id: "",
    question: "Choose a correct statement about C Language arrays:",
    options: ["An array size can not change once it is created", "Array element value can be changed any number of times.", "To access Nth elementh of an array students, use students [n-1] as the stating index is 0.", "All the above"],
    correct: "",
  }, {
    id: "",
    question: "What is the types of Array?",
    options: ["Int, long, floak, double", "Strict, enum", "Char", "All the above"],
    correct: "",
  }, {
    id: "",
    question: "Choose the correct statement about C language arrays?",
    options: ["An array address is the address of first element of array itself.", "An array size must be declared if not initialized immediately", "Array size is the sum of size of all elements of the array", "All of the above"],
    correct: "",
  }, {
    id: "",
    question: "What is an array  in C language?",
    options: ["A group of elements of same data type.", "An array contains more than one element", "Array elements are stored in memory in continous or contiguous location", "All of the above"],
    correct: "",
  }, {
    id: "",
    question: "Array if array is also called?",
    options: ["Multi Data Array", "Multi Size Array", "Multi Dmensional Array", "Multi Byte Array"],
    correct: "",
  }, {
    id: "",
    question: "If P is an integer pointer with a value 1000, then what will the vaue of P+5 be?",
    options: ["1020", "1005", "1004", "1010"],
    correct: "",
  }, {
    id: "",
    question: "Which of the following accesses the seventh elementh stored in array?",
    options: ["Array[6]", "Array[7]", "Array[5]", "Array"],
    correct: "",
  }, {
    id: "",
    question: "The size of an object of a type can be determmined using which operator?",
    options: ["Malloc", "Size of", "Mallok", "Caloc"],
    correct: "",
  }, {
    id: "",
    question: "In which of the following languages is function overloading not possible?",
    options: ["C", "C++", "Java", "Python"],
    correct: "",
  }, {
    id: "",
    question: "What is the dimension of the below C array? Example of → int ary[] = {1, 3, 5, 7};",
    options: ["1", "2", "3", "5"],
    correct: "",
  }, {
    id: "",
    question: "What does 'la' excape code represent?",
    options: ["Alert", "Backslash", "tab", "Form feed"],
    correct: "",
  }, {
    id: "",
    question: "What is the function used to allocate memory to an array at run time without initializing array elements?",
    options: ["Calloc ()", "Mallloc ()", "Palloc ()", "Kalloc ()"],
    correct: "",
  }, {
    id: "",
    question: "What is the funcion used to allocate memory to an array at tru time with zero initial value to each?",
    options: ["Calloc ()", "Mallloc ()", "Palloc ()", "Kalloc ()"],
    correct: "",
  }, {
    id: "",
    question: "What is the need for C array?",
    options: ["You need create so many seprate variables and get confused while using,", "Using a single array variable, you can access all element of the array easily.", "COde maintainability is easy fo programmers and maintainers.", "All of the above"],
    correct: "",
  }, {
    id: "",
    question: "Can we cange the starting index of an array from 0 to 1 in ary way?",
    options: ["Yes, through pointers", "Yes through call by value", "Yes through call by reference", "None of the above"],
    correct: "",
  }, {
    id: "",
    question: "A mildimensional array of demension N is a collection of?",
    options: ["Single dimensinal arrays", "N demensional array", "N-1 demensional array", "N-2 dimensinal array"],
    correct: "",
  }, {
    id: "",
    question: "Which function is used to check whether a character is a number?",
    options: ["Isalpha ()", "Isalnum ()", "Isdigit ()", "Isblank ()"],
    correct: "",
  }, {
    id: "",
    question: "Which fo the following are correct file opening modes in C?",
    options: ["r", "rb", "w", "All of the above"],
    correct: "",
  }, {
    id: "",
    question: "Which of the following is not a storage class specifier in C?",
    options: ["Volatile", "Extern", "Tyoedef", "Static"],
    correct: "",
  }, {
    id: "",
    question: "What is the format specifier used to print a string or character warray in C printf or scanf function?",
    options: ["% c", "% C", "% s", "% w"],
    correct: "",
  }, {
    id: "",
    question: "Which of the following gives the memory address of the first element in arrya?",
    options: ["array [0]", "array [1]", "array [2]", "array"],
    correct: "",
  },
  {
    id: "",
    question: "What is the size of the int data type  (in bytes) in C?",
    options: ["4", "5", "1", "2"],
    correct: "",
  },{
    id: "",
    question: "Choose the correct statement about C array pointers.",
    options: ["You can compare 2 array elements with *P==*(P+i)", "You can compare 2 pointers with P1==P2", "Accessing out of bounds index element is valid and it returns a garbage value.", "All the above"],
    correct: "",
  },{
    id: "",
    question: "Chhose the correct statement with array pointers.",
    options: ["It is valid to add integer number ot array pointer.", "It is valid to subtract integer number from array pointer", "Difference of pointers of array element gives difference between index", "All the above"],
    correct: "",
  }, {
    id: "",
    question: "The value 132.54 can be represented using data type?",
    options: ["Double", "Void", "Int", "Bool"],
    correct: "",
  }, {
    id: "",
    question: "How many variables can the following string contain bat [45]?",
    options: ["20", "40", "45", "44"],
    correct: "",
  },{
    id: "",
    question: "Which of the following is the wrong way of writting C langauge?",
    options: ["Int bat;", "Float cat-a;", "Int @ rat", "ALl of the above"],
    correct: "",
  },{
    id: "",
    question: "What are the types of data alloed inside a structure?",
    options: ["Int, float, double, long double", "Char, enum, union", "Pointers and same structure type members", "All the above"],
    correct: "",
  },{
    id: "",
    question: "What is theASCII value of NULL of 10?",
    options: ["0", "1", "10", "49"],
    correct: "",
  },{
    id: "",
    question: "When was C programmming developed?",
    options: ["1950s", "1960s", "1980s", "1970s"],
    correct: "",
  },{
    id: "",
    question: "Which of the following can be considered and the object of an array?",
    options: ["Elements of the array", "Index of an array", "Function of the array", "All of the above"],
    correct: "",
  },{
    id: "",
    question: "Which function is used to check wheter a character is a number?",
    options: ["isapha()", "jisalnum()", "isdigit()", "isblank()"],
    correct: "",
  },{
    id: "",
    question: "Which function is used to check wheter a character is an alphabet or number?",
    options: ["isapha()", "jisalnum()", "isdigit()", "isblank()"],
    correct: "",
  },{
    id: "",
    question: "Processor directive in C Language start with?",
    options: ["$", "@", "&", "#"],
    correct: "",
  },{
    id: "",
    question: "Which header file uses gets ()?",
    options: ["Stdio.h", "Stdlib.h", "Conio.h", "All of the above"],
    correct: "",
  },{
    id: "",
    question: "A C structure or user defined data type is also called?",
    options: ["Derived data type", "Secondary Data Type", "Aggregate data type", "All the above"],
    correct: "",
  },{
    id: "",
    question: "What was C programming adapted from?",
    options: ["C++", "Combined Programming Language", "Python", "All of the above"],
    correct: "",
  },{
    id: "",
    question: "Which of the following is not a variable type in C programmig?",
    options: ["Float", "Int", "While loop", "All the above"],
    correct: "",
  },{
    id: "",
    question: "What are float variable?",
    options: ["Integer Value", "Unknown", "Decimal value", "All of the above"],
    correct: "",
  },{
    id: "",
    question: "What is the keyword used to define a C macro?",
    options: ["def", "definition", "define", "defy"],
    correct: "",
  },{
    id: "",
    question: "What is the C Keyword used to create global constants?",
    options: ["Constant", "Definition", "Def", "Define"],
    correct: "",
  },{
    id: "",
    question: "What is the minimum and maximum values in Octal Number System?",
    options: ["1 to 8", "0 to 7", "2 to 9", "None of these"],
    correct: "",
  },{
    id: "",
    question: "How do you separate a multiple macro in C language?",
    options: ["Using * operator", "Using % operator", "Unsing / operaotr", "Using + operator"],
    correct: "",
  },{
    id: "",
    question: "What are the Types of C Preprocessor directives?",
    options: ["Macros", "Conditional Compilation", "File inclusion", "All the above"],
    correct: "",
  },{
    id: "",
    question: "Left shift operator is equivalent to?",
    options: ["Division by 2", "Multiplying by 2", "Adding 2", "Subtracting 2"],
    correct: "",
  },{
    id: "",
    question: "What are the types of C Preprocessor directives?",
    options: ["Macros", "Conditional Compilation", "File Inclusion", "All the above"],
    correct: "",
  },{
    id: "",
    question: "What si the result of 0110 & 1100?",
    options: ["1000", "0100", "0001", "1010"],
    correct: "",
  },{
    id: "",
    question: "What is the output of the left shift operator <<on(00011000<<0)?",
    options: ["01100000", "110000000", "00000110", "00000011"],
    correct: "",
  },{
    id: "",
    question: "Choose a C fromatted input output function below.",
    options: ["Printf()", "S printf ()", "F printf()", "All the above"],
    correct: "",
  },{
    id: "",
    question: "Choose a C unformatted input output function below.",
    options: ["gets (), puts()", "gets char() put char()", "Both", "None"],
    correct: "",
  },{
    id: "",
    question: "Which of the following function is used to open a file in C++?",
    options: ["fopen", "fclose", "fseek", "fgets"],
    correct: "",
  },{
    id: "",
    question: "What is the C preprocessor directive to be used to add a header file or any file to?",
    options: ["#add", "#present", "#include", "$include"],
    correct: "",
  },{
    id: "",
    question: "What is the output file generate after processing a file?",
    options: [".h file", ".exe file", ".cp file", ".bak file"],
    correct: "",
  },{
    id: "",
    question: "What is the another name for .C file?",
    options: ["Executable code", "Source Code", "Distributable", "macro code"],
    correct: "",
  },{
    id: "",
    question: "How to declare a doble-pointer in C?",
    options: ["int*val", "int**val", "int&val", "int*&val"],
    correct: "",
  },{
    id: "",
    question: "We cannot use the keyword 'break' simply within ____________.",
    options: ["While", "For", "If-else", "Do-while"],
    correct: "",
  },{
    id: "",
    question: "What are the C functions used to read or write in Text Mode?",
    options: ["fprint(), fscanf()", "fread(), fwrite()", "fprint(), fscan()", "read(), write()"],
    correct: "",
  },{
    id: "",
    question: "In Truno C, search path of derectories of # include is mentioned under the option?",
    options: ["Include Directories", "Exclude Directories", "Add Directories", "Extra Directories"],
    correct: "",
  },{
    id: "",
    question: "What is the next step to preprocessing in C program build process?",
    options: ["Comopiling", "Assembling", "Linking", "None of these"],
    correct: "",
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
    question: " All keywords in C are in ____________",
    options: [" LowerCase letters", "UpperCase letters", "CamelCase letters", " None of the mentioned"],
    correct: " LowerCase letters",
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
    correct: "",
  },{
    id: "",
    question: "What is an example of iteration in C?",
    options: ["All of the mentioned", "do-while", "while", "for"],
    correct: "All of the mentioned",
  },{
    id: "",
    question: "Functions in C Language are always _________",
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
    question: " The C-preprocessors are specified with _________ symbol.",
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
    question: "scanf() is a predefined function in ______ header file.",
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
    question: "Pseudocode:READ number PRINT 'The number is ', numberWhat does this pseudocode do?",
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