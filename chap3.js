let age = 26;
alert("My age is: " + 26);
// Check if the visitor's number of visits is stored in the browser's localStorage
if(localStorage.getItem("visitCount") === null) {
    // If not, initialize it to 0
    localStorage.setItem("visitCount", 0);
}

// Increment the visit count
let visitCount = parseInt(localStorage.getItem("visitCount")) + 1;
localStorage.setItem("visitCount", visitCount);

// Show an alert box with the number of visits
alert("You have visited this site " + visitCount + " times.");

let birthYear = 1994;
document.write("My birth year is: " + birthYear);

//  Assume the visitor's name, product title, and quantity are obtained from the website's input fields or other sources
let visitorName = "(John Doe)";
let productTitle = "(T-shirt)";
let quantity = 5;

// Construct the message
let message = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.";

//  Show the message in the browser
document.write(message);
