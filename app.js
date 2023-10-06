//! Chapter 26 - 30

//? Q1
// const userInput = +prompt("Enter a positive integer:");

// if (!isNaN(userInput) && userInput > 0) {
//   const roundOff = Math.round(userInput);
//   const floorValue = Math.floor(userInput);
//   const ceilValue = Math.ceil(userInput);

//   document.write("Number: " + userInput);
//   document.write("<br>Round-off Value: " + roundOff);
//   document.write("<br>Floor Value: " + floorValue);
//   document.write("<br>Ceil Value: " + ceilValue);
// } else {
//   alert("Please enter a valid positive integer.");
// }

//? Q2
// const userInput = +(prompt("Enter a negative floating-point number:"));

// if (!isNaN(userInput) && userInput < 0) {
//   const roundOff = Math.round(userInput);
//   const floorValue = Math.floor(userInput);
//   const ceilValue = Math.ceil(userInput);

//   document.write("Number: " + userInput);
//   document.write("<br>Round-off Value: " + roundOff);
//   document.write("<br>Floor Value: " + floorValue);
//   document.write("<br>Ceil Value: " + ceilValue);
// } else {
//   alert("Please enter a valid negative floating-point number.");
// }

//? Q3
// const userInput = +prompt("Enter a number:");

// if (!isNaN(userInput)) {
//   const absoluteValue = Math.abs(userInput);
  
//   document.write(`The absolute value of ${userInput} is ${absoluteValue}`);
// } else {
//   alert("Invalid input. Please enter a valid number.");
// }

//? Q4
// const diceValue = Math.floor(Math.random() * 6) + 1;

// document.write(`Random dice value: ${diceValue}`);

//? Q5

// const randomValue = Math.random();

// const coinValue = randomValue < 0.5 ? "Heads" : "Tails";

// document.write(`Random coin value: ${coinValue}`);

//? Q6
// const randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write(`Random number between 1 and 100: ${randomNumber}`);

//? Q7
// const userInput = prompt("Enter your weight:").toLowerCase();

// const weight = parseFloat(userInput);
// if (!isNaN(weight)) {
//     let unit = "kgs";
    
//     if (userInput.includes("kg") || userInput.includes("kgs")) {
//         unit = "kgs";
//     } else if (userInput.includes("kilogram") || userInput.includes("kilograms")) {
//         unit = "kilograms";
//     }
    
//     document.write(`Your weight is: ${weight} ${unit}`);
// } else {
//     document.write("Invalid input. Please enter a valid weight.");
// }

//? Q8
// const secretNumber = Math.floor(Math.random() * 10) + 1;
// const userInput = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// if (!isNaN(userInput) && userInput >= 1 && userInput <= 10) {
//     if (userInput === secretNumber) {
//         alert("Congratulations! You guessed the secret number.");
//     } else {
//         alert(`Sorry, the secret number was ${secretNumber}. Try again!`);
//     }
// } else {
//     alert("Please enter a valid number between 1 and 10.");
// }

//! Chapter 31 - 34

//? Q1
// const currentDate = new Date();
// const formattedDate = currentDate.toString();
// document.write(formattedDate);

//? Q2
// const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const currentMonthIndex = new Date().getMonth();
// const currentMonthName = monthNames[currentMonthIndex];
// document.write(`Current month: ${currentMonthName}`);

//? Q3
// const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// const currentDayIndex = new Date().getDay();
// const currentDayAbbreviation = dayNames[currentDayIndex];
// alert(`Today is ${currentDayAbbreviation}.`);

//? Q4
// const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const currentDayIndex = new Date().getDay();
// if (currentDayIndex === 6 || currentDayIndex === 0) {
//     alert("It's Fun day");
// } else {
//     alert(`Today is ${dayNames[currentDayIndex]}. It's not Fun day.`);
// }

//? Q5
// const currentDate = new Date();
// const currentDay = currentDate.getDate();
// if (currentDay < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }

//? Q6
// const currentDate = new Date();
// const elapsedMilliseconds = currentDate.getTime();
// const elapsedMinutes = Math.floor(elapsedMilliseconds / 60000);
// document.write("Current date: ", currentDate.toString());
// document.write("<br>Elapsed milliseconds since January 1, 1970: ", elapsedMilliseconds);
// document.write("<br>Elapsed minutes since January 1, 1970: ", elapsedMinutes);


//? Q7
// const currentHour = new Date().getHours();
// if (currentHour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

//? Q8
// const lastDayOf2020 = new Date(2020, 11, 31);
// const laterDate = lastDayOf2020;
// document.write("Later date: ", laterDate.toString());

//? Q9
// const ramadanStartDate = new Date(2023, 3, 22);
// const currentDate = new Date();
// const timeDifference = currentDate - ramadanStartDate;
// const daysPassed = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
// alert(`${daysPassed} days have passed since 1st Ramadan, 2023`);

//? Q10
// const currentDate = new Date();
// const currentHours = currentDate.getHours();
// const currentMinutes = currentDate.getMinutes();
// const oneHourAgoDate = new Date(currentDate);
// oneHourAgoDate.setHours(currentHours - 1);
// document.write(`Current date: ${currentDate.toString()}<br>`);
// document.write(`1 hour ago, it was ${oneHourAgoDate.toString()}`);

//? Q11
// const currentDate = new Date();
// const year100YearsAgo = currentDate.getFullYear() - 100;
// const date100YearsAgo = new Date(currentDate);
// date100YearsAgo.setFullYear(year100YearsAgo);
// alert(`Current date: ${currentDate.toString()}\n100 years back, it was ${date100YearsAgo.toString()}`);

// //? 12
// const age = parseInt(prompt("Please enter your age:"));
// const currentYear = new Date().getFullYear();
// const birthYear = currentYear - age;
// document.write(`Your age is ${age}<br>Your birth year is ${birthYear}`);


//? Q13

// const customerName = prompt("Enter Customer Name:");
// const currentMonth = prompt("Enter Current Month:");
// const numberOfUnits = parseFloat(prompt("Enter Number of Units:"));
// const chargesPerUnit = parseFloat(prompt("Enter Charges per Unit (in PKR):"));
// const latePaymentSurcharge = parseFloat(prompt("Enter Late Payment Surcharge (in PKR):"));

// const netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);

// const grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);

// document.write("<h1>K-Electric Bill</h1>");
// document.write("<p>Customer Name: " + customerName + "</p>");
// document.write("<p>Current Month: " + currentMonth + "</p>");
// document.write("<p>Number of Units: " + numberOfUnits + "</p>");
// document.write("<p>Charges per Unit: PKR " + chargesPerUnit.toFixed(2) + "</p>");
// document.write("<p>Net Amount Payable (within Due Date): PKR " + netAmountPayable + "</p>");
// document.write("<p>Late Payment Surcharge: PKR " + latePaymentSurcharge.toFixed(2) + "</p>");
// document.write("<p>Gross Amount Payable (after Due Date): PKR " + grossAmountPayable + "</p>");