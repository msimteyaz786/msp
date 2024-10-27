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
let count = 21;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "What is the purpose of the HTML tag?",
    options: ["To define metadata about an HTML document", "To insert media files", "To create hyperlinks", "To define a list"],
    correct: "To define metadata about an HTML document",
  },
  {
    id: "1",
    question: "What is the correct HTML for adding a background color to a page?",
    options: ['Tag: bg color=" "','Tag: background color=" "','Tag: color', 'Tag: body style="background-color:" "'],
    correct: 'Tag: body style="background-color:" "',
  },
  {
    id: "2",
    question: "Which HTML tag is used to define a footer in a web page?",
    options: ["Tag: foot", "Tag: footer", "Tag: bottom", "Tag: end"],
    correct: "Tag: footer",
  },
  {
    id: "3",
    question: "Which HTML tag is used to define the main content of a web page?",
    options: ["Tag: content", "Tag: article", "Tag: main", "Tag: section"],
    correct: "Tag: main",    
  },
  {
    id: "4",
    question: "Which tag is used to define a paragraph in HTML?",
    options: ["Text", "Para", "P", "Paragraph"],
    correct: "P",    
  },
  {
    id: "5",
    question: "What is the correct HTML tag for the largest heading?",
    options: ["Heading", "H6", "H1", "Heading6"],
    correct: "H1",    
  },
  {
    id: "6",
    question: 'What does the "alt" attribute in the  tag specify?',
    options: ["Altitude of the image", "Alternative text for an image", "Alignment of the image", "Alternate source for the image"],
    correct: "Alternative text for an image",    
  },
  {
    id: "7",
    question: "What is the correct HTML for inserting an image?",
    options: ['img href="image.jpg" alt="Image"', 'image src="image.jpg" alt="Image"', 'img src="image.jpg" alt="Image"', 'picture src="image.jpg" alt="Image"'],
    correct: 'img src="image.jpg" alt="Image"',
  },
  {
    id: "8",
    question: "What is defaullt value of the BORDER IN TABLE attribute is?",
    options: ["2pixel", "1pixel", "3pixel", '8pixel'],
    correct: '1pixel',  
  },
  {
    id: "9",
    question: "Which attribute is used to define inline styles in HTML?",
    options: ["style", "class", "id", "format"],
    correct: "style",    
  },
  {
    id: "10",
    question: "Which tag is used to define a table row in HTML?",
    options: ['TH tag', 'TR tag', 'TABLE tag', 'TH tag'],
    correct: 'TR tag',    
  },
  {
    id: "11",
    question: "Which tag is used to define a hyperlink in HTML?",
    options: ["Tag: link", "Tag: href", 'Tag: a href=" "', "Tag: hyperlink"],
    correct: 'Tag: a href=" "',    
  },
  {
    id: "12",
    question: "What is the correct HTML tag for inserting a line break?",
    options: ["Tag: br", "Tag: hyperlink", "Tag: linebreak", "Tag: lb"],
    correct: "Tag: br",    
  },
  
  {
    id: "13",
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Markup Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
    correct: "Hyper Text Markup Language",    
  },
  {
    id: "14",
    question: "Which tag is used to define an unordered list <.....> in HTML?",
    options: ["ul", "li", "dl", "ol"],
    correct: "ul",    
  },
  {
    id: "15",
    question: "In html _______ tag defines paragraph.",
    options: ["p tag", "para tag", "table tag", "section tag"],
    correct: "p tag",    
  },
  {
    id: "16",
    question: "What is Default extension for a HTML document?",
    options: [".htm", ".html", "both", "none"],
    correct: "both",    
  },
  {
    id: "17",
    question: "HTML tag begins with______ symbol.",
    options: ["Gratter than(>)", "Less than(<)", "&lt;!", "!&gt;"],
    correct: "Less than(<)",    
  },
  {
    id: "18",
    question: "HTML tag ends with _____symbol.",
    options: ["Gratter than(>)", "Less than(<)", "&lt;!", "!&gt;"],
    correct: "Gratter than(>)",    
  },
  {
    id: "19",
    question: "Border-spacing is given in _________.",
    options: ["cm", "pixels", "mm", "inch"],
    correct: "pixels",    
  },
  {
    id: "20",
    question: "Which input type defines a slide control?",
    options: ["range", "slider", "search", "controls"],
    correct: "range",    
  },
  {
    id: "21",
    question: "Which browser does the HTML5 suports?",
    options: ["Firefox", "Safari", "Internet", "All the mentioned above"],
    correct: "All the mentioned above",    
  },
  {
    id: "22",
    question: "_______is the replacement for coocking in HTML5.",
    options: ["Java scriipts", "Web Server", "Local storage", "All of the above"],
    correct: "Local storage",    
  },{
    id: "23",
    question: "The tags elements in XML are ________.",
    options: ["case insensitive", "case sensitive", "browser dependent", "All of the above"],
    correct: "case sensitive",    
  },{
    id: "24",
    question: "The tags elements in HTML are ________.",
    options: ["case insensitive", "case sensitive", "browser dependent", "All of the above"],
    correct: "case insensitive",    
  },{
    id: "25",
    question: "Which of the following tag <...> is used to define in a drop-down selection list?",
    options: ["select tag", "list tag", "option tag", "dropdown"],
    correct: "option tag",    
  },{
    id: "26",
    question: "Which of the following tag <...> is used to create in a drop-down selection list?",
    options: ["select tag", "list tag", "option tag", "dropdown"],
    correct: "select tag",   
  },{
    id: "27",
    question: "Which of the following is not a HTML5 tag.",
    options: ["source", "video", "p", "slider"],
    correct: "slider",    
  },{
    id: "28",
    question: "In which year HTML was first propsed.",
    options: ["1989", "1990", "2010", "2000"],
    correct: "1990",    
  },{
    id: "29",
    question: "Which of the following element is used for styling HTML5 layout?",
    options: ["CSS", "jQuery", "PHP", "SQL"],
    correct: "CSS",    
  },{
    id: "30",
    question: "How can you open a link in its own unique new window?",
    options: ['TARGET="_NEW_WINDOW"', 'TARGET="NEW"', 'TARGET=" _BLANK"', 'None'],
    correct: 'TARGET=" _BLANK"',    
  },
  {
    id: "31",
    question: "In which part of the HTML metadata is contained?",
    options: ["head tag", "title tag", "html tag", "body tag"],
    correct: "head tag",    
  },
  {
    id: "32",
    question: "Which of the following will not be found in the 'head' section?",
    options: ["Table", "Metatags", "Title", "None of these"],
    correct: "Table",    
  },{
    id: "33",
    question: "If you create an HTML page in word processor _____.",
    options: ["Save it with binary file", "Save it with ASCII text file", "All of these ", "Save it with WMF file"],
    correct: "Save it with ASCII text file",    
  },{
    id: "34",
    question: "Which property tells how many rows a cell should span?",
    options: ["rowspan=n", "colspan=n", "None", "Both"],
    correct: "rowspan=n",    
  },{
    id: "35",
    question: "The attribute used choose the type of font in HTML is?",
    options: ["Character", "Face", "Text-type", "All of these"],
    correct: "Face",    
  },
  {
    id: "36",
    question: "All HTML documents will be basically_______.",
    options: ["Text", "Pictures", "None", "Graphs"],
    correct: "Text",    
  },
  {
    id: "37",
    question: "HTML supports _____.",
    options: ["Ordered list", "Unordered list", "Both, Ordered list & Unordered list", "Does not support those types"],
    correct: "Both, Ordered list & Unordered list",    
  },
  {
    id: "38",
    question: "How many heading tags are supported by HTML?",
    options: ["3", "4", "5", "6"],
    correct: "6",    
  },
  {
    id: "39",
    question: "What is tag tt tag in html ",
    options: ["It renders fonts as teletype text font style", " It renders fonts as truetype text font style", "It renders fonts as truncate text font style ", "All the above"],
    correct: "It renders fonts as teletype text font style",    
  },
  {
    id: "40",
    question: "HTML is used to create _______.",
    options: ["Database", "Web page", "Word document", "Web serve"],
    correct: "Web page",    
  },
  {
    id: "41",
    question: "All normal webpages consists of ______.",
    options: ["Head and Body", "None of these", "Body and frameset", "Top and bottom"],
    correct: "Head and Body",    
  },
  {
    id: "42",
    question: "What is DOM in HTML?",
    options: ["Hierarchy of objects in ASP.NET", "Application programming interface", "Convention for representing and interacting with object in html documents", "All of the above"],
    correct: "Convention for representing and interacting with object in html documents",    
  },
  {
    id: "43",
    question: "Marquee is a tag in HTML to__________ .",
    options: ["Display text with scrolling effect", "Mark the list of items to maintain inqueue", "Mark the text so that it is hidden in browser", "Display text with strikeout effect"],
    correct: "Display text with scrolling effect",    
  },
  {
    id: "44",
    question: "To set the color for table borders, use ____.",
    options: ["bgimage= #112233", "tablecolor= # 003344", "bordercolor= #112233", "bgcolor= #003300"],
    correct: "bordercolor= #112233",    
  },
  {
    id: "45",
    question: "The default value of Border attribute is ______.",
    options: ["1 pixel", "2 pixel", "pixel", "4 pixel"],
    correct: "1 pixel",    
  },
  {
    id: "46",
    question: "Fundamental HTML Block is known as _____.",
    options: ["HTML Element", "HTML Attribute", "HTML tag", "HTML body"],
    correct: "HTML tag",    
  },
  {
    id: "47",
    question: " HTML uses ________.",
    options: ["User defined tags", "Pre-specified tags", "Fixed tags defined by the language", "Tags only for linking"],
    correct: "Fixed tags defined by the language",    
  },
  // {
  //   id: "49",
  //   question: "The HTML '<canvas>' element is used to:",
  //   options: ["Mmanipulate data in MySQL", "Create draggable elements", "Draw graphics", "Display database records"],
  //   correct: "Draw graphics",    
  // },
  {
    id: "50",
    question: "In HTML, which attribute is used to specify that an input field must be filled out?",
    options: ["Required", "Placeholder", "Validate", "Formvalidate"],
    correct: "Required",    
  },
  {
    id: "51",
    question: "A part form 'b' tag, what other tag makes text bold?",
    options: ["Black tag", "Emp tag", "Strong tag", "Fat tag"],
    correct: "Strong tag",    
  },
  {
    id: "52",
    question: "The following html tag is used to display the content as a moving text?",
    options: ["marquee tag", "field tag", "move tag", "none of these"],
    correct: "marquee tag",    
  },
  {
    id: "53",
    question: "Which element represent preformed text according to the keyboard?",
    options: ["main tag", "pre tag", "dir tag", "dd tag"],
    correct: "pre tag",    
  },
  {
    id: "54",
    question: "_______method is used to sent form data as HTTP post.",
    options: ["Get", "Post", "Both, Get and Post", "None"],
    correct: "Post",    
  },
  {
    id: "54",
    question: "_______method is used to sent form data as HTTP post.",
    options: ["Get", "Post", "Both, Get and Post", "None"],
    correct: "Get",    
  },
  {
    id: "55",
    question: "The correct sequence of HTML tags for starting a webpage is _____________.",
    options: ["Head, Title, HTML, Body", "HTML, Head, Title, Body", "Head, Title, Body", "HTML, Body, Title, Head HTML"],
    correct: "HTML, Head, Title, Body",    
  },
  {
    id: "56",
    question: "HTML links are Defined with <_a_> 'anchor' Tag Address is Specified By Attribute:",
    options: ["href", "hlink", "src", "src-link"],
    correct: "href",    
  },
  {
    id: "57",
    question: "To create HTML documents you require a: ",
    options: ["Web jpage editing software", "High powered computer", "Just a notepad can be used", "None of the above"],
    correct: "Just a notepad can be used",    
  },
  {  
    id: "58",
    question: "Favicon stands for _______.",
    options: ["Fave icon", "Favorite icon", "Fave icon, Short icon, Website icon", "None "],
    correct: "Fave icon, Short icon, Website icon",    
  },
  {
    id: "59",
    question: "HTML web pages can be read by ______.",
    options: ["Compiler", "Server", "Web Browser", "Interpreter"],
    correct: "Web Browser",    
  },
  {
    id: "60",
    question: "Types of Browser",
    options: ["Chrome", "Mozila", "Firefox", "All of these"],
    correct: "All of these",    
  },
  {
    id: "61",
    question: "How to create a checkbox in HTML form?",
    options: ['input type="text" ', 'input type="textarea"', 'input type="checkbox"', 'input type="button"'],
    correct: 'input type="checkbox"',    
  },
  {
    id: "62",
    question: "What an artical element should not contain?",
    options: ["Main element", "Text or embedded content", "Video and Audio", "Image"],
    correct: "Main element",    
  },{
    id: "62",
    question: "In which year HTML was first proposed?",
    options: ["1990", "1989", "2008", "1957"],
    correct: "1990",    
  },{
    id: "62",
    question: "What does include in 'main' tag?",
    options: ["Header", "Sidebar", "Artical", "Footer"],
    correct: "Header",    
  },{
    id: "62",
    question: "The _________ element can be used to identify your html file to the outside world.",
    options: ["Title", "Body", "Head", "None"],
    correct: "Title",    
  },{
    id: "62",
    question: "The symbol that identifies that 'href' attribute as the name of a name anchor rather than an address or filename is:",
    options: ['"&"', '"#"', '"!"', '"%"'],
    correct: '"#"',    
  },{
    id: "62",
    question: "HTML is the method where ordinary text can be convert into.",
    options: ["ASCII Text", "EBCDIC Text", "Hypertext", "None of these"],
    correct: "Hypertext",    
  },{
    id: "62",
    question: "The tag to give visual divison between sections of the page and which causes the browser to draw an embossed line is:",
    options: ["HL Tag", "HR Tag", "UR tag", "None of these"],
    correct: "HR Tag",    
  },{
    id: "62",
    question: "In HTML ______ tag contains the information about the current document such as title etc.",
    options: ["Body", "TD", "Head", "None of these"],
    correct: "Head",    
  },{
    id: "62",
    question: "The components of multimedia are __________.",
    options: ["text, Picture, Video, Sound", "Text,Picture Animation", "Text, Picture, Video, Animatin, Sound", "None of these"],
    correct: "Text, Picture, Video, Animatin, Sound",    
  },{
    id: "62",
    question: "The domain for India is ___________.",
    options: [".ind", ".org", ".in", ".gov"],
    correct: ".in",    
  },{
    id: "62",
    question: "Which of the following is used to read an HTML page and render it?",
    options: ["Web Server", "Web Network", "Web Browser", "Web Matrix"],
    correct: "Web Browser",    
  },{
    id: "62",
    question: "In which part of the HTML metadata is contained",
    options: ["Head Tag", "Title Tag", "Body Tag", "HTML Tag"],
    correct: "Head Tag",    
  },{
    id: "62",
    question: "Which element is used to the highlight text in HTML5?",
    options: ["Marquee tag", "Mark tag", "Highlight tag", "Botd tag"],
    correct: "Mark tag",    
  },{
    id: "62",
    question: "Which of the following is not the element accociated with the HTML table layout?",
    options: ["Spanning", "Color", "Alignment", "Size"],
    correct: "Spanning",    
  },{
    id: "62",
    question: "Which character is used to represent when a tag is closed in HTML?",
    options: ["#", "@", "!", "/"],
    correct: "/",    
  },{
    id: "62",
    question: "Which HTML element is used for short quote?",
    options: ["em tag", "abbr tag", "q tag", "blockquote tag"],
    correct: "q tag",    
  },{
    id: "62",
    question: "Which of the following extension is used to save an HTML file?",
    options: [".hl", ".h", ".html", ".htm"],
    correct: ".html",    
  },{
    id: "62",
    question: "Which tag is used to create a next line in HTML?",
    options: ["B tag", "HR Tag", "BR Tag", "A tag"],
    correct: "BR Tag",    
  },{
    id: "62",
    question: "What is the HR tag in HTML?",
    options: ["For making content apperance italics", "To create vertical rule between sections", "To create horizontal rule between sections", "To create a line break"],
    correct: "To create horizontal rule between sections",    
  },{
    id: "62",
    question: "Which attribute is not eccential used iframe tag?",
    options: ["Frameborder", "Width", "Height", "src"],
    correct: "Frameborder",    
  },{
    id: "82",
    question: "Which works similar to 'b' tag in html?",
    options: ["blockquote", "strong", "em", "i"],
    correct: "strong",    
  },{
    id: "83",
    question: "Which atribute specifies a unique alphanumberic identifier to be asscociated with an element?",
    options: ["Class", "Id", "Article", "Type"],
    correct: "Id",    
  },{
    id: "84",
    question: "Which of the following is an HTML specification used to add more information to HTML tags?",
    options: ["Modifydata", "Minidata", "Macrodata", "Microdata"],
    correct: "Microdata",    
  },{
    id: "85",
    question: "Which HTML element is used for YouTube videos?",
    options: ["samp tag", "small tag", "iframe tag", "frame tag"],
    correct: "iframe tag",    
  },{
    id: "86",
    question: "Which of the following element is used for canvas graphics?",
    options: ["css element", "paint element", "graphichs element", "canvas element"],
    correct: "canvas element",    
  },{
    id: "87",
    question: "How many times can HTML5 events be fired?",
    options: ["Multiple", "One time", "Sirf two times", "Never"],
    correct: "Multiple",    
  },{
    id: "88",
    question: "Modernizer does actually add missing functionalities to browsers save for the HTML5 tags styling support.",
    options: ["TRUE", "FALSE", "Nothing can be said", "None of the mentioned"],
    correct: "FALSE",    
  },{
    id: "89",
    question: "Which of the follwing colors contains equal amounts of RGB?",
    options: ["Red", "Green", "Blue", "All of these"],
    correct: "All of these",    
  },{
    id: "90",
    question: "What is the effect of the b tag in HTML?",
    options: ["It converts the text within it to bold font", "It is used to write black color font", "It is used to change the font size", "None of these"],
    correct: "It converts the text within it to bold font",    
  },{
    id: "91",
    question: "What is the function of the HTML style attribute?",
    options: ["It is used to add styles to an HTML element", "It is used to uniquely identify some specific styles of some element.", "May be Both", "Nothing may be in these"],
    correct: "It is used to add styles to an HTML element",    
  },{
    id: "92",
    question: "What is the smallest header in HTML by default?",
    options: ["H1", "H3", "H5", "H6"],
    correct: "H6",    
  },{
    id: "93",
    question: "What tag is used to render an image on a webpage?",
    options: ["img", "src", "image", "None"],
    correct: "img",    
  },{
    id: "94",
    question: "Which attribute is used to provide a unique name to an HTML element?",
    options: ["id", "class", "type", "None"],
    correct: "id",    
  },{
    id: "95",
    question: "Which of the following is correct about HTML?",
    options: ["HTML uses Uer Defined Tags.", "HTML uses tags defined within the language", "Both", "None of these"],
    correct: "HTML uses tags defined within the language",    
  },{
    id: "96",
    question: "Which of the following is true about HTML tags?",
    options: ["Are case sensitive", "Are not case sensitive", "Are in uppercase", "Are in Lowercase"],
    correct: "Are not case sensitive",    
  },{
    id: "97",
    question: "Which of the following properties is used to change font of text?",
    options: ["Font-family", "font-size", "Text-align", "None of these"],
    correct: "Font-family",    
  },{
    id: "98",
    question: "Which properties allows an image link to show a text lavel in HTML?",
    options: ["alt", "str", "alternate", "None of these"],
    correct: "alt",    
  },{
    id: "99",
    question: "How is black color represent in terms of RGB values?",
    options: ["RGB(0,0,0)", "RGB(100,100,100)", "RGB(255,0,255)", "RGB(100,0,0)"],
    correct: "RGB(0,0,0)",    
  },{
    id: "100",
    question: "Colors are defined in HTML using?",
    options: ["RGB Values", "HEX Values", "RGBA Values", "All of the above"],
    correct: "All of the above",    
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
      count = 21;
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
  count = 21;
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

