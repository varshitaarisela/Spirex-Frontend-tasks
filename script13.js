
// Get HTML Elements
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const togglePassword = document.getElementById("togglePassword");
const resetBtn = document.getElementById("resetBtn");

const strengthIndicator =
    document.getElementById("strengthIndicator");

const strengthMessage =
    document.getElementById("strengthMessage");

const matchMessage =
    document.getElementById("matchMessage");

// Password Requirement Elements
const lengthCheck = document.getElementById("length");
const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numberCheck = document.getElementById("number");
const specialCheck = document.getElementById("special");

// Function to Update Requirement
function updateRequirement(element, isValid, text) {
    if (isValid) {
        element.innerText = "✓ " + text;
        element.classList.add("valid");
    } else {
        element.innerText = "✗ " + text;
        element.classList.remove("valid");
    }
}

// Function to Check Password Strength
function checkPassword() {

    const value = password.value;

    if (value === "") {
        strengthIndicator.style.width = "0%";
        strengthIndicator.style.backgroundColor = "#ccc";

        strengthMessage.innerText = "Please enter a password";

        updateRequirement(lengthCheck, false, "At least 8 characters");
        updateRequirement(uppercaseCheck, false, "At least one uppercase letter");
        updateRequirement(lowercaseCheck, false, "At least one lowercase letter");
        updateRequirement(numberCheck, false, "At least one number");
        updateRequirement(specialCheck, false, "At least one special character (@, #, !)");

        checkMatch();
        return;
    }

    // Check Password Conditions
    const hasLength = value.length >= 8;
    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecial = /[^A-Za-z0-9]/.test(value);

    // Update Requirement Checklist
    updateRequirement(lengthCheck, hasLength, "At least 8 characters");
    updateRequirement(uppercaseCheck, hasUppercase, "At least one uppercase letter");
    updateRequirement(lowercaseCheck, hasLowercase, "At least one lowercase letter");
    updateRequirement(numberCheck, hasNumber, "At least one number");
    updateRequirement(specialCheck, hasSpecial, "At least one special character (@, #, !)");

    // Calculate Score
    let score = 0;

    if (hasLength) score++;
    if (hasUppercase) score++;
    if (hasLowercase) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;

    // Display Strength
    if (score <= 2) {

        strengthMessage.innerText = "Password Strength: Weak";
        strengthMessage.style.color = "#e53935";

        strengthIndicator.style.width = "33%";
        strengthIndicator.style.backgroundColor = "#e53935";

    } else if (score <= 4) {

        strengthMessage.innerText = "Password Strength: Medium";
        strengthMessage.style.color = "#f39c12";

        strengthIndicator.style.width = "66%";
        strengthIndicator.style.backgroundColor = "#f39c12";

    } else {

        strengthMessage.innerText = "Password Strength: Strong";
        strengthMessage.style.color = "#28a745";

        strengthIndicator.style.width = "100%";
        strengthIndicator.style.backgroundColor = "#28a745";
    }

    checkMatch();
}

// Function to Check Confirm Password
function checkMatch() {

    const pass = password.value;
    const confirm = confirmPassword.value;

    if (confirm === "") {
        matchMessage.innerText = "";
    } else if (pass === confirm) {
        matchMessage.innerText = "✓ Passwords Match";
        matchMessage.style.color = "#28a745";
    } else {
        matchMessage.innerText = "✗ Passwords Do Not Match";
        matchMessage.style.color = "#e53935";
    }
}

// Show / Hide Password
togglePassword.addEventListener("click", function() {

    if (password.type === "password") {
        password.type = "text";
        confirmPassword.type = "text";
        togglePassword.innerText = "Hide";
    } else {
        password.type = "password";
        confirmPassword.type = "password";
        togglePassword.innerText = "Show";
    }

});

// Password Input Event
password.addEventListener("input", checkPassword);

// Confirm Password Input Event
confirmPassword.addEventListener("input", checkMatch);

// Reset Button
resetBtn.addEventListener("click", function() {

    password.value = "";
    confirmPassword.value = "";

    password.type = "password";
    confirmPassword.type = "password";

    togglePassword.innerText = "Show";

    checkPassword();
    checkMatch();

});

// Initial State
checkPassword();
