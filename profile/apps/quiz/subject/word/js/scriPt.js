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
    question: "What is the extension name of Microsoft Word?",
    options: [".dox", ".doc", ".txt", ".bmp"],
    correct: ".doc",
  },
  {
    id: "1",
    question: "Microsoft Word is ___________ software.",
    options: ["Application", "Compiler", "Software", "Programming"],
    correct: "Application",
  },
  {
    id: "2",
    question: "Which is not in MS Word?",
    options: ["Magic Tool", "Font", "Italic", "Bold"],
    correct: "Magic Tool",
  },
  {
    id: "3",
    question: "Microsoft word was released in which year ?",
    options: ["1981", "1982", "1983", "1984"],
    correct: "1983",    
  },
  {
    id: "4",
    question: "Pressing F8 key for the three times selects.",
    options: ["A Word", "A Sentence", "A Paragraph", "Entire Document"],
    correct: "A Sentence",    
  },
  {
    id: "5",
    question: "Which feature do you use to create a newspaper like document ?",
    options: ["Buttelts & Numbering", "Tables", "Columns", "Tab Stops"],
    correct: "Columns",    
  },
  {
    id: "6",
    question: "What is the shortcut key to “Center Align” the selected text ?",
    options: ["CTRL + C", "CTRL + F", "CTRL + E", "CTRL + D"],
    correct: "CTRL + E",    
  },
  {
    id: "7",
    question: "What is the shortcut key to “Insert Hyperlink” in a document ?",
    options: ["CTRL + E", "CTRL + K", "CTRL + M", "CTRL + V"],
    correct: "CTRL + K",
  },
  {
    id: "8",
    question: "In the _____ we can change the view of the document and set the zoom option.",
    options: ["Home Panel", "View Option Toolbar", "Ribbon", "Title Bar"],
    correct: "View Option Toolbar",  
  },
  {
    id: "9",
    question: "To show the font dialog box press____________.",
    options: ["CTRL + T", "CTRL + D", "CTRL + B", "CTRL + M"],
    correct: "CTRL + D",    
  },
  {
    id: "10",
    question: "If you want to select a word in Microsoft Word, how many times will you click?",
    options: ["Once", "Twice", "Three Times", "Four Times"],
    correct: "Twice",    
  },
  {
    id: "11",
    question: "If you want to select a paragraph in Microsoft Word, how many times will you click?",
    options: ["Once", "Twice", "Three Times", "Four Times"],
    correct: "Three Times",    
  },
  {
    id: "12",
    question: "If you want to select a sentence in Microsoft Word, how many times will you click?",
    options: ["Ctrl + once", "Ctrl + twice", "Three Times", "Shift + Four Times"],
    correct: "Ctrl + once",    
  },
  
  {
    id: "13",
    question: "What is the shortcut key to “Print Preview” in a document ?",
    options: ["CTRL + F1", "CTRL + F2", "CTRL + F3", "CTRL + F4"],
    correct: "CTRL + F2",    
  },
  {
    id: "14",
    question: "What is the shortcut key to 'print' in a document? ",
    options: ["CTRL + P", "CTRL + R", "CTRL + M", "None of these"],
    correct: "CTRL + P",    
  },
  {
    id: "15",
    question: "A _____ identifies a location or a selection of text that you name and identify for future reference.",
    options: ["Footer", "Header", "Bookmark", "Page Number"],
    correct: "Bookmark",    
  },
  {
    id: "16",
    question: "Which option is not available in Microsoft office button?",
    options: ["Open", "Save", "New", "Bold"],
    correct: "Bold",    
  },
  {
    id: "17",
    question: "Which option is use to the way text warps around the selected object?",
    options: ["Line Spacing", "Clipart", "Indent", "Text Wrapping"],
    correct: "Text Wrapping",    
  },
  {
    id: "18",
    question: "What is the smallest width of a column?",
    options: ["0 inch", "1 inch", "0.5 inch", "1.5 inch"],
    correct: "0.5 inch",
  },
  {
    id: "19",
    question: "Which command is used to store the active document permanently?",
    options: ["Save", "Send", "Prepare", "Save as"],
    correct: "Save",
  },
  {
    id: "20",
    question: "Which shortcut key is used to high light the entire word document?",
    options: ["Ctrl+A", "Ctrl+T", "Ctrl+M", "Ctrl+S"],
    correct: "Ctrl+A",
  },
  {
    id: "21",
    question: "Which bar contains the current position of the cursor in MS Word?",
    options: ["Layout", "Title Bar", "Status Bar", "Horizontal Ruler"],
    correct: "Status Bar",
  },
  {
    id: "22",
    question: "Where does the close button appear in MS Word?",
    options: ["Top left corner of the window", "Top right corner of the window", "Bottom left corner of the window", "Bottom right corner of the window"],
    correct: "Top right corner of the window",
  },
  {
    id: "23",
    question: "Which one of the following is text styling feature of MS Word?",
    options: ["Word Fill", "Word Art", "Word Colour", "Word Font"],
    correct: "Word Art",
  },
  {
    id: "24",
    question: "Which option is used to view an exiting word document?",
    options: ["New", "Open", "Publish", "Prepare"],
    correct: "Open",
  },
  {
    id: "25",
    question: "Which document view given an appearance as in web browser?",
    options: ["Draft View", "Outline View", "Web Layout View", "Full Screen Reading"],
    correct: "Web Layout View",
  },
  {
    id: "26",
    question: "How many groups are there in Home Menu?",
    options: ["4", "5", "6", "7"],
    correct: "5",
  },
  {
    id: "27",
    question: "Which group includes superscript, subscript, strike through options in MS Word?",
    options: ["Clipboard", "Font", "Paragraph", "Style"],
    correct: "Font",
  },
  {
    id: "28",
    question: "What in the purpose of ⌧ button?",
    options: ["Close button", "Office butoon", "Maximize buttons", "Minimize button"],
    correct: "Close button",
  },
  {
    id: "29",
    question: "Which option is used for tab setting?",
    options: ["Horizontal Ruler", "Vertical Ruler", "Status Bar", "Vertical Status Bar"],
    correct: "Horizontal Ruler",
  },
  {
    id: "30",
    question: "Which option is used to activate and deactivate ruler?",
    options: ["View → grids", "View → ruler", "Insert → tool bar", "Insert → ruler"],
    correct: "View → ruler",
  },
  {
    id: "31",
    question: "Which option is used to locate any specific character, symbols or formulas in a document?",
    options: ["Find", "Searching Text", "Replace", "Selecting Text"],
    correct: "Find",
  },
  {
    id: "32",
    question: "Which menu contains, Symbol option in MS Word?",
    options: ["Tools", "Table", "Formate", "Insert"],
    correct: "Insert",
  },
  {
    id: "33",
    question: "Line spacing is in the____________________of MS Word.",
    options: ["Format View", "View Home", "Home Tab", "Insert Tab"],
    correct: "Home Tab",
  },
  {
    id: "34",
    question: "Which feature is used to adjust the amount of space between words for alignment in MS Word?",
    options: ["Spacing", "Scaling", "Justifying", "Positioning"],
    correct: "Justifying",
  },
  {
    id: "35",
    question: "How can we rectify the errors occurs while typing?",
    options: ["Auto correct", "Auto spell", "Auto add", "Auto entry"],
    correct: "Auto correct",
  },
  {
    id: "36",
    question: "In MS word, ctrl+s is for……",
    options: ["Scenarios", "Spelling", "Save", "Size"],
    correct: "Save",
  },
  {
    id: "37",
    question: "To undo the last work, press…",
    options: ["Ctrl+A", "Ctrl+Z", "Ctrl+S", "Ctrl+Y"],
    correct: "Ctrl+Z",
  },
  {
    id: "38",
    question: "Portrait and Landscape are",
    options: ["Page Orientation", "Paper Size", "Paper Layout", "All of the Above"],
    correct: "Page Orientation",
  },
  {
    id: "39",
    question: "If you need to change the typeface of a document, which menu will you choose",
    options: ["Edit", "View", "Formate", "Tools"],
    correct: "Formate",
  },
  {
    id: "40",
    question: "Which of these toolbars allows changing of fonts and their sizes",
    options: ["Standard", "Formatting", "Print Preview", "None of these"],
    correct: "Formatting",
  },
  {
    id: "41",
    question: "Which option are used for opening, saving, important files",
    options: ["Print", "File", "Tool", "All of the above"],
    correct: "File",
  },
  {
    id: "42",
    question: "What is the shortcut for printing",
    options: ["Alt+P", "Space+P", "Ctrl+P", "None of these"],
    correct: "Ctrl+P",
  },
  {
    id: "43",
    question: "In order to create an new file from an existing file, we use",
    options: ["Save", "Save as", "Print", "Scan"],
    correct: "Save as",
  },
  {
    id: "44",
    question: "Header appears on the ______ of the page.",
    options: ["Top", "Botton", "Center", "Side"],
    correct: "Top",
  },
  {
    id: "45",
    question: "In MS Office, ______ is the software for preparation of documents or resume.",
    options: ["MS Access", "MS Word", "MS PowerPoint", "MS Excel"],
    correct: "MS Word",
  },
  {
    id: "46",
    question: "To create mail merged results, MS Word can take address input from ______",
    options: ["MS Excel", "MS Access", "Text Files", "All of the above"],
    correct: "All of the above",
  },
  {
    id: "47",
    question: "The first menu, containing most common tools required for preparation of document in MS Word, is called ______.",
    options: ["Home", "Insert", "References", "Page Layout"],
    correct: "Home",
  },
  {
    id: "48",
    question: "___________ is the shortcut for Home menu in MS Word.",
    options: ["Alt+H", "Alt+P", "Alt+N", "None of these"],
    correct: "Alt+H",
  },
  {
    id: "49",
    question: "___________ is the shortcut for Page Layout menu in MS Word.",
    options: ["Alt+H", "Alt+P", "Alt+N", "None of these"],
    correct: "Alt+P",
  },
  {
    id: "50",
    question: " ________ menu contains tools for proofing, languages, comments, tracking, changes, compare.",
    options: ["Home", "Mailings", "Review", "References"],
    correct: "Review",
  },
  {
    id: "51",
    question: "__________ menu contains tools for document views, showing/hiding ruler, zoom, managing windows & macros.",
    options: ["View", "Mailings", "Review", "References"],
    correct: "View",
  },
  {
    id: "52",
    question: "__________ menu contains items required for mail merge functionality in MS Word.",
    options: ["Home", "Insert", "Mailings", "Reference"],
    correct: "Mailings",
  },
  {
    id: "53",
    question: "A set of VBA instructions to assist in carrying out recurring activities in is called _______.",
    options: ["Mail merge", "Macro", "Thesaurus", "Spell Check"],
    correct: "Macro",
  },
  {
    id: "54",
    question: "On opening MS Word (without clicking on a target document), it displays _______ document.",
    options: ["Pervious", "Formatted", "Completed", "Blank/New"],
    correct: "Blank/New",
  },
  {
    id: "55",
    question: "MS Word provides ______ to function as the starting point special new documents like report, visiting card, brochure, etc.",
    options: ["Template", "Macro", "Image", "Table"],
    correct: "Template",
  },
  {
    id: "56",
    question: "Commonly used paper sizes for MS Word documents are______ .",
    options: ["A4", "Letter", "Legal", "All of them"],
    correct: "All of them",
  },
  {
    id: "57",
    question: "The ability to combine name and address with a standard document is called ______.",
    options: ["Document Formatting", "Database Management", "Mail Merge", "Form Letters"],
    correct: "Mail Merge",
  },
  {
    id: "58",
    question: "Which file starts MS Word?",
    options: ["word", "winword", "msword", "All of these"],
    correct: "winword",
  },
  {
    id: "59",
    question: "Which of the following is not valid version of MS Office?",
    options: ["Office 2007", "Office 2016", "Office Vista", "Office 365"],
    correct: "Office Vista",
  },
  {
    id: "60",
    question: "When sharing data in Office, the ______ document is the document in which the data was",
    options: ["Source", "Destination", "Original", "Primary"],
    correct: "Source",
  },
  {
    id: "61",
    question: "A ____ is a collection of predefined design elements and color schemes.",
    options: ["Feature", "Hyperlink", "Palette", "Theme"],
    correct: "Theme",
  },
  {
    id: "62",
    question: "Change the _____ to create a document in Wide format.",
    options: ["Page Orientation", "Page Margin", "Page Style", "Paper Source"],
    correct: "Page Orientation",
  },
  {
    id: "63",
    question: "It is possible to _____ a data source before performing a merge.",
    options: ["Create", "Modify", "Sort", "All of the above"],
    correct: "All of the above",
  },
  {
    id: "64",
    question: "Which of the following position is not available for fonts of MS Word?",
    options: ["Normal", "Raised", "Centered", "Lowered"],
    correct: "Centered",
  },
  {
    id: "65",
    question: "What is the blank space outside the printing area on a page?",
    options: ["Clipart", "Margins", "Header", "Footer"],
    correct: "Margins",
  },
  {
    id: "66",
    question: "____ cannot be used to work in MS Office.",
    options: ["Joystick", "Scanner", "Light Pen", "Mouse"],
    correct: "Joystick",
  },
  {
    id: "67",
    question: "Which is not an edition of MS Word?",
    options: ["MS Word 2003", "MS Word 2007", "MS Word 2010", "MS Word 1020"],
    correct: "MS Word 1020",
  },
  {
    id: "68",
    question: "On formatting toolbar which is the largest and smallest font available?",
    options: ["Smallest 8 abd Largest 70", "Smallest 5 and Largest 72", "Smallest 8 and Largest 72", "Smallest 5 and Largest 70"],
    correct: "Smallest 8 and Largest 72",
  },
  {
    id: "69",
    question: "Ctrl + N is used to__________",
    options: ["Save the Document", "Open the Document", "Create a New Document", "Close the Document"],
    correct: "Create a New Document",
  },
  {
    id: "70",
    question: "The name of a word document displays in ____.",
    options: ["Ribbon", "Title bar", "Status bar", "Home tab"],
    correct: "Home tab",
  },{
    id: "71",
    question: "Which enables us to send the same letter to different people?",
    options: ["Macros", "Template", "None of above", "Mail merge"],
    correct: "Mail merge",
  },
  {
    id: "72",
    question: "Press ____ to open the help window in the MS Word document.",
    options: ["F1", "F2", "F3", "F11"],
    correct: "F1",
  },
  {
    id: "73",
    question: "Which of the following software is used for making a resume?",
    options: ["MS Excel", "MS Word", "Dev C", "Java"],
    correct: "MS Word",
  },
  {
    id: "74",
    question: "Which of the following is an example of page orientation?",
    options: ["Subscript", "Landscape", "Superscript", "A4"],
    correct: "Landscape",
  },
  {
    id: "75",
    question: "What is the blank space outside the printing area on a page?",
    options: ["Clipart", "Margins", "Header", "Footer"],
    correct: "Margins",
  },
  {
    id: "76",
    question: "MS word is software of ____",
    options: ["Apple", "Android", "Google", "Microsoft"],
    correct: "Microsoft",
  },
  {
    id: "77",
    question: "Which is the word processing software?",
    options: ["Avast", "MS word 2007", "Google Chrome", "Mozilla Firefox"],
    correct: "MS word 2007",
  },
  {
    id: "78",
    question: "The valid format of MS Word is ___",
    options: [".exe", ".doc", ".png", ".jpeg"],
    correct: ".doc",
  },
  {
    id: "79",
    question: "What program is used in MS-Word to check the spelling?",
    options: ["Set language", "Spelling & Grammar", "Research", "Word Count"],
    correct: "Spelling & Grammar",
  },
  {
    id: "80",
    question: "To show the font dialog box press ____",
    options: ["Ctrl+ P", "Ctrl+ D", "Ctrl+ B", "Ctrl+ Q"],
    correct: "Ctrl+ D",
  },
  {
    id: "81",
    question: "To cut the selected text, these keys should be pressed",
    options: ["Ctrl + C", "Ctrl + D", "Ctrl + V", "Ctrl + X"],
    correct: "Ctrl + X",
  },
  {
    id: "82",
    question: "To move data from one part of the document to another, following is used.",
    options: ["Cut and Delete", "Cut and Paste", "Copy and Paste", "Copy and Undo"],
    correct: "Cut and Paste",
  },
  {
    id: "83",
    question: "Go to end of a document, press _____",
    options: ["Num Lock", "Tab", "End", "Home"],
    correct: "End",
  },
  {
    id: "84",
    question: "Which of the following options is used to display information such a title, page number of the document?",
    options: ["Auto Correct", "Header and Footer", "Insert Table", "Thesaurus"],
    correct: "Header and Footer",
  },
  {
    id: "85",
    question: "To specify margins in word, the user has to select Page Setup option from which menu?",
    options: ["Auto correct", "Edit", "File", "Table"],
    correct: "File",
  },
  {
    id: "86",
    question: "Where all the tabs (Ex. Home tab, insert tab, etc.) are located?",
    options: ["Scroll bar", "Ribbon", "Title bar", "Status bar"],
    correct: "Ribbon",
  },
  {
    id: "87",
    question: "View the document as it would look as a webpage is",
    options: ["Outline", "Print layout", "Full screen reading", "Web layout"],
    correct: "Web layout",
  },
  {
    id: "88",
    question: "Insert a _____ to illustrate and compare data.",
    options: ["Hyperlink", "Footer", "Chart", "Header"],
    correct: "Chart",
  },
  {
    id: "89",
    question: "____ refers to back the object to one level or to all objects.",
    options: ["Align", "Rotate", "Bring to front", "Send to back"],
    correct: "Send to back",
  },
  {
    id: "90",
    question: "____ refers to a title for a part of a document.",
    options: ["Leader characters", "Indent", "Header", "Heading"],
    correct: "Heading",
  },
  {
    id: "91",
    question: "Which of the following are valid minimum and maximum zoom sizes in MS Word?",
    options: ["0, 100", "0, 1000", "10, 500", "10, 100"],
    correct: "10, 500",
  },
  {
    id: "92",
    question: "What is the ghosted text or picture behind the content on the page?",
    options: ["Clipart", "Watermark", "WordArt", "All of these"],
    correct: "Watermark",
  },
  {
    id: "93",
    question: "The key F12 opens a",
    options: ["Close dialog box", "Save dialog box", "Open dialog box", "SavaAs dialog box"],
    correct: "SavaAs dialog box",
  },
  {
    id: "94",
    question: "Microsoft Office is",
    options: ["Shareware", "Public domain software", "An application suit", "Firmware"],
    correct: "An application suit",
  },
  {
    id: "95",
    question: "What is shortcut key to insert page breaks in MS Word?",
    options: ["Tab+Enter", "Alt+Enter", "Ctrl+Enter", "Shift+Enter"],
    correct: "Ctrl+Enter",
  },
  {
    id: "96",
    question: "Windows explorer is an example of_________",
    options: ["An Operating System", "A Programmih Language", "A file Manager", "A Web Browser"],
    correct: "A file Manager",
  },
  {
    id: "97",
    question: "MS Word is a _______________",
    options: ["tabular data formatting software", "word processing software", "presentation software", "E-mail client"],
    correct: "word processing software",
  },
  {
    id: "98",
    question: "Under which tab is the watermark button abailable in MS Word 2016",
    options: ["Home", "Insert", "Design", "Page-Setup"],
    correct: "Design",
  },
  {
    id: "99",
    question: "Which of the following keyboard shortcut opens the 'save as' option in MS Word?" ,
    options: ["F9", "F8", "F12", "F11"],
    correct: "F12",
  },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",
  // }
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