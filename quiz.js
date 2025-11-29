// Quiz Questions Array
const quizQuestions = [
  { question: "What is the capital of India?", answer: "new delhi" },
  { question: "2 + 2 = ?", answer: "4" },
  { question: "Full form of HTML?", answer: "hyper text markup language" },
  { question: "Color of sky?", answer: "blue" },
  { question: "JS stands for?", answer: "javascript" }
];

// Normalize function
function normalize(input) {
  return input.trim().toLowerCase();
}

// Main Quiz Function
function runQuiz() {
  let score = 0;
  const total = quizQuestions.length;

  for (let i = 0; i < total; i++) {
    let userInput = prompt(quizQuestions[i].question);

    if (!userInput) {
      alert("Please enter something!");
      i--;
      continue;
    }

    userInput = normalize(userInput);
    let correct = normalize(quizQuestions[i].answer);

    if (userInput === correct) {
      alert("Correct! 🎉");
      score++;
    } else {
      alert("Incorrect ❌ Correct answer: " + quizQuestions[i].answer);
    }
  }

  alert("Quiz Finished 🎉\nYour final score is: " + score + "/" + total);
  console.log("Quiz Finished - Score:", score, "/", total);
}

// Run the quiz
runQuiz();
