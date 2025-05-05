function gradeQuiz() {
  const answers = {
    q1: "c",
    q2: "a",
    q3: "b",
    q4: "b"
  };

  let score = 0;
  let total = Object.keys(answers).length;

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  const result = document.getElementById("result");
  result.textContent = `You scored ${score} out of ${total}`;
}
