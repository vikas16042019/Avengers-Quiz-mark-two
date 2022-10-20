var readlineSync = require('readline-sync');
var userName = readlineSync.question("Please Enter your name..")
var score = 0;
console.log("welcome" + userName + "to the quiz on FRIENDS");
console.log("AVENGERS ASSEMBLE !!!");
var question =
  [
    {
      question: "1. Tony Stark is saved from dying in outer space only with the help of who of these? \n \n a. Thor \n b. Carol Danvers \n c. Nick Fury \n  ",
      answer: "b"
    },
    {
      question: "2. The Avengers locate Thanos, post-snap, on a distant planet. What do they do to him? \n \n a. They kill him \n b. They imprision him \n c. Trap him in time and space \n ",
      answer: "a"
    },
    {
      question: "3. Scott Lang claims he was only in the Quantum realm for five hours. In reality, he was trapped for five years \n a. True \n b. False \n",
      answer: "b"
    },
    {
      question: "4. What happens to Thor in the years following the Snap ? \n \n a. He reunites with Jane \n b. He goes to counselling \n c. He gained a lot of weight \n",
      answer: "c"
    },
    {
      question: "5. According to Lang, how many round trips through time can each Avenger make using the Pym Particles at their disposal ? \n \n a. One \n b. Two \n c. Three \n",
      answer: "a"
    },
    {
      question: "6. Going back in time, three of the Infinity Stones are discovered to be in what spot? \n \n a. SHIELD headquarters \n b. New York City \n c. Asgard \n ",
      answer: "b"
    },

  ]

function play(question, answer) {
  console.log("\n");
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("You are correct(+1) !!!")
    score++
  }
  else {
    console.log("You are incorrect(-1) !!!");
    score--
  }
}

for (var i = 0; i < question.length; i++) {
  var currentQuestion = question[i];
  play(currentQuestion.question, currentQuestion.answer);

}
console.log("\n \n")
console.log("Game has finished !!!")
console.log("Your final score is : " + score);
