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
    question: "What is the extension name of Microsoft PowerPoint?",
    options: [".xlsx", ".doc", ".txt", ".ppt"],
    correct: ".ppt",
  },
  
  {
    id: "1",
    question: "Which contains miniature representation of slides?",
    options: ["Slides", "Handout", "Template", "Slide master"],
    correct: "Handout",
  },
  {
    id: "2",
    question: "Which button is used to add instant animation to the presentation and helps interactive presentation? ",
    options: ["Add button", "Start button", "Insert button", "Action button"],
    correct: "Action button",
  },
  {
    id: "3",
    question: "Which tool allows user to select different layout for slide?",
    options: ["Apply design", "Bullets", "New Slide", "Slide Layout"],
    correct: "Apply design",
  },
  {
    id: "4",
    question: "Which shortcut key is used to create new presentation in PowerPoint? ",
    options: ["CTRL + N", "CTRL + M", "CTRL + O", "CTRL + P"],
    correct: "CTRL + N",
  },
  {
    id: "5",
    question: "How many panes are these in backstage view in power point 2010? ",
    options: ["3", "5", "8", "9"],
    correct: "3",
  },
  {
    id: "6",
    question: "Which menu is used to apply various effects to the text in a slide? ",
    options: ["Animation", "Design", "Transitions", "Slide show"],
    correct: "Animation",
  },
  {
    id: "7",
    question: "Which menu is used to apply various visual effects to the slide in power point? ",
    options: ["Animation", "Design", "Slide show", "Transitions"],
    correct: "Transitions",
  },
  {
    id: "8",
    question: "Which menu is used to select a predefined chart style? ",
    options: ["Animation", "Design", "Transitions", "Slide show"],
    correct: "Design",
  },
  {
    id: "9",
    question: "Which shortcut key is used to invoke thesaurus dialog box in Power Point? ",
    options: ["Shift + F7", "Ctrl + F7", "Alt + F7", "None of these"],
    correct: "Shift + F7",
  },
  {
    id: "10",
    question: "Which holder holds text, title and picture in power point?",
    options: ["Content Holder", "Image Holder", "Place Holder", "Slide Holder"],
    correct: "Place Holder",
  },
  {
    id: "11",
    question: "Microsoft PowerPoint is a _________ program",
    options: ["Graphics", "Presentation", "Data Analysis", "All of the above"],
    correct: "Presentation",
  },
  {
    id: "12",
    question: "Which combination of key is used to select all slides from current slide to first slide?",
    options: ["Alt Home", "Ctrl Home", "Shift Home", "Tab Home"],
    correct: "Shift Home",
  },
  {
    id: "13",
    question: "In Windows operating systems, PowerPoint was offered in ____.",
    options: ["1989", "1990", "1991", "1992"],
    correct: "1990",
  },
  {
    id: "14",
    question: "Which one of the following is a effect option in power point presentation?",
    options: ["Diamond", "Fade", "Push", "Reveal"],
    correct: "Diamond",
  },
  {
    id: "15",
    question: "The MS office tool used for preparation of presentations is called _______.",
    options: ["MS Word", "MS Excel", "MS Access", "MS PowerPoint"],
    correct: "MS PowerPoint",
  },
  {
    id: "16",
    question: "The command to invoke power point from command line is _____.",
    options: ["powerpnt", "power", "msppt", "point"],
    correct: "powerpnt",
  },
  {
    id: "17",
    question: "The default extension for a presentation prepared in powerpoint contained in MS Office 20. The default extension for a presentation prepared in powerpoint contained in MS Office version 2007 or later is ______.",
    options: [".accdb", ".pptx", ".xlsx", ".docx"],
    correct: ".pptx",
  },
  {
    id: "18",
    question: "The default extension for a presentation prepared in powerpoint contained in MS Office version 2003 or earlier is ______.",
    options: [".doc", ".xls", ".ppt", ".mdb"],
    correct: ".ppt",
  },
  {
    id: "19",
    question: "Powerpoint is suitable for creating ______ presentations.",
    options: ["business", "educational", "strategic (military)", "All of them"],
    correct: "All of them",
  },{
    id: "20",
    question: "PowerPoint helps to create a mix of _______to make the presentation lively and interesting.",
    options: ["audio/video", "text/table/lists", "images/graphs", "All of them"],
    correct: "All of them",
  },
  {
    id: "21",
    question: "PowerPoint can help to deliver content over ______.",
    options: ["web", "email", "social media", "All of them"],
    correct: "All of them",
  },{
    id: "22",
    question: "New presentation in power point can be created using _____.",
    options: ["File>New", "Ctrl+N", "Both", "None of these"],
    correct: "Both",
  },{
    id: "23",
    question: "On choosing File>New, _____can be chosen to start the presentation.",
    options: ["Blank Presentation", "Themes", "Either a or b", "None of these"],
    correct: "Either a or b",
  },
  {
    id: "24",
    question: "In PowerPoint, slide styles may be chosen from ______ menu.",
    options: ["Design>Themes", "Home>Font", "Home Slides", "Home Paragraph"],
    correct: "Design>Themes",
  },{
    id: "25",
    question: "In PowerPoint, font for presentation may be chosen from ______ menu.",
    options: ["Home>Themes", "Home>Font", "Home>Slides", "Home>Paragraph"],
    correct: "Home>Font",
  },{
    id: "26",
    question: "In PowerPoint, equations and mathematical symbols can be inserted using_____ menu.",
    options: ["Insert>Tables", "Insert>Text", "Insert>Symbol", "Insert>Media"],
    correct: "Insert>Symbol",
  },{
    id: "27",
    question: "In PowerPoint, media objects like video and audio can can be inserted using ______ menu.",
    options: ["Insert>Tables", "Insert>Text", "Insert>Symbol", "Insert>Media"],
    correct: "Insert>Media",
  },
  {
    id: "28",
    question: "In Powerpoint, slide transition effects may be controlled using ______ menu.",
    options: ["Design>Effects", "Design>Themes", "Insert>Colors", "Insert>Fonts"],
    correct: "Design>Effects",
  },
  {
    id: "29",
    question: "In Powerpoint, slide theme can be controlled using ______ menu.",
    options: ["Design>Effects", "Design>Themes", "Insert>Colors", "Insert>Fonts"],
    correct: "Design>Themes",
  },
  {
    id: "30",
    question: "In Powerpoint, fonts can be chosen using ______ menu.",
    options: ["Design>Background", "Design>Themes", "Insert>Colors", "Insert>Fonts"],
    correct: "Insert>Fonts",
  },
  {
    id: "31",
    question: "In Powerpoint, presentation preview can be started using using _______ menu.",
    options: ["Transition>Preview", "Transition>Transition to this slide", "Timing", "None of these"],
    correct: "Transition>Preview",
  },
  {
    id: "32",
    question: "In Powerpoint, proofing, language, comments and comparison of 2 slide showscan be accomplished using ______ menu.",
    options: ["Review", "View", "Slide Show", "Animations"],
    correct: "Review",
  },
  {
    id: "33",
    question: "To make effective presentation, minimize text and maximize ______.",
    options: ["images", "graphs", "videos", "All of the above"],
    correct: "All of the above",
  },
  {
    id: "34",
    question: "Optimum duration for making a presentation is_______ .",
    options: ["7 Hours", "3 to 4 Hours", "1 Hours", "22 to 35 Minutes"],
    correct: "22 to 35 Minutes",
  },
  {
    id: "35",
    question: "One should record the presentation in ______ and watch it again to find the mistakes done during delivery.",
    options: ["paper", "video", "transcript", "text"],
    correct: "video",
  },
  {
    id: "36",
    question: "How many slide layouts are available in new slide dialog box?",
    options: ["9", "7", "14", "16"],
    correct: "9",
  },{
    id: "37",
    question: "Every presentation contains_______",
    options: ["Title Slide", "Speaker's Notes", "Audience Handouts", "All of these"],
    correct: "All of these",
  },
  {
    id: "38",
    question: "Which of the following section does not exist in a slide layout?",
    options: ["Titles", "Lists", "Charts", "Animations"],
    correct: "Animations",
  },

  {
    id: "39",
    question: "_______ controls are the main slide control tasks for your presentation.",
    options: ["Task pane", "Task Bar", "Control Paner", "All of these"],
    correct: "Task pane",
  },{
    id: "40",
    question: "A new presentation can be created from",
    options: ["Blank Presentation", "From existing presentation", "From design template", "All of these"],
    correct: "All of these",
  },
  {
    id: "41",
    question: "Which command will you use in powerpoint if you need to change the color of different objects without changing content?",
    options: ["Design Template", "Color Scheme", "Font Color", "Object Color"],
    correct: "Color Scheme",
  },
  {
    id: "42",
    question: "What PowerPoint feature will you use to apply motion effects to different objects of a slide?",
    options: ["Slide Transition", "Slide Design", "Animation Objects", "Animation Scheme"],
    correct: "Animation Scheme",
  },
  {
    id: "43",
    question: "In which menu can you find features like slide Design, Slide Layout etc.?",
    options: ["Insert Menu", "Formate Menu", "Tools Menu", "Slide Show Menu"],
    correct: "Formate Menu",
  },
  {
    id: "44",
    question: "Which menu provides you options like Animation scheme, custom Animation, slide transition?",
    options: ["Insert Menu", "Formate Menu", "Tools Menu", "Slide Show Menu"],
    correct: "Slide Show Menu",
  },
  {
    id: "45",
    question: "Which of the following font effect is not available in PowerPoint Font dialog box?",
    options: ["Underline", "Shadow", "emboss", "Strikethrough"],
    correct: "Strikethrough",
  },
  {
    id: "46",
    question: "To select one hyperlink after another during a slide presentation, what do you press?",
    options: ["Tab", "CTRL + K", "CTRL + F", "All of these"],
    correct: "Tab",
  },
  {
    id: "47",
    question: "Special effects used to introduce slides in a presentation are called",
    options: ["Effects", "Custom animation", "Transitions", "Present animations"],
    correct: "Transitions",
  },
  {
    id: "48",
    question: "What is the term used when you press and hold the left mouse key and move the mouse around the slide?",
    options: ["Highlighting", "Dragging", "Selecting", "Moving"],
    correct: "Dragging",
  },
  {
    id: "49",
    question: "The slide that is used to introduce a topic and set the tone for the presentation is called the ",
    options: ["Table Slide", "Graph slide", "Bullete slide", "Title slide"],
    correct: "Title slide",
  },
  {
    id: "50",
    question: "Which of the following is the default page setup orientation of slide in PowerPoint?",
    options: ["Vertical", "Landscape", "Portrait", "None of these"],
    correct: "Landscape",
  },
  {
    id: "51",
    question: "Which of the following tool enables you to add text to a slide without using the standard placeholders?",
    options: ["Text tool box", "Line tool", "Drawing tool", "Auto shape tool"],
    correct: "Text tool box",
  },
  {
    id: "52",
    question: "Want your logo in the same position on every slide, automatically insert it on the________",
    options: ["Handout master", "Notes master", "Slide master", "All of these"],
    correct: "Slide master",
  },
  {
    id: "53",
    question: "The PowerPoint view that displays only text ( title and bullets) is",
    options: ["slide show", "slide sorter view", "outline view", "notes page view"],
    correct: "outline view",
  },
  {
    id: "54",
    question: "Which of the following presentation elements can you modify using the slide master?",
    options: ["Slide comments", "Slide transitions", "Speaker note font and color", "All of these"],
    correct: "Slide transitions",
  },
  {
    id: "55",
    question: "Presentation designs regulate the formatting and layout for the slide and are commonly called_______",
    options: ["Design Plates", "Templates", "Placeholders", "Blueprints"],
    correct: "Templates",
  },
  {
    id: "56",
    question: "The Handout Master consists of placeholders for all of these except the________",
    options: ["title", "slide number", "header", "footer"],
    correct: "title",
  },
  {
    id: "57",
    question: "Which of these PowerPoint features would allow any user to create a given simple presentation quicker?",
    options: ["Animations", "Chart Wizard", "Transition Wizard", "AutoContent Wizard"],
    correct: "AutoContent Wizard",
  },
  {
    id: "58",
    question: "The File that consists of readymade styles that we can easily use for our presentation is known as___________",
    options: ["Pre formatting", "Template", "Wizard", "AutoStyle"],
    correct: "Template",
  },
  {
    id: "59",
    question: "What is the max Zoom percentage in MS PowerPoint?",
    options: ["400%", "300%", "200%", "100%"],
    correct: "400%",
  },
  {
    id: "60",
    question: "A PowerPoint design template is stored in any file with __________ extensions.",
    options: [".pot", ".ptt", ".dtp", ".ppt"],
    correct: ".pot",
  },
  {
    id: "61",
    question: "Which of these is a type of sound file?",
    options: ["DAT files", "LOG files", "DRV files", "WAV files"],
    correct: "WAV files",
  },

  {
    id: "62",
    question: "In the current presentation, if we want to insert a new slide, we can choose which of these?",
    options: ["Ctrl + F", "Ctrl + M", "Ctrl + N", "Ctrl + P"],
    correct: "Ctrl + M",
  },
  {
    id: "64",
    question: "Which toolbar provides various options in different master views?",
    options: ["Standard toolbar", "Formatting toolbar", "Drawing toolbar", "Common tasks toolbar"],
    correct: "Common tasks toolbar",
  }, {
    id: "65",
    question: "How wer can find any and every command on the___",
    options: ["Menu bar", "Standard toolbar", "Formatting toolbar", "Drawing toolbar"],
    correct: "Menu bar",
  }, {
    id: "66",
    question: "What do we use if we want to add texts in a given slide?",
    options: ["Comment Box", "Text Layer", "Note Box", "Text Box"],
    correct: "Text Box",
  }, {
    id: "67",
    question: "Which of these sections does a slide layout NOT have?",
    options: [" Lists", "Animations", "Titles", "Charts"],
    correct: "Animations",
  }, {
    id: "68",
    question: " Which of these font effects is NOT available in the PowerPoint Font dialogue box?",
    options: ["Emboss", "Strikethrough", "Underline", "Shadow"],
    correct: "Strikethrough",
  }, {
    id: "69",
    question: "From which of these menus can we access a Text Box, Picture, Chart etc.?",
    options: ["View", "Insert", "Edit", "File"],
    correct: "Insert",
  }, {
    id: "70",
    question: "Which of these is the page setup orientation by default of the slides in PowerPoint?",
    options: ["Landscape", "Portrait", "Vertical", "None"],
    correct: "Landscape",
  }, {
    id: "71",
    question: "We can replace a font on all slides with another font using the______option ?",
    options: ["Edit, Fonts", "Tools, Fonts", "Tools, Replace Fonts", "Format, Replace Fonts"],
    correct: "Format, Replace Fonts",
  }, {
    id: "72",
    question: "Which of the following effects can you use for the slide background ?",
    options: ["Gradient ", "Texture ", "Picture ", "All of these"],
    correct: "All of these",
  }, {
    id: "73",
    question: "Which key on the keyboard can be used to view slide show ?",
    options: ["F1", "F3", "F4", "F5"],
    correct: "F5",
  }, {
    id: "74",
    question: "A chart can be put as a part of the presentation using ?",
    options: ["Insert -> Chart", "Insert -> Pictures -> Chart", "Edit -> Chart", "View-> Chart"],
    correct: "Insert -> Chart",
  }, {
    id: "75",
    question: "Which of the following are types of sound files ?",
    options: ["LOG files", "DAT files", "WAV files", "DRV files"],
    correct: "WAV files",
  },
  {
    id: "76",
    question: "Which of the following shortcut key is used to show or hide the grid in powerpoint?",
    options: ["F9", "Ctrl + F9", "Alt + F9", "Shift + F9"],
    correct: "Shift + F9",
  },{
    id: "77",
    question: "Which of the following shortcut key is used to show or hide the grid in powerpoint?",
    options: ["Shift + F9", "Shift + F1", "Shift + F2", "None of the above"],
    correct: "Shift + F9",
  },{
    id: "78",
    question: "Which of the following shortcut key is used to change the case of the selected text?",
    options: ["Shift + F3", "Shift + F1", "Shift + F2", "None of these"],
    correct: "Shift + F3",
  },{
    id: "79",
    question: "Which of the following shortcut key is used to center align the text in a slide?",
    options: ["Ctrl + E", "Ctrl + L", "Ctrl + R", "None of these"],
    correct: "Ctrl + E",
  },{
    id: "80",
    question: "Which of the following shortcut key is used for help in powerpoint?",
    options: ["F1", "F2", "F3", "F4"],
    correct: "F1",
  },{
    id: "81",
    question: "Which of the following adds a text box on a slide of the powerpoint presentation?",
    options: ["Insert -> Text Box", "Design -> Text Box", "Format -> Text Box", "None of the above"],
    correct: "Insert -> Text Box",
  },{
    id: "82",
    question: "Is it possible to convert a powerpoint presentation into a video?",
    options: ["Yes", "No", "May be", "Can't say"],
    correct: "Yes",
  },{
    id: "83",
    question: " Is it allowed to make a PDF of the powerpoint presentation?",
    options: ["Yes", "No", "May be", "Can't say"],
    correct: "Yes",
  },{
    id: "84",
    question: "Which of the following view in powerpoint is used to add comments?",
    options: ["Slide sorter view", "Notes page view", "Normal view", "None of the above"],
    correct: "Notes page view",
  },{
    id: "85",
    question: "Which of the following menu in powerpoint includes the Picture, Text Box, Shapes, Clip Art?",
    options: ["File", "Insert", "Design", "None of these"],
    correct: "Insert",
  },{
    id: "86",
    question: "Which of the following is the collection of design choices, including special effects, colors, and fonts?",
    options: ["Data", "Theme", "Slide", "None of these"],
    correct: "Theme",
  },{
    id: "87",
    question: "In which of the following menu, the slide sorter view is available in powerpoint?",
    options: ["Insert", "View", "Design", "Animation"],
    correct: "View",
  },{
    id: "88",
    question: "The shortcut to print powerpoint presentation is - ",
    options: ["Ctrl + A", "Ctrl + P", "Ctrl + Shift + P", "Alt + P"],
    correct: "Ctrl + P",
  },{
    id: "89",
    question: "Which of the following is the shortcut key used to start the presentation from the current slide?",
    options: ["F5", "Shift + F5", "Ctrl + F5", "None of these"],
    correct: "Shift + F5",
  },{
    id: "90",
    question: "What is the shortcut key to insert a hyperlink in the slide?",
    options: ["Ctrl + H", "Ctrl + K", "Ctrl + A", "Not possible to insert hyperlinks"],
    correct: "Ctrl + K",
  },
  {
    id: "91",
    question: "Which of the following shortcut key in powerpoint is used to repeat the recent find?",
    options: ["F1", "F2", "F3", "F4"],
    correct: "F4",
  },
  {
    id: "92",
    question: "We can create a new presentation in powerpoint from -",
    options: ["Blank Presentation", "From existing presentation", "Both (a) and (b)", "Neither (a) nor (b)"],
    correct: "Both (a) and (b)",
  },
  
  {
    id: "93",
    question: "The keyboard shortcut to show/hide ink markup?",
    options: ["Alt + M", "Alt + H", "Ctrl + M", "Shift + M"],
    correct: "Ctrl + M",
  },
  
  {
    id: "94",
    question: " The keyboard shortcut to stop media playback?",
    options: ["Alt + S", "Alt + T", "Esc", "Alt + Q"],
    correct: "Alt + Q",
  },
  
  {
    id: "95",
    question: "What is the default color of the pen in a PowerPoint slide?",
    options: ["Red", "Blue", "Green", "Yellow"],
    correct: "Red",
  },
  
  {
    id: "96",
    question: " Which animation(s) is/are used to make text appear one line at a time in a presentation?",
    options: ["Appear", "Fade In", "Fly In", "All of the above"],
    correct: "All of the above",
  },
  
  {
    id: "97",
    question: "Live presentation feature was added from which Microsoft PowerPoint version?",
    options: ["MS PowerPoint 2017", "MS PowerPoint 2015", "MS PowerPoint 2019", "MS PowerPoint 2013"],
    correct: "MS PowerPoint 2013",
  },
  
  {
    id: "98",
    question: "What is the keyboard shortcut to start and stop the slideshow of a PowerPoint presentation?",
    options: ["Alt + F4", "Esc", "F5", "Alt + F5"],
    correct: "F5",
  },
  
  {
    id: "99",
    question: "The shortcut key to open the Transitions tab and add transitions between slides.?",
    options: ["Ctrl + K", "Ctrl + T", "Alt + K", "Alt + T"],
    correct: "Alt + K",
  },
  
    {
    id: "100",
    question: "The shortcut key to close PowerPoint?",
    options: ["Ctrl + Q", "F4", "Ctrl + Delete", "All of the above"],
    correct: "Ctrl + Q",
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