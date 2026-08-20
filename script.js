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
if (startButton) {
    startButton.addEventListener("click", startJourney);
}


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
if (welcomeButton) {
welcomeButton.addEventListener("click",welcomeUser);
}

const courses = [
    {
        name: "Gym",
        duration: "8 weeks",
        level: "Beginner",
        video: "https://www.youtube.com/embed/DulNz2CkoHI"
    },
    {
        name: "Yoga",
        duration: "6 weeks",
        level: "Beginner",
        video: "https://www.youtube.com/embed/DulNz2CkoHI"
    },
    {
        name: "Cardio",
        duration: "4 weeks",
        level: "Intermediate",
        video: "https://www.youtube.com/embed/DulNz2CkoHI"
    },
    {
        name: "Swimming",
        duration: "8 week",
        level: "Intermediate",
        video: "https://www.youtube.com/embed/DulNz2CkoHI"
    },
    {
        name: "Meditation",
        duration: "4 weeks",
        level: "Beginner",
        video: "https://www.youtube.com/embed/DulNz2CkoHI"
    }
];

const beginnerCourses = courses.filter((course) => {
    return course.level === "Beginner";
});
console.log(beginnerCourses);

const intermediateCourses = courses.filter(
    (course) => course.level === "Intermediate"
);
console.log(intermediateCourses);


console.log(courses);
console.log(courses[0].name);
console.log(courses[4].level);
console.log(courses[2].duration);
console.log(courses.length);


// const courseNames = courses.map(function (course) {
//     return course.duration;
// });
// console.log(courseNames);

// const courseNames = courses.map((course) => {
//     return course.name;
// });
// console.log(courseNames);

const courseNames = courses.map((course) => course.name);
console.log(courseNames);

const courseDetails = courses.map((course) => {
    return `${course.name} - ${course.level} - ${course.duration}`
});
console.log(courseDetails);


const courseContainer = document.querySelector("#courseContainer");

    console.log(courseContainer);

// Generate a course card
if (courseContainer) {
    displayCourses(courses);
}
function displayCourses(courseList) {
    courseContainer.innerHTML = "";

    courseList.forEach((course) => {
        // create and append card
        const card = document.createElement("article");

        card.className ="course-card";

        card.innerHTML = `
        <iframe
        src="${course.video}"
        allowfullscreen
        title="${course.name} Course">
        </iframe>

        <h3>${course.name}</h3>
        <p>Duration:${course.duration}</p>
        <p>Level:${course.level}</p> `;

    courseContainer.appendChild(card);
    });
}

const allCoursesButton = document.querySelector("#allCourses");
const beginnerCoursesButton = document.querySelector("#beginnerCourses");
const intermediateCoursesButton = document.querySelector("#intermediateCourses");
if (allCoursesButton) {
    allCoursesButton.addEventListener("click", () => {
        displayCourses(courses);
    });
}

if (intermediateCoursesButton) {
    intermediateCoursesButton.addEventListener("click", () => {
        const intermediateCourses = courses.filter(
    (course) => course.level === "Intermediate" 
);
displayCourses(intermediateCourses);
});
}

if (beginnerCoursesButton) {
    beginnerCoursesButton.addEventListener("click", () => {
        const beginnerCourses = courses.filter(
            (course) => course.level ==="Beginner"
        );
        displayCourses(beginnerCourses);
    });
}






