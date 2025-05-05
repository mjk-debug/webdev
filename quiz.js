document.addEventListener("DOMContentLoaded", function () {
  const quizForm = document.getElementById("quizForm");
  const resultContainer = document.getElementById("result");

  quizForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve answers
    const q1 = quizForm.elements["q1"].value.trim().toLowerCase();
    const q2 = quizForm.elements["q2"].value.trim().toLowerCase();
    const q3 = quizForm.elements["q3"].value.trim().toLowerCase();

    // Score tracking
    let score = 0;
    const totalQuestions = 3;

    // Answer key
    const answers = {
      q1: "tim berners-lee",
      q2: "1991",
      q3: "mosaic"
    };

    // Evaluate
    if (q1 === answers.q1) score++;
    if (q2 === answers.q2) score++;
    if (q3 === answers.q3) score++;

    // Display result
    resultContainer.textContent = `You got ${score} out of ${totalQuestions} correct.`;

    // Optional: Scroll to result
    resultContainer.scrollIntoView({ behavior: "smooth" });
  });
});
