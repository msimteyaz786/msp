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
    question: "What is the extension name of Microsoft excel?",
    options: [".xlsx", ".doc", ".txt", ".bmp"],
    correct: ".xlsx",
  },
  {
    id: "1",
    question: "Microsoft Excel is ___________ software.",
    options: ["Application", "Compiler", "Software", "Programming"],
    correct: "Application",
  },
  {
    id: "2",
    question: "What will the Excel formula =Right(HighTechWorld”,3) return?",
    options: ["Hig", "Tec", "rld", "None of these"],
    correct: "rld",
  },
  {
    id: "3",
    question: "What is the shortcut to “auto sum” all the numerical values in a column in MS Excel?",
    options: ["Ctrl+Screen lock", "Shift+ = ", "Alt + Shift + =", "Alt + ="],
    correct: "Alt + =",
  },
  {
    id: "4",
    question: "Which of the following is not a valid function in MS Excel?",
    options: ["SUM()", "COUNT()", "SUBTRACT()", "COUNTA()"],
    correct: "SUBTRACT()",
  },
  {
    id: "5",
    question: "_______________________ in Microsoft Excel always being with an equal to sign(=).",
    options: ["Numbers", "Formula", "Text", "Tables"],
    correct: "Formula",
  },
  {
    id: "6",
    question: "Which of the following is used to move an active cell to the “first column” on the current row?",
    options: ["Page up", "Ctrl + home", "Page down", "Home"],
    correct: "Ctrl + home",
  },
  {
    id: "7",
    question: "Each table appears as a “spreadsheet” that is called ____________________. ",
    options: ["Datasheet", "Record", "Tables", "Queries"],
    correct: "Datasheet",
  },
  {
    id: "8",
    question: "In MS Excel, to “add numerical values” in column D, from rows D10 to D15 the formula that should be used is:",
    options: ["=SUM(D10,D15)", "=COUNT(D10,D15)", "=SUM(D10:D15)", "None of these"],
    correct: "=SUM(D10:D15)",
  },
  {
    id: "9",
    question: "What is the extension name of excel 2004?",
    options: [".xls", ".excel", ".xcel", ".xcl"],
    correct: ".xls",
  },
  {
    id: "10",
    question: "What is the extension file excel 2004 and above?",
    options: [".xlsx", ".excel", ".xcel", ".xclx"],
    correct: ".xlsx",
  },
  {
    id: "11",
    question: "Worksheet is also called an array of ________________.",
    options: ["Cells", "Column", "Box", "Foumula"],
    correct: "Cells",
  },
  {
    id: "12",
    question: "What is the “maximum limit of rows” in MS Excel 2010?",
    options: ["10048768", "1084678", "1048576", "1084576"],
    correct: "1048576",
  },
  {
    id: "13",
    question: "What is the “maximum limit of column” in MS Excel 2010?",
    options: ["16438", "16348", "16843", "16384"],
    correct: "16384",
  },
  {
    id: "14",
    question: "Which bar lies “top of the windows” in Excel Screen?",
    options: ["Ruler", "Title Bar", "Status Bar", "Scroll Bar"],
    correct: "Title Bar",
  },
  {
    id: "15",
    question: "Which tab in Excel is used for “proofing, protecting, and marking” up a spread sheet?",
    options: ["Formula", "Data", "Review", "View"],
    correct: "Review",
  },
  {
    id: "16",
    question: "Which tool in MS Office is best for “organizing data and making lists”?",
    options: ["Access", "Excel", "PowerPoint", "Word"],
    correct: "Excel",
  },
  {
    id: "17",
    question: "What is shortcut key for “Data Tab” in MS Excel?",
    options: ["Alt + D", "Alt + A", "Alt + M", "Alt + P"],
    correct: "Alt + A",
  },
  {
    id: "18",
    question: "What is shortcut key for “Format Cell” in Microsoft Excel?",
    options: ["CTRL + F", "CTRL + 1", "Both", "None of these"],
    correct: "CTRL + 1",
  },
  {
    id: "19",
    question: "How many default sheets in Microsoft Excel 2007?",
    options: ["1", "3", "5", "7"],
    correct: "3",
  },
  {
    id: "20",
    question: "What is shortcut key for “Print Preview” in Microsoft Excel?",
    options: ["CTRL + F5", "CTRL + F2", "CTRL + SHIFT + F2", "None of these"],
    correct: "CTRL + F2",
  },
  {
    id: "21",
    question: "In MS Excel, a formula is entered by typing ______________ “first symbol”.",
    options: ["@", "=", "==", "+"],
    correct: "=",
  },
  {
    id: "22",
    question: "Which one of the following is a “Date & Time” function in Excel? ",
    options: ["FIND", "MOD", "NOW", "MID"],
    correct: "NOW",
  },
  {
    id: "23",
    question: "Which key is used to make “multiple line” in a ‘single cell’? ",
    options: ["Alt + ↵", "Tab + ↵", "Ctrl + ↵", "Shift + ↵"],
    correct: "Alt + ↵",
  },
  {
    id: "24",
    question: "_________________function in MS Excel returns “current time”.",
    options: ["MINUTES()", "NOW()", "HOUR()", "SECOND()"],
    correct: "NOW()",
  },
  {
    id: "25",
    question: "_________________function in MS Excel returns “current date”. ",
    options: ["DATE()", "NOW()", "HOUR()", "SECOND()"],
    correct: "DATE()",
  },
  {
    id: "26",
    question: "In MS Excel, ______________ function converts “decimal number to binary number”. ",
    options: ["COVNERT", "DEC2BIN", "DEC2HEX", "DEC2OCT"],
    correct: "DEC2BIN",
  },
  {
    id: "27",
    question: "In MS Excel, _____________ function converts “decimal number to octal number”.",
    options: ["COVNERT", "DEC2BIN", "DEC2HEX", "DEC2OCT"],
    correct: "DEC2OCT",
  },
  {
    id: "28",
    question: "In MS Excel, _____________ function returns a “random number”.",
    options: ["POWER", "MROUND", "RAND", "PI"],
    correct: "RAND",
  },
  {
    id: "29",
    question: "In MS Excel, ______________ function returns the sum of given numbers.",
    options: ["SUBTOTAL", "SUM", "SUMIF", "SUMSQ"],
    correct: "SUM",
  },
  {
    id: "30",
    question: "In MS Excel,____________function returns the “smallest value” from a list.",
    options: ["MAX", "MIN", "PERMUT", "RANK"],
    correct: "MIN",
  },
  {
    id: "31",
    question: "In MS Excel, _____________ function returns the “leftmost character” of a string.",
    options: ["LEFT", "FORMAT", "RIGHT", "EXACT"],
    correct: "LEFT",
  },
  {
    id: "32",
    question: "In MS Excel, _____________ function returns the “rightmost character” of a string.",
    options: ["LEFT", "FORMAT", "RIGHT", "EXACT"],
    correct: "RIGHT",
  },
  {
    id: "33",
    question: " In MS Excel, ___________function returns the “length of given string” or character.",
    options: ["LEN", "UPPER", "PROPER", "LOWER"],
    correct: "LEN",
  },
  {
    id: "34",
    question: "In MS Excel,____________ function “repeats a string” for given number of times.",
    options: ["SEARCH", "REPLACE", "REPT", "LOWER"],
    correct: "REPT",
  },
  {
    id: "35",
    question: "_____ is not a valid data type in MS-Excel.",
    options: ["Number", "Character", "Label", "Date/Time"],
    correct: "Character",
  },
  {
    id: "36",
    question: "What is MS Excel?",
    options: ["Spreadsheet", "Database Management", "Presentation", "Workbook"],
    correct: "Spreadsheet",
  },
  {
    id: "37",
    question: "In Microsoft Excel spreadsheets, rows are designated as _______.",
    options: ["1, 2, 3, ....", "A, B, C, ....", "A1, B1, C1, ....", "I, II, III, ...."],
    correct: "1, 2, 3, ....",
  },
  {
    id: "38",
    question: "_____ logical function indicates TRUE only if all arguments are assessed as TRUE, and FALSE otherwise.",
    options: ["OR", "AND", "IF", "ANDIF"],
    correct: "AND",
  },
  {
    id: "39",
    question: "The intersection of a column and a row in a worksheet is called____",
    options: ["Column", "Address", "Value", "Cell"],
    correct: "Cell",
  },
  {
    id: "40",
    question: "The Greater Than sign (>) exemplifies a/an _____ operator in MS Excel.",
    options: ["Arithmetic", "Conditional", "Logical", "Greater"],
    correct: "Logical",
  },
  {
    id: "41",
    question: "______ type of chart is good for a single series of data.",
    options: ["Column chart", "Cone chart", "Line chart", "Pie chart"],
    correct: "Pie chart",
  },
  {
    id: "42",
    question: "Name the keyboard shortcut to use to switch between open Excel windows.",
    options: ["CTRL + TAB", "ALT + TAB", "CTRL + ALT + TAB", "None of these"],
    correct: "CTRL + TAB",
  },
  {
    id: "43",
    question: "What is an Excel feature that displays only the data in column (s) according to specified criteria?",
    options: ["Filtering", "Sorting", "Pivot", "Formula"],
    correct: "Filtering",
  },

  {
    id: "44",
    question: "_______is not a function in Excel.",
    options: ["SUM", "MIN", "SUBTRACT", "MAX"],
    correct: "SUBTRACT",
  },{
    id: "45",
    question: "________ Excel function returns TRUE or FALSE based on two or more conditions.",
    options: ["=AVERAGEIFS", "=CONCAT", "=COUNTA", "=AND"],
    correct: "=AND",
  },

  {
    id: "46",
    question: "Which keyboard shortcut is used to easily switch open workbooks?",
    options: ["Alt+S", "CTRL+S", "CTRL+Alt", "CTRL+Tab"],
    correct: "CTRL+Tab",
  },
  {
    id: "47",
    question: "_____ is the programming language used to write a Macro in MS Excel.",
    options: ["Visual basic", "C++", "Java", "C+"],
    correct: "Visual basic",
  },
  {
    id: "48",
    question: "Why is the =COUNTIF function in Excel used?",
    options: ["Counts cells as specified", "Counts blank cells in a range", "Counts cells with numbers in a range", "Returns values based on a TRUE or FALSE condition"],
    correct: "Counts cells as specified",
  },
  {
    id: "49",
    question: "____________ is the best alternative to MS Excel offered by Google Inc.",
    options: ["Google Sheets", "Google Slides", "Google Files", "Google Keep"],
    correct: "Google Sheets",
  },
  {
    id: "50",
    question: "How rows are numbered in MS Excel?",
    options: ["Alphabetically", "Numerically", "Alphanumerically", "Special characters"],
    correct: "Numerically",
  },
  {
    id: "51",
    question: "How columns are named in MS Excel?",
    options: ["Alphabetically", "Numerically", "Alphanumerically", "Special characters"],
    correct: "Alphabetically",
  },
  {
    id: "52",
    question: "Which tab is used to include pivot table, charts, hyperlinks to a spread sheet?",
    options: ["Insert", "Page Layout", "Data", "Review"],
    correct: "Insert",
  },
  {
    id: "53",
    question: "Which tab in Excel is used when importing, querying, outlining and subtotaling the data placed into a worksheet's data list? ",
    options: ["Formula", "Data", "Insert", "Review"],
    correct: "Data",
  },
  {
    id: "54",
    question: "Which tab is used for creating, formatting and editing a spreadsheet?",
    options: ["Data", "Home", "Insert", "Review"],
    correct: "Home",
  },

  {
    id: "55",
    question: "Which function in Excel is used to find the biggest value in a range?",
    options: ["Ceiling", "DMAX", "LEN", "MAX"],
    correct: "MAX",
  },
  {
    id: "56",
    question: "Where does the result displays when a formula is entered in Excel?",
    options: ["Current Cell", "Next Cell", "Previous Cell", "Formula Bar"],
    correct: "Current Cell",
  },
  {
    id: "57",
    question: "Which function key is used to open go to dialogue box in MS Excel?",
    options: ["F2", "F5", "F7", "F11"],
    correct: "F5",
  },
  {
    id: "58",
    question: "The cell having and column number 3 and row number 6 is denoted by the name ______.",
    options: ["F3", "C6", "C3", "F6"],
    correct: "C6",
  },
  {
    id: "59",
    question: "Each sheet in MS Excel file is called a ______.",
    options: ["Notebook", "Notesheet", "Worksheet", "workbook"],
    correct: "Worksheet",
  },
  {
    id: "60",
    question: "In MS Excel, ______data type displays numbers in scientific notation.",
    options: ["Scientific", "Text", "Custom", "Date"],
    correct: "Scientific",
  },
  {
    id: "61",
    question: "In custom formatting of numbers, an optional digit is denoted by ________symbol.",
    options: ["0", "#", "$", "^"],
    correct: "#",
  },
  {
    id: "62",
    question: "In MS Excel, ______functions help to make lookup in other sheets and references.",
    options: ["Logical", "Information", "Lookup & Reference", "Math and Trigonometric"],
    correct: "Lookup & Reference",
  },
  {
    id: "63",
    question: "In MS Excel, statistical functions like average, standard deviation, median, mode, etc. can be accessed under the category ________ .",
    options: ["Logical", "Lookup & Reference", "Statistical", "Math and Trigonometric"],
    correct: "Statistical",
  },
  {
    id: "64",
    question: "_______function in MS Excel returns day of week for given date.",
    options: ["WEEKDAY", "WORKDAY", "YEARFRAC", "YEAR"],
    correct: "WEEKDAY",
  },
  {
    id: "65",
    question: "How can you update the value of formula cells if Auto Calculate mode of Excel is disabled?",
    options: ["F8", "F9", "F10", "F11"],
    correct: "F9",
  },
  {
    id: "66",
    question: "Except for the _______ function, a formula with a logical function shows the word “TRUE” or “FALSE” as a result.",
    options: ["IF", "AND", "OR", "NOT"],
    correct: "IF",
  },
  {
    id: "67",
    question: "In MS Excel, pivot chart may be inserted using first.",
    options: ["Insert > Table", "Insert > Pivot > Pivot table", "Insert > Pivot > Pivot chart", "Insert > Scatter"],
    correct: "Insert > Pivot > Pivot chart",
  },
  {
    id: "68",
    question: "What is the keyboard shortcut for copying cells in Excel?",
    options: ["CTRL + X", "CTRL + C", "CTRL + V", "CTRL + Z"],
    correct: "CTRL + C",
  },
  {
    id: "69",
    question: "In MS Excel, permitting data values in specific range for entry in a cell is called _____of data.",
    options: ["validation", "chart", "filtering", "sorting"],
    correct: "validation",
  },
  {
    id: "70",
    question: "In MS Excel, _____function removes space at the beginning or end of a string.",
    options: ["TRIM", "T", "TEXT", "SUBSTITTE"],
    correct: "TRIM",
  },
  {
    id: "71",
    question: "In MS Excel, ______function substitutes new text in place of given old text.",
    options: ["TRIM", "T", "TEXT", "SUBSTITTE"],
    correct: "SUBSTITTE",
  },
  {
    id: "72",
    question: "In MS Excel, ______function returns formatted version of given number.",
    options: ["TRIM", "T", "TEXT", "SUBSTITTE"],
    correct: "TEXT",
  },
  {
    id: "73",
    question: "In MS Excel,______ function repeats a string for given number of times.",
    options: ["SEARCH", "REPLACE", "REPT", "LOWER"],
    correct: "REPT",
  },
  {
    id: "75",
    question: "In MS Excel, ______function returns a string after replacing given characters of first string.",
    options: ["SEARCH", "REPLACE", "REPT", "LOWER"],
    correct: "REPLACE",
  },
  {
    id: "76",
    question: "In MS Excel, ______ function returns the first letter capitalized version of given string.",
    options: ["LOWER", "UPPER", "PROPER", "LEN"],
    correct: "PROPER",
  },
  {
    id: "77",
    question: "In MS Excel, ______function returns the lower case version of given string.",
    options: ["LOWER", "UPPER", "PROPER", "LEN"],
    correct: "LOWER",
  },
  {
    id: "78",
    question: "In MS Excel, _______function compares two text values.",
    options: ["FORMAT", "LEFT", "FIND", "EXACT"],
    correct: "EXACT",
  },
  {
    id: "79",
    question: "In MS Excel, ______function formats a number as currency and prefixes the currency symbol.",
    options: ["CHAR", "CODE", "DOLLAR", "CONCATENATE"],
    correct: "DOLLAR",
  },
  {
    id: "80",
    question: "In MS Excel, _____function returns the sum of those numbers that fulfill given condition.",
    options: ["SUBTOTAL", "SUM", "SUMIF", "SUMSQ"],
    correct: "SUMIF",
  },
  {
    id: "81",
    question: "In MS Excel, ______function returns the module remainder for given number and divisor.",
    options: ["QUOTIENT", "MINVERSE", "MMUL", "MOD"],
    correct: "MOD",
  },
  {
    id: "82",
    question: "Excel is a ____ program developed by Microsoft.",
    options: ["Spreadsheet", "Document", "Data management", "All of the above"],
    correct: "Spreadsheet",
  },
  {
    id: "83",
    question: "What is the default file name of Microsoft Excel file?",
    options: ["Workbook.xlsx", "Worksheet.xlsx", "All of these", "Workbook1.xlsx"],
    correct: "Workbook1.xlsx",
  },
  {
    id: "84",
    question: "Shortcut key CTRL + D is used to ____.",
    options: ["Open font dialog box", "Open format cells dialog box", "Shift current cell's value in the right cell", "Fill down in the selection"],
    correct: "Fill down in the selection",
  },
  {
    id: "85",
    question: "What is the collection of worksheets called?",
    options: ["Workbook", "Testbook", "Book", "Ledger"],
    correct: "Workbook",
  },
  {
    id: "86",
    question: "What is the column width in a worksheet?",
    options: ["26 characters", "128 characters", "255 characters", "256 characters"],
    correct: "255 characters",
  },
  {
    id: "87",
    question: "The total number of characters that a cell contains is?",
    options: ["32,767 characters", "32,768 characters", "65,535 characters", "1,32,767 characters"],
    correct: "32,767 characters",
  },
  {
    id: "88",
    question: "How many hyperlinks can be there in a worksheet?",
    options: ["32,767", "32,768", "65,530", "65,535"],
    correct: "65,530",
  },
  {
    id: "89",
    question: "How many times undo levels can be used in a worksheet?",
    options: ["25", "50", "100", "75"],
    correct: "100",
  },
  {
    id: "90",
    question: "How many users can open the Excel file at the same time?",
    options: ["64 users", "128 users", "256 users", "512 users"],
    correct: "256 users",
  },
  {
    id: "91",
    question: "The fill function can be ____ to complete formulas in a range.",
    options: ["Single clicked", "Double clicked", "Triple clicked", "Right clicked"],
    correct: "Double clicked",
  },
  {
    id: "92",
    question: "Which feature is used to wrap extra-long text into multiple lines in MS Excel?",
    options: ["Word Wrap", "Letter Wrap", "Text Wrap", "Wrap Text"],
    correct: "Wrap Text",
  },
  {
    id: "93",
    question: "Which keyboard shortcut is used to apply 'Wrap Text' on the selected text?",
    options: ["Ctrl + H + W", "Alt + W + H", "Alt + H + W", "Alt + W"],
    correct: "Alt + H + W",
  },
  {
    id: "94",
    question: "Which feature is used to rotate the text diagonally or vertically of the selected cells in MS Excel?",
    options: ["Orientation", "Text Layout", "Text Flip", "Cell Orientation"],
    correct: "Orientation",
  },
  {
    id: "95",
    question: "Which Excel function is used to get the discount rate for security?",
    options: ["DISCOUNT()", "DISC()", "DSC()", "PERC()"],
    correct: "DISC()",
  },
  {
    id: "96",
    question: "Under which menu, we can insert Header and Footer on the sheet?",
    options: ["Format", "Review", "Insert", "Data"],
    correct: "Insert",
  },
  {
    id: "97",
    question: "Show/Hide Gridlines option is available in the ____ Menu.",
    options: ["Page Layout", "Data", "Insert", "Format"],
    correct: "Page Layout",
  },
  {
    id: "98",
    question: "The ____ function is used to convert to text in a number format in MS Excel.",
    options: ["CONVERT()", "TEXT()", "NUM()", "CONVERTTEXT()"],
    correct: "TEXT()",
  },
  {
    id: "99",
    question: "Which option is used to quickly convert a range of cells to a table with its own style converted in MS Excel?",
    options: ["Table Styles", "Stylish Cells", "Format as Table", "Cells as Table"],
    correct: "Format as Table",
  },
  {
    id: "100",
    question: "What is the purpose of using the $ symbol in an Excel formula?",
    options: ["To convert currency", "To indicate absolute reference", "To highlight the cell", "To mark important formulas"],
    correct: "To indicate absolute reference",
  },
  // {
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