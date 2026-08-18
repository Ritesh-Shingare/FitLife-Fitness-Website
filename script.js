console.log("FitLife Javascript is connected");
const heading = document.querySelector("h1");
console.log(heading);
heading.textContent = "Welcome to FitLife!";

// Find the button with JavaScript,start your fitness journey!
const startButton = document.querySelector("#startButton");
const message = document.querySelector("#message");

// Add the click event
function startJourney() {
    message.textContent = "Great choice! Your fitness journey starts today!";
    startButton.textContent = "Journey Started";

}
startButton.addEventListener("click", startJourney);

// Find the elements in JavaScript, Welcome User
const userName = document.querySelector("#userName");
const welcomeButton = document.querySelector("#welcomeButton");
const welcomeMessage = document.querySelector("#welcomeMessage");

function welcomeUser() {

    const name = userName.value.trim();     //.trim() remove unnecessary spaces.
    if (name === "") {
        welcomeMessage.textContent = "Please enter your name";

        welcomeMessage.className = "error-message";
        return;
    }

    welcomeMessage.textContent = `Welcome, ${name}! Let's get fit!`;  //template literals

    welcomeMessage.className = "success-message";

}
welcomeButton.addEventListener("click",welcomeUser);