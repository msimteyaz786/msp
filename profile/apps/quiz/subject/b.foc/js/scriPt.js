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
    question: "Who is the father of computer?",
    options: ["Charles Babbage", "Steve Jobs", "Tim Berner Lee", "Vint Cerf "],
    correct: "Charles Babbage",
  },
  {
    id: "1",
    question: "The word computer orginated from which language ?",
    options: ["Latin", "Greek", "France", "None of these"],
    correct: "Latin",
  },
  {
    id: "2",
    question: "How many types of generation of computer?",
    options: ["3", "5", "7", "9"],
    correct: "5",
  },
  {
    id: "3",
    question: "A ……………………… is electronic machine",
    options: ["IT", "Computer", "all of them", "modem"],
    correct: "Computer",
  },
  {
    id: "4",
    question: "The time period of 1st generation of computer was from………………………….",
    options: ["1976 – 1989", "1942 – 1956", "1956 – 1964", "1964 – 1976"],
    correct: "1942 – 1956",
  },
  {
    id: "5",
    question: "EDVAC stands for ____________.",
    options: ["Electronic Discrete Variable Automatic Calculator", "Electronic Discrete Variable Automatic Computer", "Electronic Data Variable Automatic Computer ", "Electronic Data Variable Automatic Calculator"],
    correct: "Electronic Discrete Variable Automatic Computer",
  },
  {
    id: "6",
    question: "ENIAC stands for ______.",
    options: ["Electronic Numerical Integrator And Computer", "Electronic Numerical Integrator Automatic Computer", "Electronic Numerical Integrator And Calculator", "Electronic Numerical Integrator Automatic Calculator"],
    correct: "Electronic Numerical Integrator And Computer",
  },
  {
    id: "7",
    question: "Who invented the punch card ?",
    options: ["Charles Babbage", "Semen Korsakov", "Herman Hollerith", "Joseph Marie Jacquard"],
    correct: "Herman Hollerith",
  },
  {
    id: "8",
    question: "Which Electronic components are used in First Generation Computers?",
    options: ["VLSI", "Vacuum Tubes", "Transistors", "Integrated Circuits"],
    correct: "Vacuum Tubes",
  }, 
  {
    id: "9",
    question: "Which Electronic components are used in Second Generation Computers?",
    options: ["VLSI", "Vacuum Tubes", "Transistors", "Integrated Circuits"],
    correct: "Transistors",
  },
  {
    id: "10",
    question: "Which Electronic components are used in Third Generation Computers?",
    options: ["Transistors", "Integrated Circuits", "VLSI", "Vacuum Tubes"],
    correct: "Integrated Circuits",
  }, 
  {
    id: "11",
    question: "Which Electronic components are used in Fourth Generation Computers?",
    options: ["Transistors", "Integrated Circuits", "VLSI Microprocessor", "Vacuum Tubes"],
    correct: "VLSI Microprocessor",
  },
  {
    id: "12",
    question: "Which Electronic components are used in Fifth Generation Computers?",
    options: ["Transistors", "Integrated  Circuits", "Vacuum Tubes", "ULSI Microprocessor"],
    correct: "ULSI Microprocessor",
  },
  {
    id: "13",
    question: "From which language generation operating systems were developd ?",
    options: ["First", "Second", "Third", "Fourth"],
    correct: "Third",
  },
  {
    id: "14",
    question: "What is full form of CPU ?",
    options: ["Computer Processing Unit", "Computer Principle Unit", "Central Processing Unit", "Control Processing Unit"],
    correct: "Central Processing Unit",
  },{
    id: "15",
    question: "Which of the following computer language is written in binary codes only?",
    options: ["C++", "C", "Machine Language", "Pascal"],
    correct: "Machine Language",
  },{
    id: "16",
    question: "Which of the following is not a characteristic of a computer?",
    options: ["Versatility", "Accuracy", "Diligence", "I.Q."],
    correct: "I.Q.",
  },{
    id: "17",
    question: "Which of the following is the smallest unit of data in a computer?",
    options: ["Bit", "KB", "Nibble", "Byte"],
    correct: "Bit",
  },{
    id: "18",
    question: "Which of the following monitor looks like a television and are normally used with non-portable computer systems?",
    options: [" (LED)", "(LCD)", "Cathode Ray Tube (CRT)", "Flat Panel Monitors (FPM)"],
    correct: "Cathode Ray Tube (CRT)",
  },{
    id: "19",
    question: "Which of the following type of computer is mostly used for automatic operations?",
    options: ["Analog", "Digital", "Hybrid", "Remote"],
    correct: "Hybrid",
  },{
    id: "20",
    question: "Which of the following device use positional notation to represent a decimal number?",
    options: ["Pascaline", "Abacus", "Computer", "Calculator"],
    correct: "Abacus",
  },{
    id: "21",
    question: "Which of the following are physical devices of a computer?",
    options: ["Hardware", "Software", "System Software", "Package"],
    correct: "Hardware",
  },{
    id: "22",
    question: "Which of the following can access the server?",
    options: ["Web Client", "User", "Web Browser", "Web Server"],
    correct: "Web Client",
  },{
    id: "23",
    question: "Which of the following is known as the language made up of binary-coded instructions?",
    options: ["High Level", "BASIC", "C", "Machine"],
    correct: "Machine",
  },{
    id: "24",
    question: "These divices provide a means of communication between a computer and outer world.",
    options: ["Input/Output Devices", "Compact", "Storage", "Drivers"],
    correct: "Input/Output Devices",
  },{
    id: "25",
    question: "What does GUI stand for ?",
    options: ["Graphical User Instruction", "Ground User Interface", "General User Instruction", "Graphical User Interface"],
    correct: "Graphical User Interface",
  },{
    id: "26",
    question: "Data entered into a computer is called____________.",
    options: ["input", "output", "text/digit", "none of these"],
    correct: "input",
  },{
    id: "27",
    question: "Data after processing is called____________",
    options: ["calculation", "information ", "situation ", "evaluation "],
    correct: "information",
  },{
    id: "28",
    question: "Hardware is the____________part of a computer.",
    options: ["Logical ", "Physical", "Technical", "Conceptual"],
    correct: "Physical",
  },{
    id: "29",
    question: "The processed results are called__________.",
    options: ["inupt", "output", "text/digit", "none of these"],
    correct: "output",
  },{
    id: "30",
    question: "Benefits of using computer is/are_____________.",
    options: ["Speed, reliable", "storage, versatility", "accuracy", "all of these"],
    correct: "all of these",
  },{
    id: "31",
    question: "Which of the following is the example of software?",
    options: ["Monitor", "Microsoft Windows", "Keyboard", "CD/DVD"],
    correct: "Microsoft Windows",
  },{
    id: "32",
    question: "What is the name of programs that control the computer system ?",
    options: ["Hardware", "Software (OS)", "Keyboard", "Mouse"],
    correct: "Software (OS)",
  },{
    id: "33",
    question: "The brain of computer is also known as___________.",
    options: ["Monitor", "Keyboard", "CPU", "Mouse"],
    correct: "CPU",

  },{
    id: "34",
    question: "Mouse center button is called____________.",
    options: ["Wheeler", "Scroll wheel", "Light wheel", "Control wheel"],
    correct: "Scroll wheel",
  },{
    id: "35",
    question: "The computer can be configured to open folder/program on ________ the icon using mouse.",
    options: ["Single clicking", "double clicking", "both options", "neither"],
    correct: "double clicking",
  },{
    id: "36",
    question: "Mouse is ____________ device",
    options: ["Input", "Output", "Software", "Storage"],
    correct: "Input",
  },{
    id: "37",
    question: "Monitor also known as__________",
    options: ["Input", "Output", "Software", "Storage"],
    correct: "Output",
  },{
    id: "38",
    question: "Example of output device is ____________.",
    options: ["Keyboard", "Mouse", "Scaner", "Monitor"],
    correct: "Monitor",
  },{
    id: "39",
    question: "CPU stands for__________.",
    options: ["Central Population Unit", "Central Processing Unit", "Control Processing Unit", "Central Publishing Unit"],
    correct: "Central Processing Unit",
  },{
    id: "40",
    question: "FDD stands for __________.",
    options: ["Frequency Division Duplex", "Floppy Disk Drive", "Feature Driven Development", "Flight Dynamics Division"],
    correct: "Floppy Disk Drive",
  },{
    id: "41",
    question: "The two keys ‘g’ and ‘h’ on the second row are operated by the ________ of left and right hand, respectively.",
    options: ["Forefinger (Index finger)", "Center Finger", "Ring Finger ", "Thumb"],
    correct: "Forefinger (Index finger)",
  },{
    id: "42",
    question: "What is notepad?",
    options: ["None of these", "Computer virous", "Text editing program", "Type of monitor "],
    correct: "Text editing program",
  },{
    id: "43",
    question: "What is the extension name of Notepad ?",
    options: [".bmp", ".txt", ".doc", ".rtf"],
    correct: ".txt",
  },{
    id: "44",
    question: "What is Short-cut key for ‘Replace’ ?",
    options: ["Ctrl+S", "Ctrl+M", "Ctrl+H", "Ctrl+F"],
    correct: "Ctrl+H",
  },
  {
    id: "45",
    question: "Which option is used to close current windows ?",
    options: ["Alt + F1", "Alt + F2", "Alt + F3", "Alt + F4"],
    correct: "Alt + F4",
    },
  {
    id: "46",
    question: "UNIVAC stands for_______",
    options: ["universal automatic calculator", "Univarsal Automatic Comupter", "Univarsal Native Input Automatic computer"],
    correct: "Univarsal Automatic Comupter",
  },{
    id: "47",
    question: "Buying  and selling goods over web is known as________.",
    options: ["E-Commerce", "Trading", "Hyper Market", "M-commerce"],
    correct: "E-Commerce",
  },{
    id: "48",
    question: "Which of the following is required to host web site?",
    options: ["Web Server", "Mail Server", "Database Server", "Exchange Server"],
    correct: "Web Server",
  },{
    id: "49",
    question: "1 MegaByte (MB) is equal to ________.",
    options: ["1024 Byte", "100 KB", "1024 KB", "1024 GB"],
    correct: "1024 KB",
  },{
    id: "50",
    question: "Which of the following device do you use to save files?",
    options: ["Compact Disc", "Speaker", "Monitor", "Printer"],
    correct: "Compact Disc",
  },{
    id: "51",
    question: "Which protocol is used for browsing data?",
    options: ["TCP", "HTTP", "FTP", "TFTP"],
    correct: "HTTP",
  },{
    id: "52",
    question: "What is the full form of 'HTTP'",
    options: ["Hyper Text Transfer Package", "Hyper Text Transfer Protocol", "Hyper Text Test Program", "None of the above"],
    correct: "Hyper Text Transfer Protocol",
  },{
    id: "53",
    question: "In https the letter 's' stants for_________",
    options: ["Smart", "Secure", "Simple", "Standard"],
    correct: "Secure",
  },{
    id: "54",
    question: "If Your computer display wrong data and time, then you can reset it by using__________.",
    options: ["Write", "Calendar", "Control Pannel", "Write file"],
    correct: "Control Pannel",
  },{
    id: "55",
    question: "CPU itself has following__________components.",
    options: ["Control Unit (CU)", "Memory Unit (MU)", "Arithmetic Logic Unit (ALU)", "All of the above"],
    correct: "All of the above",
  },{
    id: "56",
    question: "Which unit can store instruction, data and intermediate results?",
    options: ["Arithmetic Login Unit", "Control Unit", "Storage/Memory Unit", "None of the above"],
    correct: "Storage/Memory Unit",
  },{
    id: "57",
    question: "CPU controls the operation of all parts of the computer.",
    options: ["True", "False", "Can be True of False", "Can not say"],
    correct: "True",
  },{
    id: "58",
    question: "The term operating system means__________.",
    options: ["The way of computer operator works", "A set of programs which control computer working", "Conversion of high level language to machine language", "All of the above"],
    correct: "A set of programs which control computer working",
  },{
    id: "59",
    question: "Unix, Linux, DOS, Widows are expample of ________________.",
    options: ["Word Processors", "System Programs", "Operating System", "Application Programs"],
    correct: "Operating System",
  },{
    id: "60",
    question: "Who developed the concept of email ?",
    options: ["Arthur C.Clark", "Ray Tomlinson", "Sabir Bhatia", "Bill Gates"],
    correct: "Ray Tomlinson",
  },{
    id: "61",
    question: "What does BCC means in E-mail?",
    options: ["Black Carbon Copy", "Blind Carbon Copy", "Business Computer Card", "Business Computer Center"],
    correct: "Blind Carbon Copy",
  },{
    id: "62",
    question: "The Bare machine of a computer system is called___________.",
    options: ["Firmware", "Software", "Hardware", "All of the above"],
    correct: "Hardware",
  },{
    id: "63",
    question: "What is URL means in Internet?",
    options: ["A type of programming object", "A computer software program", "The address of a document or page on the world wide web (WWW).", "An acronym for unlimited resource for learning"],
    correct: "The address of a document or page on the world wide web (WWW).",
  },{
    id: "64",
    question: "ASCII stands for______________.",
    options: ["Americial Standard Computer Interface Internet", "Americial Standard Code for Infomation Interchange", "Advance Standard Code for Interface Interchage", "American Standard Code for Information Interactivity"],
    correct: "Americial Standard Code for Infomation Interchange",
  },{
    id: "65",
    question: "USB Stands for _____________.",
    options: ["Urgent Sent Bus", "Universal Sent Bit", "Universal Serial Bus", "Ultimate Service Bit"],
    correct: "Universal Serial Bus",
  },{
    id: "66",
    question: "GUI Stans for ________.",
    options: ["Graphical User Interrupt", "Graphical User Interface", "Geographical User Interface", "Geographical Universal Interface"],
    correct: "Graphical User Interface",
  },{
    id: "67",
    question: "SIM Stands for_________, in a Mobile Phone.",
    options: ["Subscriber Identity Module", "Subscriber Internet Model", "Subscriber Internet Module", "Subscriber Identity Memory"],
    correct: "Subscriber Identity Module",
  },{
    id: "68",
    question: "ALU and CU both have special storage locations called___________.",
    options: ["Bus", "Address", "Registers", "Accumulators"],
    correct: "Registers",
  },{
    id: "69",
    question: "A bug in a programme is a/an ________?",
    options: ["Error", "Syntax", "Statement", "None of these"],
    correct: "Error",
  },{
    id: "70",
    question: "Which of the following is not a browser?",
    options: ["Google", "Opera", "Mozila", "Firefox"],
    correct: "Google",
  },{
    id: "71",
    question: "Search Engine is also known as ___________.",
    options: ["Google", "Opera", "Mozila", "Firefox"],
    correct: "Google",
  },{
    id: "72",
    question: "Internet Explorer is a type of_________?",
    options: ["Operatng System", "IP Address", "Compiler", "Browser"],
    correct: "Browser",
  },
  {
    id: "73",
    question: "Part of the CPU, which coordinates all the functions of the computer and other components",
    options: ["Mother Board", "Coordination Board", "Control Unit", "Arthimetic Locig Unit"],
    correct: "Control Unit",
  },
  {
    id: "74",
    question: "Which of the following function keys acts as a keybaord shortcut to rename screen?",
    options: ["F1", "F2", "F3", "F4"],
    correct: "F2",
  }, {
    id: "75",
    question: "Which of the following is the smallest unit of image in a computer screen?",
    options: ["Pixel", "Unit", "Array", "Resolution"],
    correct: "Pixel",
  }, {
    id: "76",
    question: "A computer can not 'boot' of it does not have______.",
    options: ["Operating System", "Loader", "Compiler", "Assembler"],
    correct: "Operating System",
  }, {
    id: "77",
    question: "Microprocessor as Switching Devices for Generation Computer.",
    options: ["First Generation", "Second Generation", "Third Generation", "Fourth Generation"],
    correct: "Fourth Generation",
  }, {
    id: "78",
    question: "The computer using the binary system is called__________.",
    options: ["Analog Computer", "Digital Computer", "Hybrid Computer", "None of these"],
    correct: "Digital Computer",
  }, {
    id: "79",
    question: "Which is the smallest and fastest computer to imitate the working of the brain?",
    options: ["Quantum Computer", "Super Computer", "Param 1000", "IBM Chip"],
    correct: "Quantum Computer",
  }, {
    id: "80",
    question: "Symbolizes the fifth generation of computer?",
    options: ["Micro Processor", "Mini Comupter", "Micro Computer", "Super Computer"],
    correct: "Micro Computer",
  }, {
    id: "81",
    question: "Who is also known as Father of Laptop?",
    options: ["Adam Osborne (Micro)", "Steve Jobs", "Tim Berner Lee", "Vint Cerf "],
    correct: "Adam Osborne (Micro)",
  }, {
    id: "82",
    question: "The world's first electronic computer is____________.",
    options: ["ENIAC", "Univac", "Mark - 1", "None"],
    correct: "ENIAC",
  }, {
    id: "83",
    question: "The credit of the development of Intergrated Circuit Chip goes to",
    options: ["Charles Babbage", "Jack Kilby", "Robert Noyi", "Jack Kilby and Robert Noyi"],
    correct: "Jack Kilby and Robert Noyi",
  }, {
    id: "84",
    question: "What is MS DOS?",
    options: ["Mulitppurpose System - Digital Ofline Sign", "Microsoft Disk Operating System", "Multi-system Operating System", "Microchip Sign Digital System"],
    correct: "Microsoft Disk Operating System",
  }, {
    id: "85",
    question: "Which of the following is used for high speed searching applicattion?",
    options: ["Flash Memory", "Dynamic Addressable Memory", "Dynamic Random Access Memory", "Static Random Access Memory"],
    correct: "Dynamic Addressable Memory",
  }, {
    id: "86",
    question: "Which of the following command is known as three finger salute in computer?",
    options: ["Ctrl + Alt + Delete", "Ctrl + Shift + Escape", "Ctrl + Shift + Enter", "Ctrl + Alt + Arrow key"],
    correct: "Ctrl + Alt + Delete",
  }, {
    id: "87",
    question: "Which device for network layer from the follwing list of devices?",
    options: ["Repeater", "Router", "Application Gateway", "Switch"],
    correct: "Router",
  }, {
    id: "88",
    question: "On which principle does the catch memory work",
    options: ["Position of the data", "Reference position", "State memory", "State of memory and reference"],
    correct: "Reference position",
  }, {
    id: "89",
    question: "What is the needed to boot the computer?",
    options: ["Operating system", "Loader", "Assembler", "Compiler"],
    correct: "Operating system",
  }, {
    id: "90",
    question: "Which of the following order measurement is correct from smallest to largest?",
    options: ["Byte, Megabyte, Kilobyte, Gigabyte", "Byte, Kilobyte, Megabyte, Gigabyte", "Byte, Megabyte, Gigabyte, Kilobyte", "Megabyte, Byte, Gigabyte, Kilobyte"],
    correct: "Byte, Kilobyte, Megabyte, Gigabyte",
  }, {
    id: "91",
    question: "In Windows Internet Explorer, the default font size is:",
    options: ["10", "11", "12", "13"],
    correct: "12",
  }, {
    id: "92",
    question: "Who is the invertor the World Wide Web (WWW)?",
    options: ["Sarje Brin", "Bill Gates", "Steve Jobs", "Tim Berners Lee"],
    correct: "Tim Berners Lee",
  }, {
    id: "93",
    question: "Desktop Comupter, Laptop Computer, Tablets and smartphone_______There are different types of.",
    options: ["Microcomputer", "Super computer", "Mainframe computer", "Mini computer"],
    correct: "Microcomputer",
  }, {
    id: "94",
    question: "Who among the following is called the father of Supercomputing",
    options: ["Ken Thompson", "Seymour's", "Alan Perlis", "Vint Surf"],
    correct: "Seymour's",
  }, {
    id: "95",
    question: "Which of the following is not an operating system option",
    options: ["Linux", "Unix", "Intel", "Windows"],
    correct: "Intel",
  }, {
    id: "96",
    question: "________The main Printed Circuit Board (PCB) in a computer is.",
    options: ["ROM", "CPU", "RAM", "Motherboard"],
    correct: "Motherboard",
  }, {
    id: "97",
    question: "Google was founded in 1998 by Larry Page and ________.",
    options: ["Asargi Brin", "Peter Thiel", "Steve Wozniak", "Elon Musk"],
    correct: "Asargi Brin",
  }, {
    id: "98",
    question: "Which of the following is a supercomputer developed by India?",
    options: ["Param Yuva 2", "Oneshape", "Vengeance", "Pixir"],
    correct: "Param Yuva 2",
  }, 

  {
    id: "99",
    question: "Mother of computer is also known as _______.",
    options: ["Lagy Gaga", "Lady Augusta Ada", "Sumanredhu", "Ishikachabra"],
    correct: "Lady Augusta Ada",
  },
  {
    id: "100",
    question: "Father of modern computer________.",
    options: ["Ted nelson", "Taisikeeder", "Alan Turing", "Charles Babbage"],
    correct: "Alan Turing",
  },
  {
    id: "101",
    question: " First General purpose computer _________.",
    options: ["MARK - 1", "EDVAC", "EDSAC", "ENIAC"],
    correct: "ENIAC",
  },
  {
    id: "102",
    question: "First commercial computer________",
    options: ["MARK - 1", "EDVAC", "UNIVAC", "ENIAC"],
    correct: "UNIVAC",
  },
  {
    id: "103",
    question: "First storage program computer _________.",
    options: ["MARK - 1", "EDVAC", "UNIVAC", "ENIAC"],
    correct: "EDVAC",
  },
  {
    id: "104",
    question: "Keyboard invented by ________. ",
    options: ["Alan turing", "Taisikeeder", "Christopher lathamsholes", "Ted nelson"],
    correct: "Christopher lathamsholes",
  },
  {
    id: "105",
    question: "First e-mail was sent by _____.",
    options: ["Ted nelson", "Ray noorda", "Ray Tomlinson", "Alan turing"],
    correct: "Ray Tomlinson",
  },
  {
    id: "106",
    question: "Analog is a _____ word.",
    options: ["Russian", "Latin", "Greek", "Roman"],
    correct: "Greek",
  },
  {
    id: "107",
    question: "The abacus was invented in ________ in 2400 B.C.",
    options: ["Babylonia", "Japan", "India", "USA"],
    correct: "",
  },
  {
    id: "108",
    question: "_______generation of computer started with using vacumm tubes as the basic components.",
    options: ["First Generation", "Second Generation", "Third Generation", "Fourth Generation"],
    correct: "First Generation",
  },
  {
    id: "109",
    question: "The ______ button moves the cursor to the next line.",
    options: ["Enter", "Tab", "Space bar", "Backspace"],
    correct: "Enter",
  },
  {
    id: "110",
    question: "The period of _______ generation was 1956-1964.",
    options: ["First Generation", "Second Generation", "Third Generation", "Fourth Generation"],
    correct: "Second Generation",
  },
  {
    id: "111",
    question: "Who considered as father of computer?",
    options: ["Charles Babbage", "John Lickert", "M.V Wilkes", "John Mauchy"],
    correct: "Charles Babbage",
  },
  {
    id: "112",
    question: "What is the main electronic component of the first generation compute?",
    options: ["Vaccum tubes", "Transistors", "Microprocessor", "Integrated circuit"],
    correct: "Vaccum tubes",
  },{
    id: "113",
    question: "The processing speed of first generation computers was ______.",
    options: ["millisecond", "microsecond", "nanosecond", "picoseconds"],
    correct: "millisecond",
  },{
    id: "114",
    question: "Which of the following programming language started from second generation?",
    options: ["FORTRAN", "C++", "C", "LISP"],
    correct: "FORTRAN",
  },{
    id: "115",
    question: "The third generation computer was made with _______.",
    options: ["Vaccum tube", "Discrete Components", "IC", "Bio Chips"],
    correct: "IC",
  },{
    id: "116",
    question: "Second generation computers were developed during.",
    options: ["1949 to 1955", "1956 to 1965", "1965 to 1970", "1979 to 1990"],
    correct: "1956 to 1965",
  },{
    id: "117",
    question: "The most common input devices include _______.",
    options: ["Monitor and keyboard", "Monitor and mouse", "Mouse and keyboard", "Printer and mouse"],
    correct: "Mouse and keyboard",
  },{
    id: "118",
    question: "The modern keyboard typically has ______ function keys.",
    options: ["10", "11", "12", "13"],
    correct: "12",
  },{
    id: "119",
    question: "The group of number keys and basic arithmetic operators placed on the left side of a keyboard is called _______.",
    options: ["Number pad", "Note pad", "Number Keys", "Cursor Keys"],
    correct: "Number pad",
  },{
    id: "120",
    question: "The  _______ key helps to access alternate character of each key (e.g. ! by pressing 1, @ by pressing 2, etc.).",
    options: ["shift", "Esc", "arrow", "num lock"],
    correct: "shift",
  },{
    id: "121",
    question: "A second enter key is available in _______ area of keyboard.",
    options: ["Arrow Kyes", "Number Lock", "Function Keys", "Scroll Lock"],
    correct: "Number Lock",
  },{
    id: "122",
    question: "The Insert, Delete, Home, End, Page Up and Page Down keys are placed above _____.",
    options: ["Arrow Kyes", "Number Lock", "Function Keys", "Scroll Lock"],
    correct: "Arrow Kyes",
  },{
    id: "123",
    question: "Which of the following windows do not have start button.",
    options: ["Windows 95", "Windows 8", "Windows 7", "Windows Vista"],
    correct: "Windows 8",
  },{
    id: "124",
    question: "Which of the following Operating systems is better for implementing a Client Server network?",
    options: ["Windows 2000", "Windows 95", "Windows  98", "MS DOS"],
    correct: "Windows 2000",
  },{
    id: "125",
    question: "Which one is the latest release of Windows Client Operating system?",
    options: ["Windows 10", "Windows XP", "Windows 8", "Windows 7"],
    correct: "Windows 10",
  },{
    id: "126",
    question: "Which one is an example for OS? ",
    options: ["Macromedia", "MS Office", "Windows", "Antivirus"],
    correct: "Windows",
  },{
    id: "127",
    question: "Which of the following is not RAM",
    options: ["FLASH", "DRAM", "SRAM", "PRAM"],
    correct: "PRAM",
  },{
    id: "128",
    question: "What type of storage is internal storage?",
    options: ["Primary", "Secondary", "Virtual", "None of these"],
    correct: "Primary",
  },{ 
    id: "129",
    question: "Which medium is used to between CPU and RAM to increase the processing power of CPU?",
    options: ["Virtual Memory", "DRAM", "Flash Memory", "Cache Memory"],
    correct: "Cache Memory",
  },{
    id: "130",
    question: "The data kept in which memory gets lost as soon as the power goes out?",
    options: ["Disc", "RAM", "Flopy", "None of the mentioned"],
    correct: "RAM",
  },
  {
    id: "131",
    question: "Which memory is also called Volatile?",
    options: ["RAM", "ROM", "RAM & ROM", "None of the above"],
    correct: "RAM",
  },{
    id: "132",
    question: "CD what other names are known other than compact discs?",
    options: ["Object Disk", "Project Disc", "Optical Disc", "All of the above"],
    correct: "Optical Disc",
  },{
    id: "133",
    question: "Which of the following is not a type of computer on the basis of operation?",
    options: ["Digital", "Analog", "Hybrid", "Remote"],
    correct: "Remote",
  },{
    id: "134",
    question: "Which of the following type of computer is mostly used for automatic operation?",
    options: ["Digital", "Analog", "Hybrid", "Remote"],
    correct: "Hybrid",
  },{
    id: "135",
    question: "Who invented the punch card?",
    options: ["Charles Babbage", "Semen Korsakov", "Herman Hollerith", "Joseph Marie Jacquard"],
    correct: "Herman Hollerith",
  },{
    id: "136",
    question: "Linux launched its operating system in the year.",
    options: ["1991", "1989", "1999", "1988"],
    correct: "1991",
  },{
    id: "137",
    question: "Which of the services is not provided by system?",
    options: ["Memory Management", "People Management", "Device Management", "Process Management"],
    correct: "People Management",
  },{
    id: "138",
    question: "Thread is a___________.",
    options: ["Heavy Weight Process", "Light Weight Process", "Multi Process", "Input/Output Process"],
    correct: "Light Weight Process",
  },{
    id: "139",
    question: "What else is a command interpreter called?",
    options: ["Prompt", "Kernal", "Shell", "Command"],
    correct: "Shell",
  },{
    id: "140",
    question: "Thread sheduling of operating system programs is done by ____.",
    options: ["Input", "Output", "Operating System", "Memory"],
    correct: "Operating System",
  },{
    id: "141",
    question: "OSS stands for _________.",
    options: ["Open System Service", "Open Source Software", "Open System Software", "Open Synchronized Software"],
    correct: "Open Source Software",
  },{
    id: "142",
    question: "Set of Programs which consist of full documentation.",
    options: ["Software Package", "Utility Software", "System Software", "None of these"],
    correct: "Software Package",
  },{
    id: "145",
    question: "Verfication of loging name and password is known as _________ .",
    options: ["Authentication", "Configuration", "Accessibility", "Logging in"],
    correct: "Authentication",
  },{
    id: "146",
    question: "Which operating system is used in Railway Reservation?",
    options: ["Time Sharing", "Multi Tasking", "Real Time Operating System", "All above mentioned"],
    correct: "All above mentioned",
  },{
    id: "147",
    question: "Which booting OS is loaded into ?",
    options: ["ROM", "Hard Disk", "RAM", "Cache"],
    correct: "RAM",
  },{
    id: "150",
    question: "A Program in execution of computer system is called_____.",
    options: ["Trap", "Process", "Program", "None of above"],
    correct: "Process",
  },{
    id: "151",
    question: "Which of the following is not RAM?",
    options: ["FLASH", "DRAM", "SRAM", "PRAM"],
    correct: "PRAM",
  },{
    id: "152",
    question: "What types of storage devices are used in cell phones?",
    options: ["Cache", "Flash", "ROM", "Buffer"],
    correct: "Flash",
  },{
    id: "153",
    question: "What is the storage in internal storage",
    options: ["Primary", "Secondary", "Auxiliary", "Virtual"],
    correct: "Primary",
  },{
    id: "154",
    question: "What is the storage in external storage",
    options: ["Primary", "Secondary", "Auxiliary", "Virtual"],
    correct: "Secondary",
  },{
    id: "155",
    question: "Which medium is used between CPU and RAM to increase the processing power of CPU?",
    options: ["Virtual Memory", "DRAM", "Flash Memory", "Cache Memory"],
    correct: "Cache Memory",
  },{
    id: "156",
    question: "The data kept in which memory gets lost as soon as the power goes out?",
    options: ["Disc", "RAM", "C.D", "None of these"],
    correct: "RAM",
  },{
    id: "157",
    question: "Which memory is also known as volatile memory",
    options: ["RAM", "ROM", "C.D", "Disc"],
    correct: "RAM",
  }, {
    id: "158",
    question: "CD what other names are known other than compact disc?",
    options: ["Object Disc", "Optical Disc", "Project Disc", "All of the mentioned"],
    correct: "Optical Disc",
  }, {
    id: "159",
    question: "CD what types of Memory?",
    options: ["Inner", "External", "Assistant", "Inner and External"],
    correct: "Assistant",
  }, {
    id: "160",
    question: "________ is not a type of RAM.",
    options: ["Megabyte", "64 Megabyte", "574 Megabyte", "32 Megabyte"],
    correct: "574 Megabyte",
  }, {
    id: "161",
    question: "What is CD ROM used for ?",
    options: ["to read compact disc", "listenning to music", "contrilling digital information", "none of these"],
    correct: "to read compact disc",
  }, {
    id: "162",
    question: "Which of the following is an example of an optical disc?",
    options: ["Digital Versatile Disc", "Magnetic Disc", "Memory Disc", "Data Bus Disks"],
    correct: "Digital Versatile Disc",
  }, {
    id: "163",
    question: "What is a permanent storage device?",
    options: ["Floppy Disk", "Hard Disk", "RAM", "Cache"],
    correct: "Hard Disk",
  }, {
    id: "164",
    question: "What is the computer space called in which data in loaded and worked?",
    options: ["Cache Memory", "CPU", "RAM", "ROM"],
    correct: "RAM",
  }, {
    id: "165",
    question: "Which part of the computer is helpful in storing information?",
    options: ["Monitor", "Disk Drive", "Keyboard", "Printer"],
    correct: "Disk Drive",
  }, {
    id: "166",
    question: "Information stored in RAM is considered volatile, which meand that",
    options: ["Permanently stored there", "Not permanently, but only temporarily", "stored when the power is turned off", "is permanently stored in the CPU device"],
    correct: "Not permanently, but only temporarily",
  }, {
    id: "167",
    question: "Storage to process the next data or instruction to avoid delay",
    options: ["Cache", "Register", "RAP", "CPU"],
    correct: "Cache",
  }, {
    id: "168",
    question: "MS DOS is an example of ___________?",
    options: ["GIF", "TIFF", "CUI", "GUI"],
    correct: "CUI",
  },{
    id: "169",
    question: "What is the full form of CUI?",
    options: ["Character User Interface", "Chat Uniformly Interchange", "Consider Unlisted Informatin", "Checking Unlimited Information"],
    correct: "Character User Interface",
  },{
    id: "170",
    question: "Linux and Windows are the examples_____?",
    options: ["GUI", "CUI", "GIG", "None of these"],
    correct: "GUI",
  },{
    id: "171",
    question: "GUI stands for_________?",
    options: ["Graphics User Inteface", "Graphical User Interface", "Graphics User Interchange", "Graphical User Interchange"],
    correct: "Graphical User Interface",
  },{
    id: "172",
    question: "GUI and CUI are the two types of __________?",
    options: ["Text", "Hardware", "Interface", "Operating System"],
    correct: "Interface",
  },{
    id: "173",
    question: "What is the meaning of 'Booting'?",
    options: ["Switch off", "Removing Errors", "Restarting Computer", "Installing Program"],
    correct: "Restarting Computer",
  },{
    id: "174",
    question: "Turn on the Computer for the first time on a day is called a ______.",
    options: ["Hot Boot", "Cold Boot", "Warm Boot", "Cool Boot"],
    correct: "Cold Boot",
  },{
    id: "175",
    question: "Who is called a supervisor of computer activity?",
    options: ["Memory", "Operating System", "Control Unit", "I/O Devices"],
    correct: "Operating System",
  },{
    id: "176",
    question: "Which software helps the user to do his/her work?",
    options: ["System software", "Application software", "Utility", "None of these"],
    correct: "Application software",
  },{
    id: "177",
    question: "When was the first operating system developed ?",
    options: ["1951", "1950", "1948", "1949"],
    correct: "1950",
  },{
    id: "178",
    question: "Which operating system was developed by an American company Microsoft?",
    options: ["Unix", "Linux", "MS Office", "Windows"],
    correct: "Windows",
  },{
    id: "179",
    question: "When were MS Windows operating system introduced ?",
    options: ["1985", "1992", "1990", "1994"],
    correct: "1985",
  },{
    id: "180",
    question: "Which of the following operating system does not requre a command to run?",
    options: ["All of the above", "Windows", "Kali Linux", "Unix"],
    correct: "Windows",
  },{
    id: "181",
    question: "Most Popular 16-bit operaitn system is?",
    options: ["MS Dos", "Unix", "CP/M", "TRS-Dos"],
    correct: "MS Dos",
  },{
    id: "182",
    question: "The Internet is a system of ________.",
    options: ["Bugs", "Interconnected network", "System software", "Operating system"],
    correct: "Interconnected network",
  },{
    id: "183",
    question: "Setting fonts for the text in document is an example",
    options: ["Formating", "Formula", "Tracking", "tools"],
    correct: "Formating",
  },
  {
    id: "184",
    question: "What is the Windows Explorer",
    options: ["Personal Computer", "Network", "Drive", "File Manager"],
    correct: "File Manager",
  },{
    id: "185",
    question: "What does JAR stand for?",
    options: ["jQuery Application Rapid-development", "Java Application Resolution", "Java Archive", "Joint Archive Resolution"],
    correct: "Java Archive",
  },{
    id: "186",
    question: "Which among the following type of computer is also known information as Number crunchier?",
    options: ["Super Computer", "Mini Computer", "Mainframe Computer", "Micro Computer"],
    correct: "Super Computer",
  },{
    id: "187",
    question: "Which among the following organisation developed a SAGA-220 super computer in 2011?",
    options: ["ISRO", "NASA", "C-DAC", "BARC"],
    correct: "ISRO",
  },{
    id: "188",
    question: "Each time you turn on your computer, it will check on the control file",
    options: ["cammand.com, io.sys, msdos.sys", "command.com, date.com, dir.com", "command.com, io.sys", "chkdsk.exe"],
    correct: "cammand.com, io.sys, msdos.sys",
  },{
    id: "189",
    question: "Which among the following options specifies this action: Holding the mouse button down while moving an object of text?",
    options: ["moving", "dragging", "saving", "highlighting"],
    correct: "dragging",
  },{
    id: "190",
    question: "Which of the following has the smallest storage?",
    options: ["Megabyte", "Gigabyte", "Terabyte", "Kilobyte"],
    correct: "Kilobyte",
  },{
    id: "191",
    question: "Inside the CPU cabinet the SATA and PATA cables are connected from Motherboard to ______ .",
    options: ["Floppy Disc", "Hard Disk", "ROM", "RAM"],
    correct: "Hard Disk",
  },{
    id: "192",
    question: "Which of the following is a very high-speed semiconductor memory which can speed up the CPU?",
    options: ["Cache Memory", "Primary Memory", "Secondary Memory", "Main Memory"],
    correct: "Cache Memory",
  },{
    id: "193",
    question: "A register that kepts tracks of the next instruction to be executed is called a/an",
    options: ["Data Register", "Program Counter", "Instruction Register", "Action Register Register"],
    correct: "Program Counter",
  },{
    id: "191",
    question: "What is the shortcut key for the central alignment of a line or text in MS Office",
    options: ["CTRL + E", "CTRL + G", "CTRL + F", "CTRL + R"],
    correct: "CTRL + E",
  },{
    id: "192",
    question: "Which device among the following works as both input and output device?",
    options: ["Printer", "Keyboard", "Scanner", "Network Cards"],
    correct: "Network Cards",
  },{
    id: "193",
    question: "UPC is a commonly used barcode. What is the full form of UPC.",
    options: ["Uniersal Primary Code", "Universal Product Code", "Uniform Product Code", "Uniform Primary Code"],
    correct: "Universal Product Code",
  },{
    id: "194",
    question: "The option provide by most web browsers to save and organize website for later visits is known as______.",
    options: ["History", "Bookmark", "Setting", "Save as"],
    correct: "Bookmark",
  },{
    id: "195",
    question: "A network _______ is the central structure that connects other protions of the network.",
    options: ["Server", "Trunk", "Backbone", "Protocol"],
    correct: "Server",
  },{
    id: "196",
    question: "Which among the following memories is used in Digital Camera?",
    options: ["Flash Memory", "Virtual Memory", "Main Memory", "Cache memory"],
    correct: "Flash Memory",
  },{
    id: "197",
    question: "What is the shortcut key to apply the currency format in Excel ?",
    options: ["CTRL + SHIFT + $", "CTRL + ALT + %", "ALT + SHIFT + &", "ALT + HOME + @"],
    correct: "CTRL + SHIFT + $",
  },{
    id: "198",
    question: "Compilers and interpreters are themselves",
    options: ["High Level Language", "Codes", "Programs", "Low - Level Language"],
    correct: "Programs",
  },
  {
    id: "199",
    question: "A half byte is called a _______.",
    options: ["Nibble", "Byte", "Bit", "Megabyte"],
    correct: "Nibble",
  },


  {
    id: "200",
    question: "What is Booting?",
    options: ["Loading Operating system into memory to make the computer system ready to use", "Defragment the hard disk drive", "Deleting the operating system", "Formating  the hard disk drive"],
    correct: "Loading Operating system into memory to make the computer system ready to use",
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