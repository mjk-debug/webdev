<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Web Quiz</title>
  <link rel="stylesheet" href="style.css" />
  <script src="quiz.js" defer></script>
</head>
<body>
  <header>
    <h1>Web Quiz</h1>
    <nav>
      <ul class="nav">
        <li><a href="index.html">Home</a></li>
        <li><a href="beginnings.html">The Beginning</a></li>
        <li><a href="browsers.html">Web Browsers</a></li>
        <li><a href="quiz.html">Quiz</a></li>
        <li><a href="references.html">References</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="content">
      <h2>Test Your Web Knowledge</h2>
      <form id="quizForm">
        <div class="form-group">
          <label for="q1">1. Who invented the World Wide Web?</label>
          <input type="text" id="q1" name="q1" placeholder="Your answer..." required />
        </div>

        <div class="form-group">
          <label for="q2">2. What does HTML stand for?</label>
          <input type="text" id="q2" name="q2" placeholder="Your answer..." required />
        </div>

        <div class="form-group">
          <label for="q3">3. What was the name of the first graphical browser?</label>
          <input type="text" id="q3" name="q3" placeholder="Your answer..." required />
        </div>

        <div class="form-group">
          <label for="q4">4. What protocol is used to transfer web pages?</label>
          <input type="text" id="q4" name="q4" placeholder="Your answer..." required />
        </div>

        <div class="form-group">
          <label for="q5">5. Which browser is currently the most widely used?</label>
          <input type="text" id="q5" name="q5" placeholder="Your answer..." required />
        </div>

        <button type="submit" class="submit-btn">Submit Quiz</button>
        <div id="result" class="quiz-result"></div>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 Web Development Project</p>
  </footer>
</body>
</html>
