let pickedNumber = randomNum(0, 1); // 0 = monthNumbers && 1 = monthNames 
let choosenArray = []; // Here will the choosen array be saved
let correctAnwserIndex = 0;
let correctAnwser = '';

// HTML elements
const equationDisplay = document.getElementById('equationDisplay');
const answerContainer = document.getElementById('answerContainer');
const answerDisplay = document.getElementById('answerDisplay');
const userInput = document.getElementById('userAnwserInput');
const submitAnwserBtn = document.getElementById('submitUserInputBtn');
const newEquBtn = document.getElementById('nextEquBtn');

// Month arrays
const monthNames = ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december'];
const monthNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

window.onload = () => {
    pickArray();
    pickFromArray();
}

// To get the random number
function randomNum(min, max) {
    // return random number and max included
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function pickArray() {
    if (pickedNumber === 1) {
        choosenArray = monthNames;
    } else {
        choosenArray = monthNumbers;
    }
}

function pickFromArray() {
    let pickedIndex = randomNum(0, (choosenArray.length - 1));
    
    if (pickedNumber === 0) {
        equationDisplay.innerHTML = choosenArray[pickedIndex] + ' måned';
    } else {
        equationDisplay.innerHTML = choosenArray[pickedIndex];
    }

    correctAnwserIndex = pickedIndex;
    
    if (pickedNumber === 0) {
        correctAnwser = monthNames[pickedIndex];
    } else {
        correctAnwser = monthNumbers[pickedIndex];
    }
}

submitAnwserBtn.addEventListener('click', () => {
    // Get user input from input field
    var inputValue = userInput.value;

    // Check input
    // If the input field is not empty and is a number
    if (inputValue.length > 0) {
        // A switch to see if the text was a month number or name
        switch (pickedNumber) {
            case 0: 
                if (monthNames.indexOf(inputValue) === correctAnwserIndex) {
                    answerDisplay.innerHTML = `<span class="correct">Rigtigt</span>`;
                } else {
                    answerDisplay.innerHTML = `<span class="incorrect">Det rigtige svar er: <span class="correctAnwser">${correctAnwser}</span></span>`;
                }
            case 1:
                if (monthNames.indexOf(inputValue) === correctAnwserIndex) {
                    answerDisplay.innerHTML = `<span class="correct">Rigtigt</span>`;
                } else {
                    answerDisplay.innerHTML = `<span class="incorrect">Det rigtige svar er: <span class="correctAnwser">${correctAnwser}</span></span>`;
                }
            default:
                break;
        }

        // Show container
        answerContainer.style.visibility = 'visible';

        // AutoFocus on the "OK" button
        newEquBtn.focus();
    }

    if (inputValue.length == 0) {
        // Autofocus on the input field
        userInput.focus();
    }
});

userInput.addEventListener('keyup', (event) => {
    // If user had typed something into the input field, then can the user git ENTER to check anwser
    if (event.keyCode === 13 && userInput.value.length > 0) {
        // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
        event.preventDefault();
        // Click the button
        submitAnwserBtn.click();
    }
});

newEquBtn.addEventListener('click', () => {
    // Clean the input field
    userInput.value = null;
    // Autofocus on the input field
    userInput.focus();

    // Hide container
    answerContainer.style.visibility = 'hidden';

    pickArray();
    pickFromArray();
});