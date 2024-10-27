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
    question: "Cascading Style Sheet (CSS) _________ is a language.",
    options: ["Structural", "Presentational", "Markup", "Behavioral"],
    correct: "Presentational",
  },
  {
    id: "1",
    question: "Style that are placed with style tag are called as - ",
    options: ['Embedded Styles', "Inline Style", "HTML Style ", "External Style"],
    correct: "Embedded Styles",
  }, {
    id: "",
    question: "Name the syntax of declaring a CSS rule is - ",
    options: ["Property - name: value", "Property - name = value", "Property + name: value", "Property : name - value"],
    correct: "Property - name: value",
  }, {
    id: "",
    question: "Which tag is used to link an external style sheet to a web page?",
    options: ["@media", "Style tag", "Script tag", "Link tag"],
    correct: "Link tag",
  }, {
    id: "",
    question: "Which symbol indicates the 'class selector' in the CSS?",
    options: ["Plus (+)", "Hash (#)", "Dot (.)", "None of these"],
    correct: "Dot (.)",
  }, {
    id: "",
    question: "Which symbol indicates the 'id selector' in the CSS?",
    options: ["Plus (+)", "Hash (#)", "Dot (.)", "None of these"],
    correct: "Hash (#)",
  }, {
    id: "",
    question: "Which of the following CSS list properties is correct?",
    options: ["Set defferent list item markers for unordered list", "Set an image as the list item mark", "Set different list item markers for ordered list", "All of the above"],
    correct: "All of the above",
  }, {
    id: "",
    question: "Which selector is being used to specify a group of elements?",
    options: ["Name", "Tag", "ID", "Class"],
    correct: "Class",
  }, {
    id: "",
    question: "Which properties is used in CSS to change the background color?",
    options: ["background:color", "background-color", "bgcolor", "color"],
    correct: "background-color",
  }, {
    id: "",
    question: "CSS stand for - ",
    options: ["Cascading Style Sheets", "Cashcade Style Sheet", "Color and Style Sheet", "None of these"],
    correct: "Cascading Style Sheets",
  }, {
    id: "",
    question: "Which of the following CSS property is used to set the backgournd-image of an element?",
    options: ["background-image", "background-attachment", "background-color", "None of these"],
    correct: "background-image",
  }, {
    id: "",
    question: "Which of the following is the correct syntax to make the background-color of all paragraph elements to green?",
    options: ["p{background-color: green;}", "p{background-color: #green;}", "p{background-color: .green;}", "None of these"],
    correct: "p{background-color: green;}",
  }, {
    id: "",
    question: "Which of the following is the correct syntax to display the 'hyperlinks' without any underline?",
    options: ["a{text-decoration: none;}", "a{text-decoration: underline;}", "a{decoration : no-underline;}", "None of these"],
    correct: "a{text-decoration: none;}",
  }, {
    id: "",
    question: "Which of the following property is used as the shorthand property for the padding properties?",
    options: ["padding-left", "padding-right", "padding", "All of these"],
    correct: "padding",
  }, {
    id: "",
    question: "Which of the following property is used as the shorthand property for the margin properties?",
    options: ["margin-left", "margin-right", "margin", "All of these"],
    correct: "margin",
  },
  {
    id: "",
    question: "The CSS property used to make the text bold is _____.",
    options: ["font: bold", "font-weight : bold", "weight : bold", "style : bold"],
    correct: "font-weight : bold",
  }, {
    id: "",
    question: "In CSS property used to specify the transparency of an element is - ",
    options: ["opacity", "filter", "visibility", "ovarlay"],
    correct: "opacity",
  }, {
    id: "",
    question: "Which of the following syntax is correct in CSS to make each word of a sentence start with a capital letter?",
    options: ["text-style: capital;", "text-transform: capitalize;", "transform: capitalize", "text-transfrom: capital;"],
    correct: "text-transform: capitalize;",
  }, {
    id: "",
    question: "Which of the following is the correct syntax to select all paragraph elements in a div element?",
    options: ["div p", "p", "div#p", "div~p"],
    correct: "div p",
  }, {
    id: "",
    question: "Which of the following is the correct syntax to select the p sibling of a div element?",
    options: ["div ~ p", "p", "div + p", "div - p"],
    correct: "div ~ p",
  }, {
    id: "",
    question: "The CSS property used to draw a line around the elements outside the border?",
    options: ["border", "padding", "outline", "line"],
    correct: "outline",
  }, {
    id: "",
    question: "Which of the following CSS properties is used to add shadow to the text?",
    options: ["text-stroke", "text-shadow", "text-overflow", "text-decoration"],
    correct: "text-shadow",
  }, {
    id: "",
    question: "If you want to make the rounded border, or rounded corners around then which element you will be used?",
    options: ["border-radius", "border-collapse", "border-spacing", "None of these"],
    correct: "border-radius",
  }, {
    id: "",
    question: "How many ways can CSS be written in?",
    options: ["1", "2", "3", "4"],
    correct: "3",
  }, {
    id: "",
    question: "The CSS property used to set the indentation of the first line in a block of text is - ",
    options: ["text-stroke", "text-indent", "text-decoration", "text-overflow"],
    correct: "text-indent",
  }, {
    id: "",
    question: "What is the primary purpos of CSS in web development?",
    options: ["To create a web page", "To create style web page", "To store data", "To paragraph web application"],
    correct: "To create style web page",
  }, {
    id: "",
    question: "Which of the following is a valid way to integrate CSS into a webpage?",
    options: ["Inline", "External", "Internal", "All three ways"],
    correct: "All three ways",
  }, {
    id: "",
    question: "Which CSS property is used to change the text color of an element?",
    options: ["text-color: red;", "font:color: red;", "color: red;", "backgournd-color: red;"],
    correct: "color: red;",
  }, {
    id: "",
    question: "Given the following CSS, what color will the 'h1' text be?, like → body{color:white;} h1{color:yellow;} ?",
    options: ["Red", "Green", "Yellow", "Black"],
    correct: "Yellow",
  }, {
    id: "",
    question: "Which selector is used to target an element on its id?",
    options: ["#id_name", ".id_name", "*id_name", "None of these"],
    correct: "#id_name",
  }, {
    id: "",
    question: "What does the universal selector (*) do in CSS?",
    options: ["Targets no elements", "Targets all elements in a documents", "Targets the body element", "Targets elements with a specific id"],
    correct: "Targets all elements in a documents",
  }, {
    id: "",
    question: "How do you select elements with the class name 'mspoint'?",
    options: [".mspoint", "#mspoint", "*mspoint", "mspoint"],
    correct: ".mspoint",
  }, {
    id: "",
    question: "What components make up the CSS Box Model?",
    options: ["Content, Padding, Border, Margin", "Padding, Margin, Border, Shadow", "Content, Margin, Border, Outline,", "Content, Padding, Shadow, Margin"],
    correct: "Content, Padding, Border, Margin",
  },{
    id: "",
    question: "Which property is used to set the space between the border of an element and its content?",
    options: ["Margin", "Padding", "Border", "Outline"],
    correct: "Padding",
  }, {
    id: "",
    question: "What does the 'box-sizing' property do?",
    options: ["Change the CSS Box Model calculation", "Alters the display property", "Adjusts the border thickness", "Modifies the margin size"],
    correct: "Change the CSS Box Model calculation",
  }, {
    id: "",
    question: "Which properties is used to control outer space around an element?",
    options: ["Padding", "Margin", "Border", "Content"],
    correct: "Margin",
  },{
    id: "",
    question: "How can you make the total width of an element be 50px including padding and border?",
    options: ["Set width to 50px without 'box-sizing' property", "Use 'box-sizing: border-box;' with width set to 50px", "Use 'box-sizing: content-box;' with width set to 50px", "Set width, padding, and border so their sum is 50px"],
    correct: "Use 'box-sizing: border-box;' with width set to 50px",
  }, {
    id: "",
    question: "What is the default value of the 'box-sizing' property?",
    options: ["content-cox", "border-box", "jpadding-box", "margin-box"],
    correct: "content-cox",
  }, {
    id: "",
    question: "Given an element with padding:20px; and width: 200px;, what is the total width of the element?",
    options: ["200px", "220px", "240px", "260px"],
    correct: "240px",
  },{
    id: "",
    question: "Which of the folowing is not a type of combitor in CSS?",
    options: [">", "~", "+", "*"],
    correct: "*",
  }, {
    id: "",
    question: "Which of these protocols would enable a hyperlink to easily access any file on the available local file system?",
    options: ["ftp", "https", "file", "telnet"],
    correct: "file",
  }, {
    id: "",
    question: "Which CSS3 Color Feature is like RGB color and adds the alpha channel value so as to specify a color’s opacity?",
    options: ["RGB", "RGBa", "RGBalpha", "AlphaRGB"],
    correct: "RGBa",
  },{
    id: "",
    question: "Which property sets the actual amount of spacing between the various letters?",
    options: ["letter-spacing", "letter-space", "line-height", "space"],
    correct: "letter-space",
  }, {
    id: "",
    question: "The screen media type can be used with:",
    options: ["handheld screens", "all devices", "computer devices", "television-type devices"],
    correct: "computer devices",
  }, {
    id: "",
    question: "What tag do you use to directly write the style rules within a document found within the document’s head?",
    options: ["css", "style", "php", "script"],
    correct: "style",
  },{
    id: "",
    question: " No single, integrated ____________________ specification exists, because it gets split into various separate modules:",
    options: ["CSS4", "CSS3", "CSS2", "CSS1"],
    correct: "CSS4",
  }, {
    id: "",
    question: "Which value is a slightly bolder weight than the standard bold in the font attribute?",
    options: ["dark", "lighter", "light", "emphasize"],
    correct: "dark",
  }, {
    id: "",
    question: "The CSS property that is equivalent to the align attribute is:",
    options: ["text-align", "float", "ext-align & float", "centre"],
    correct: "float",
  },{
    id: "",
    question: "Which of these functions would convert the color of an element by the filter property to a grey shade, for use?",
    options: ["grayscale()", "shade()", "brightness()", "black()"],
    correct: "grayscale()",
  }, {
    id: "",
    question: "The “color:red” in CSS can be known as _____________:",
    options: ["Value", "Declaration", "Selector", "Rule"],
    correct: "Declaration",
  }, {
    id: "",
    question: "The correct syntax to give a line over text is -",
    options: ["text-decoration: underline;", "text-decoration: overline;", "text-decoration: none;", "text-decoration: line-through;"],
    correct: "text-decoration: overline;",
  },{
    id: "",
    question: "text-decoration: underline",
    options: ["quotes property", "None of the above", "hyphens property", "z-index property"],
    correct: "quotes property",
  }, {
    id: "",
    question: "The CSS property which is used to define the set the difference between two lines of your content is - ",
    options: ["None of these", "line-height property", "max-height property", "min-height property"],
    correct: "line-height property",
  }, {
    id: "",
    question: "The CSS property used to set the minimum width of the element's content box is -",
    options: ["max-width property", "min-width property", "width property", "All of the above"],
    correct: "min-width property",
  },{
    id: "",
    question: "Which of the following selector in CSS is used to select the elements that do not match the selectors?",
    options: [":! selector", ":empty selector", ":not selector", "None of the above"],
    correct: ":not selector",
  }, {
    id: "",
    question: "The CSS property used to set the distance between the borders of the adjacent cells in the table is.",
    options: ["All of these", "border-spacing", "border-radius", "border-collapse"],
    correct: "border-spacing",
  }, {
    id: "",
    question: "Which of the following CSS property is used to specify the space between every letter inside an element?",
    options: ["alpha-spacing", "letter-spacing", "character-spacing", "alphabet-spacing"],
    correct: "letter-spacing",
  },{
    id: "",
    question: "The HTML attribute used to define the inline styles is",
    options: ["style", "styles", "class", "None of these"],
    correct: "style",
  }, {
    id: "",
    question: "What is triggered when a user click a mouse button?",
    options: ["A property", "A function", "A event", "An click"],
    correct: "A event",
  }, {
    id: "",
    question: "Which one of the follwing form control types does Not use the input element?",
    options: ["Checkbox", "Password", "Multitext", "Text"],
    correct: "Multitext",
  },{
    id: "",
    question: "The stylesheet file will not be loaded by the browser if you on it _______.",
    options: ["rel", "style", "body", "html"],
    correct: "rel",
  }, {
    id: "",
    question: ".NET framwork was designed and developed by ___________.",
    options: ["Microsoft", "IBM", "Google", "Oracle"],
    correct: "Microsoft",
  }, {
    id: "",
    question: "What CSS describes?",
    options: ["CSS describes how calculation perform on button click.", "CSS describes how HTML elements are to be displayed on screen, paper, or in other media", "Both", "None of these"],
    correct: "CSS describes how HTML elements are to be displayed on screen, paper, or in other media",
  },{
    id: "",
    question: "What is a CSS selector?",
    options: ["A CSS selector is the CSS class name", "A CSS selector is the set of properties that are going to be applied on HTML elements", "A CSS selector is name of CSS file.", "A CSS selector is the first part of a CSS Rule. It may an HTML element or pattern of elements."],
    correct: "A CSS selector is the first part of a CSS Rule. It may an HTML element or pattern of elements.",
  }, {
    id: "",
    question: "In a CSS file, there is a CSS rule for paragraphs tags – what does p can be called?",
    options: ["Selector", "Attribute", "Property", "Tag"],
    correct: "Tag",
  }, {
    id: "",
    question: "Inline styles are written within the _____ attribute.",
    options: ["style", "css", "stylesheet", "All"],
    correct: "style",
  },{
    id: "",
    question: "CSS comments are placed within the ______.",
    options: ["// your element", "/* your element */", "Both are possible", "None of these"],
    correct: "/* your element */",
  }, {
    id: "",
    question: "From the given options which is/are the valid way to represent a color?",
    options: ['A valid color name like "blue"', 'HEX code like "#0000ff"', 'RGB Value like "rgb(0,0,255)"', 'All of the above'],
    correct: 'All of the above',
  }, {
    id: "",
    question: "Which property is used to define the font of the element's text?",
    options: ["All of the above", "font-style", "font-family", "font"],
    correct: "font-family",
  },
  
  {
    id: "",
    question: "To make a text italic, which CSS property is used?",
    options: ["font: italic;", "font-family: italic", "font-style: italic;", "All of the above"],
    correct: "font-style: italic;",
  }, {
    id: "",
    question: "What are the valid values of font-style property?",
    options: ["inherit, italic, normal, oblique", "underline, bold, italic", "normal, bold, italic", "italic, bold, bolder"],
    correct: "inherit, italic, normal, oblique",
  }, {
    id: "",
    question: "Why we use font-weight property in CSS?",
    options: ["Sets how thick or thin characters in text should be displayed.", "Sets the size of the font", "Both", "None of these"],
    correct: "Sets how thick or thin characters in text should be displayed.",
  },{
    id: "",
    question: "What is/are the correct value(s) of font-weight property?",
    options: ["bold, italic, underline", "normal, bold, italic", "normal, bold, bolder, lighter, initial, and inherit", "None of these"],
    correct: "normal, bold, bolder, lighter, initial, and inherit",
  }, {
    id: "",
    question: "What is the correct syntax of border property in CSS?",
    options: ["border: border-width border-style border-color", "border: border-color border-width border-style", "border: border-style border-width border-color", "All of the above"],
    correct: "border: border-width border-style border-color",
  }, {
    id: "",
    question: "Which of the following is the correct syntax to display the hyperlinks without any underline?",
    options: ["a {text-decoration : underline;}", "a {text-decoration : none;}", "a {text-decoration : block;}", "None of the above"],
    correct: "a {text-decoration : none;}",
  },{
    id: "",
    question: "Which of the following is the correct syntax to remove the underline on hyperlinks and visited hyperlinks?",
    options: ["a {text-decoration : underline;}, a:visited {text-decoration : underline;}", "a {text-decoration : block;}, a:visited {text-decoration : block;}", "a {text-decoration : none;}, a:visited {text-decoration : none;}", "None of the above"],
    correct: "a {text-decoration : none;}, a:visited {text-decoration : none;}",
  }, {
    id: "",
    question: "Which CSS property is used to style the hyperlinks on hover (Mouse over)?",
    options: ["a:mouseover", "a:move", "a:mover", "a:hover"],
    correct: "a:hover",
  }, {
    id: "",
    question: "If you want to use a red dotted border around an image, which CSS property is used for that?",
    options: ["border-style", "border-color", "border-style & border-color", "border-decoration"],
    correct: "border-style & border-color",
  },{
    id: "",
    question: "Which CSS property and value is used to center an element?",
    options: ["text-align:center;", "align:center", "text-align:middle", "align:middle"],
    correct: "text-align:center;",
  }, {
    id: "",
    question: "What are the valid values of text-align property?",
    options: ["left, middle, right", "left, center, right", "left, middle, right, justify", "left, center, right, justify"],
    correct: "left, center, right, justify",
  }, {
    id: "",
    question: "Which CSS property is used to specify the indentation of the first line of a text?",
    options: ["text-align", "padding-left", "margin-left", "text-indent"],
    correct: "text-indent",
  },{
    id: "",
    question: "Which CSS property is used to specify the space between the characters for a paragraph in a text?",
    options: ["p{letter-spacing: 5px;}", "p{letter-space: 5px;}", "p{text-spacing: 5px;}", "p{letter-distance: 5px;}"],
    correct: "p{letter-spacing: 5px;}",
  }, {
    id: "",
    question: "Which CSS property is used to specify the space between lines for a paragraph in a text?",
    options: ["p{line-space: 2px;}", "p{line-spacing: 2px;}", "p{line-padding: 2px;}", "p{line-height: 2px;}"],
    correct: "p{line-height: 2px;}",
  }, {
    id: "",
    question: "Which CSS property is used to specify the space between the words for a paragraph in a text?",
    options: ["p{word-spacing: 10px;}", "p{word-padding: 10px;}", "p{word-height: 10px;}", "p{character-spacing: 10px;}"],
    correct: "p{word-spacing: 10px;}",
  },{
    id: "",
    question: "Which CSS property adds shadow to text?",
    options: ["p{text-shadow: 1px 2px blue;}", "p{content-shadow: 1px 2px blue;}", "p{word-shadow: 1px 2px blue;}", "p{text-outline: 1px 2px blue;}"],
    correct: "p{text-shadow: 1px 2px blue;}",
  }, {
    id: "",
    question: "Which CSS property is used to specify uppercase and lowercase letters in a text?",
    options: ["text-transform", "text-case", "case", "text-casing"],
    correct: "text-transform",
  }, {
    id: "",
    question: "Which is the correct CSS statement to capitalize the first letter of each word?",
    options: ["text-transform: uppercase;", "text-transform: capitalize;", "text-transform: sentence;", "None of these"],
    correct: "text-transform: capitalize;",
  },{
    id: "",
    question: "What are the valid values of text-transform property?",
    options: ["uppercase, lowercase, and capitalize", "uppercase, lowercase, capitalize, and sentence", "upper, lower, and capital", "upper, lower, capital, and sentence"],
    correct: "uppercase, lowercase, and capitalize",
  }, {
    id: "",
    question: "What are the valid values of 'text-decoration' property?",
    options: ["overline, line-through, underline, and none", "overline, strike, line-through, underline, and none", "double-line, overline, line-through, underline, and none", "None of these"],
    correct: "overline, line-through, underline, and none",
  }, {
    id: "",
    question: "Which CSS property specifies how to align the last line of a text?",
    options: ["p{text-align: right;}", "p{last-text-align: right;}", "p{text-align-last-line: right;}", "p{text-align-last: right;}"],
    correct: "p{text-align-last: right;}",
  },{
    id: "",
    question: "Which CSS property sets the vertical alignment of an element?",
    options: ["p{vertical-align-text: balseline;}", "p{vertical-vlign: balseline;}", "p{vertical-text-align: balseline;}", "p{vertical-align: balseline;}"],
    correct: "p{vertical-align: balseline;}",
  }, {
    id: "",
    question: "Which CSS property specifies the type of list item marker?",
    options: ["ul{list-style-type: circle;}", "ul{list-style: circle;}", "ul{list-style-circle: circle;}", "ul{list-style-square: circle;}"],
    correct: "ul{list-style-type: circle;}",
  }, {
    id: "",
    question: "Which is the correct CSS statement is used to remove the markers/bullets?",
    options: ["list-style: none;", "list-style-type: 0;", "list-style-type: blank;", "list-style-type: none;"],
    correct: "list-style-type: none;",
  },{
    id: "",
    question: "Which CSS property specifies an image as the list item marker?",
    options: ["list-style-image", "list-style-picture", "list-style-background", "list-style-bgimage"],
    correct: "list-style-image",
  }, {
    id: "",
    question: "Which CSS property specifies if/how an element is displayed?",
    options: ["element-block: block;", "element-display: block;", "display: block;", "block: block;"],
    correct: "display: block;",
  }, {
    id: "",
    question: "Which CSS property specifies the type of positioning method used for an element?",
    options: ["positions: fixed", "text-position: fixed", "positioning: fixed", "position: fixed"],
    correct: "position: fixed",
  },{
    id: "",
    question: "HTML elements are positioned ___ by default.",
    options: ["static", "fixed", "relative", "none"],
    correct: "static",
  }, {
    id: "",
    question: "What are the valid values for 'position' property?",
    options: ["block, none, fixed, absolute, and static", "block, none, fixed, absolute, and static", "static, relative, fixed, absolute, and none", "static, relative, fixed, absolute, and sticky"],
    correct: "static, relative, fixed, absolute, and sticky",
  }, {
    id: "",
    question: "Which CSS property specifies the opacity/transparency of an element?",
    options: ["transparency", "opacity", "transform-opacity", "opacity-all"],
    correct: "opacity",
  },
  
  
  {
    id: "",
    question: "Which of the following is not a front-end technology?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    correct: "SQL",
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