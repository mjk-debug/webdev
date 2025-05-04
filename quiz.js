// quiz.js - Handles quiz scoring and feedback

document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let score = 0;
  let total = 5;
  let resultHTML = "<h2>Results:</h2>";

  // Q1–Q3: Single-answer (radio)
  for (let i = 1; i <= 3; i++) {
    let answer = document.querySelector(`input[name=q${i}]:checked`);
    if (answer) {
      if (answer.value === "correct") {
        score++;
        resultHTML += `<p>Q${i}: ✅ Correct</p>`;
      } else {
        resultHTML += `<p>Q${i}: ❌ Incorrect</p>`;
      }
    } else {
      resultHTML += `<p>Q${i}: ❌ Not answered</p>`;
    }
  }

  // Q4: Fill-in-the-blank
  let q4 = document.getElementById("q4").value.trim().toLowerCase();
  if (q4 === "var" || q4 === "let" || q4 === "const") {
    score++;
    resultHTML += `<p>Q4: ✅ Correct</p>`;
  } else {
    resultHTML += `<p>Q4: ❌ Incorrect (expected: var, let, or const)</p>`;
  }

  // Q5: Multiple answers (checkboxes)
  let q5 = document.querySelectorAll("input[name=q5]");
  let correctAnswers = 0;
  q5.forEach(cb => {
    if (cb.checked && cb.value === "correct") correctAnswers++;
    if (cb.checked && cb.value === "wrong") correctAnswers--;
  });
  if (correctAnswers === 2) {
    score++;
    resultHTML += `<p>Q5: ✅ Correct</p>`;
  } else {
    resultHTML += `<p>Q5: ❌ Incorrect</p>`;
  }

  // Show result
  resultHTML += `<p><strong>Final Score: ${score}/${total}</strong></p>`;
  resultHTML += score >= 4
    ? `<p style='color:green'><strong>✅ You passed!</strong></p>`
    : `<p style='color:red'><strong>❌ You did not pass. Try again.</strong></p>`;

  document.getElementById("results").innerHTML = resultHTML;
});

function restartQuiz() {
  document.getElementById("quizForm").reset();
  document.getElementById("results").innerHTML = "";
}
