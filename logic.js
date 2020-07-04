// Create an HTML page and link your JavaScript file
// More information about linking HTML to JavaScript here
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive)
// As a user, when I see if my guess is too high or too low
// As a user, if I guess the number correctly I am notified that I won
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message

// Create an anchor variable that has a random number between one and 100. 

const randomNumber = Math.floor(Math.random() * 101)

//Set a counter at 7 tries
let counter = 7

// Check user input against randomNumber
const highOrLow = () => {
    counter --
    document.getElementById("counter").innerHTML = counter
    let userNum = document.getElementById("userNum").value
    if(counter !== 0) {
        if(userNum > randomNumber) {
            alert("High!")
        } else if (userNum < randomNumber) {
            alert("Low!")
        } else { alert(`You Win! The correct number is ${randomNumber}`)}
    } else { alert("You've run out tries! Game over! ")}
}
