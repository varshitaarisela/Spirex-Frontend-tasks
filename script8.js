
const quizForm = document.getElementById("quizForm");
const message = document.getElementById("message");
const result = document.getElementById("result");
const restartBtn = document.getElementById("restartBtn");

// Correct Answers
const answers = {
    q1: "b",
    q2: "c",
    q3: "a",
    q4: "d",
    q5: "b"
};

// Submit Quiz Event
quizForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let score = 0;
    let answered = 0;

    // Check Answers
    for (let question in answers) {
        const selected = document.querySelector(
            `input[name="${question}"]:checked`
        );

        if (selected) {
            answered++;

            if (selected.value === answers[question]) {
                score++;
            }
        }
    }

    // Check if all questions are unanswered
    if (answered === 0) {
        message.innerText = "Please select at least one answer!";
        result.innerText = "";
        return;
    }

    message.innerText = "";

    // Display Score
    result.innerText = `Your Score: ${score}/5`;

    // Display Result Message
    if (score >= 4) {
        result.innerText += " - Excellent! 🎉";
    } else if (score >= 2) {
        result.innerText += " - Good job! Keep practicing!";
    } else {
        result.innerText += " - Keep learning and try again!";
    }

    // Show Restart Button
    restartBtn.style.display = "block";
});

// Restart Quiz Event
restartBtn.addEventListener("click", function() {
    quizForm.reset();

    message.innerText = "";
    result.innerText = "";

    restartBtn.style.display = "none";
});
