
const redBtn = document.getElementById("redBtn");
const greenBtn = document.getElementById("greenBtn");
const blueBtn = document.getElementById("blueBtn");
const yellowBtn = document.getElementById("yellowBtn");
const randomBtn = document.getElementById("randomBtn");
const resetBtn = document.getElementById("resetBtn");

const colorName = document.getElementById("colorName");
const colorCode = document.getElementById("colorCode");

// Original Background Color
const originalColor = "#F3F0FF";

// Function to Change Background
function changeColor(name, color) {
    document.body.style.backgroundColor = color;

    colorName.innerText = name;
    colorCode.innerText = color;
}

// Red Button
redBtn.addEventListener("click", function() {
    changeColor("Red", "#e53935");
});

// Green Button
greenBtn.addEventListener("click", function() {
    changeColor("Green", "#28a745");
});

// Blue Button
blueBtn.addEventListener("click", function() {
    changeColor("Blue", "#1976d2");
});

// Yellow Button
yellowBtn.addEventListener("click", function() {
    changeColor("Yellow", "#fbc02d");
});

// Random Color Button
randomBtn.addEventListener("click", function() {
    const randomColor = "#" + Math.floor(
        Math.random() * 16777215
    ).toString(16).padStart(6, "0");

    changeColor("Random Color", randomColor);
});

// Reset Button
resetBtn.addEventListener("click", function() {
    changeColor("Default", originalColor);
});
