// Prompt the user for two numbers
let num1 = prompt("3");
let num2 = prompt("5");

// Convert the input strings to numbers
num1 = parseFloat(num1);
num2 = parseFloat(num2);

// Perform the addition
let sum = 3 + 5;

// Display the result in the browser
document.write("The sum of " + 3 + " and " + 5 + " is " + sum + "<br>");

    // a. Declare a variable.
    let myVariable= 4;

    // b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
    document.write("Value after variable declaration is: " + myVariable + "<br>");

    // c. Initialize the variable with some number.
    myVariable = 5;

    // d. Show the value of variable in your browser like “Initial value: 5”.
    document.write("Initial value: " + myVariable + "<br>");

    // e. Increment the variable.
    myVariable++;

    // f. Show the value of variable in your browser like “Value after increment is: 6”.
    document.write("Value after increment is: " + myVariable + "<br>");

    // g. Add 7 to the variable.
    myVariable += 7;

    // h. Show the value of variable in your browser like “Value after addition is: ?”.
    document.write("Value after addition is: " + myVariable +"<br>");

     // i. Decrement the variable.
     myVariable--;

     // j. Show the value of variable in your browser like “Value after decrement is: 12”.
     document.write("Value after decrement is: " + myVariable + "<br>");

     // k. Show the remainder after dividing the variable’s value by 3.
     let remainder = myVariable % 3;

     // l. Output : “The remainder is : 0”.
     document.write("The remainder is: " + remainder + "<br>");

     // Store ticket price in a variable
     let ticketPrice = 600;

     // Calculate the cost of buying 5 tickets
     let totalCost = ticketPrice * 5;

     // Output example
     document.write("The cost of buying 5 tickets to a movie is: " + totalCost + " PKR");

      // Function to generate and display multiplication table
      function displayMultiplicationTable(number) {
        document.write("<h2>Multiplication Table of " + number + "</h2>");
        document.write("<table border='1'>");
        for (let i = 1; i <= 10; i++) {
            document.write("<tr>");
            document.write("<td>" + number + " x " + i + "</td>");
            document.write("<td>=</td>");
            document.write("<td>" + (number * i) + "</td>");
            document.write("</tr>");
        }
        document.write("</table>");
    }

    // Example: Display multiplication table of number 4
    displayMultiplicationTable(4);

 // Variables
 let priceItem1 = 50; // Price of item 1
 let priceItem2 = 80; // Price of item 2
 let quantityItem1 = 2; // Ordered quantity of item 1
 let quantityItem2 = 3; // Ordered quantity of item 2
 let shippingCharges = 10; // Shipping charges

 // Calculations
 lettotalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

 // Variables
 let priceitem1 = 10; // Price of item 1
 let priceitem2 = 20; // Price of item 2
 let quantityitem1 = 2; // Ordered quantity of item 1
 let quantityitem2 = 1; // Ordered quantity of item 2
 let shippingcharges = 5; // Shipping charges

 // Calculate total cost
 let totalcost = (priceitem1 * quantityitem1) + (priceitem2 * quantityitem2) + shippingcharges;

 // Display receipt
 document.write("<h3>Receipt</h3>");
 document.write("<p>item 1: " + (priceitem1 * quantityitem1) + "</p>");
 document.write("<p>item 2: " + (priceitem2 * quantityitem2) + "</p>");
 document.write("<p>shipping charges: " + shippingcharges + "</p>");
 document.write("<h4>total cost: " + totalCost + "</h4>");

 // Variables
 let totalMarks = 980; // total marks
 let marksObtained = 804; // Marks obtained

 // Calculate percentage
 let percentage = (marksObtained / totalMarks) * 100;

 // Display result
 document.write("<p>Total Marks: " + totalMarks + "</p>");
 document.write("<p>Marks Obtained: " + marksObtained + "</p>");
 document.write("<h3>Percentage: " + percentage.toFixed(2) + "%</h3>");

// Variables
let usDollars = 10; // Amount in US Dollars
let saudiRiyals = 25; // Amount in Saudi Riyals

// Exchange rates
let usdToPkrRate = 104.80;
let sarToPkrRate = 28;

// Calculate total amount in Pakistani Rupees
let totalPkr = (usDollars * usdToPkrRate) + (saudiRiyals * sarToPkrRate);

// Display result
document.write("total amount in Pakistani Rupees: " + totalPkr + " PKR");

// Initialize a variable with some number
let number = 10;

// Perform arithmetic operations in a single expression
let result = ((number + 5) * 10) / 2;

console.log("Result: result");

// Store the current year in a variable
let currentYear = new Date().getFullYear();

// Store their birth year in a variable
let birthYear = 1990; // Example birth year, you can replace it with the actual birth year

// Calculate their possible ages
let age1 = currentYear - birthYear;
let age2 = age1 - 1;

// Output the ages to the screen
console.log("They are either " + age1 + " or " + age2 + " years old.");

