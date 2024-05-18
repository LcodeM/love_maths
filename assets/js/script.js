// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    let buttons = this.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!")
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

// Run Game Function
function runGame() {
    
}
// Check Answer Function
function checkAnswer() {

}

// Calculate Correct Answer Function
function calculateCorrectAnswer() {

}

// Increment Score Function
function incrementScore() {

}

// Increment Wrong Answer Function
function incrementWrongAnswer() {

}

// Display Addition Question Function
function displayAdditionQuestion() {

}

// Display Subtract Question Function
function displaySubtractQuestion() {

}

// Display Multiply Question Function
function displayMultiplyQuestion() {

}