
// Get HTML Elements
const countDisplay = document.getElementById("count");

const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseFiveBtn = document.getElementById("increaseFiveBtn");

const message = document.getElementById("message");

// Counter Variable
let count = 0;

// Function to Update Counter
function updateCounter() {

    countDisplay.innerText = count;

    // Change Number Color
    if (count > 0) {
        countDisplay.style.color = "green";
        message.innerText = "Counter is positive!";
    } 
    else if (count < 0) {
        countDisplay.style.color = "red";
        message.innerText = "Counter is negative!";
    } 
    else {
        countDisplay.style.color = "#555";
        message.innerText = "Counter is at zero.";
    }
}

// Increase Counter
increaseBtn.addEventListener("click", function() {
    count++;
    updateCounter();
});

// Decrease Counter
decreaseBtn.addEventListener("click", function() {

    if (count > 0) {
        count--;
        updateCounter();
    } else {
        message.innerText = "Counter cannot go below zero!";
    }

});

// Reset Counter
resetBtn.addEventListener("click", function() {
    count = 0;
    updateCounter();
});

// Increase Counter by 5
increaseFiveBtn.addEventListener("click", function() {
    count += 5;
    updateCounter();
});

// Initial Display
updateCounter();
