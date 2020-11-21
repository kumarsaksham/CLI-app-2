var readlineSync = require('readline-sync');
var chalk = require('chalk');

var game = "Game of Thrones Quiz";
console.log(chalk.yellowBright.bold.underline.bgGray("*Welcome to " + game.toUpperCase() + "*"));
var userName = readlineSync.question(chalk.blueBright("Player's name? "));
console.log( chalk.magentaBright("Hey " + userName.toUpperCase()+ " let's get started" ));
console.log(chalk.green("************************************************"));
console.log(chalk.blue("General Instructions:"));
console.log(chalk.blue("1. There will be total of 10 Questions."))
console.log(chalk.blue("2. Corresponding to each Quetion, there will be 5 options."))
console.log(chalk.blue("3. Only one option is correct"))
console.log(chalk.green("************************************************"));

console.log();


var score = 0;

var qna = [
  {
    // Q1.
    question: " Which of these characters never served as hand to a king (or queen)?",
    options: ["Ser Davos Seaworth", "Ned Stark", "Tyrion Lannister", "Jorah Mormont"],
    answer: 3, //index of options
  },

  {
    // Q2.
    question: "What is the seat of House Frey?",
    options: ["The Twins", "Harrenhal", "The Eyrie", "Pyke"],
    answer: 0,
  },

  {
    // Q3.
    question: "Which of the following is NOT one of Daenerys's titles?",
    options: ["Khaleesi", "Breaker of Chains", "The Unsullied", "Mother of Dragons"],
    answer: 2,
  },

  {
    // Q4.
    question: "Who is the youngest of Ned Stark’s children?",
    options: ["Arya", "Rickon", "Sansa", "Bran"],
    answer: 1,
  },

  {
    // Q5.
    question: "Who is Jon Snow’s mother?",
    options: ["Cersei Lannister", "Lyanna Stark", "Lysa Arryn", "Daenerys"],
    answer: 1, //index of options
  },

  {
    // Q6.
    question: "Which former ranger of the Night’s Watch led an army of wildlings as the “King-Beyond-the-Wall”?",
    options: ["Craster", "Janos Slynt", "Tormund Giantsbane", "Mance Rayder"],
    answer: 3,
  },

  {
    // Q7.
    question: "What’s the name of the band of assassins that Arya Stark joins in Braavos?",
    options: ["Second Sons", "Faceless Men", "Sons of the Harpy", "Brotherhood Without Banners"],
    answer: 1, //index of options
  },

  {
    // Q8.
    question: "Which of these characters was NOT killed by Arya?",
    options: ["Petyr Baelish", "Tywin Lannister", "Walder Frey", "The Night King"],
    answer: 1,
  },

  {
    // Q9.
    question: "Who brought Jon Snow back from the dead?",
    options: ["The Children of the Forest", "Jaqen H'ghar", "Brandon Stark", "Melisandre"],
    answer: 3, //index of options
  },

  {
    // Q10.
    question: "How are Jon and Daenerys related to each other?",
    options: ["Brother-Sister", "Lovers", "Cousins", "Aunt-Nephew"],
    answer: 3,
  }

];

function quiz(question,options,answer){
  // var userAnswer = readlineSync.question(question);
  console.log( chalk.cyanBright.italic("Q." +question) );
  var userAnswer = readlineSync.keyInSelect(options, chalk.blueBright("Select from the options: "), {cancel: 'None of these'});

  if( userAnswer === answer ){
    console.log(chalk.green("Congrats, Correct answer"));
    score++;
  }
  else{
    console.log(chalk.red("Oops! Wrong answer."));
    console.log(chalk.blueBright("Correct answer is : " + chalk.yellowBright(options[answer])));
  }
  // console.log(chalk.yellowBright("Current score: " + score));
  console.log();
}


for(var i=0; i<qna.length; i++){
  quiz(qna[i].question,qna[i].options, qna[i].answer);
}
console.log(chalk.yellowBright.bold.underline.bgBlue("Your score: " + score + "/10"));
console.log();

//List of High Scorers:
var highScores = [
  {
    user : "Kunal",
    score: 10
  },
  {
    user : "Nidhi",
    score: 9
  }
];

// Printing High Scorers name and score:
console.log(chalk.blue("List of High scorers: "))
for(var i=0; i<highScores.length; i++){
  console.log(chalk.magenta(highScores[i].user + " " + highScores[i].score));
}



console.log(chalk.yellow("If you have beaten any high scorers then do send me your screenshot."))
