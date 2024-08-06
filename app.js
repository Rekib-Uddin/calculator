let navbar = document.querySelector("#resultBar");
let buttons = document.querySelectorAll("button");

let currentInput = "";
let result = "";

function updateNavbar(text) {
    navbar.innerText = text;
}

function handleButtonClick(buttonText) {
    if (buttonText === "=") {
        try {
            // Replace 'X' with '*' for multiplication
            const expression = currentInput.replace(/X/g, '*');
            // Evaluate the expression
            result = eval(expression);
            updateNavbar(result);
            currentInput = result; // Update currentInput to be the result for further operations
        } catch (e) {
            // Handle any errors in the expression
            updateNavbar("Error");
            currentInput = ""; // Clear input if there's an error
        }
    } else if (buttonText === "C") {
        // Clear the input
        currentInput = "";
        updateNavbar(currentInput);
    } else {
        // Append button text to the current input
        currentInput += buttonText;
        updateNavbar(currentInput);
    }
}

function values() {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            handleButtonClick(button.innerText);
        });
    });
}

values(); // Call the function to set up event listeners
