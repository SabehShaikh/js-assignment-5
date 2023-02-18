document.write("<h1> ARRAYS </h1>")

document.write("<h2> Chapter 14-16 </h2>")

// Question 01
// 1. Declare an empty array using JS literal notation to store student names in future.

var studentNames = [];

// 2. Declare an empty array using JS object notation to store student names in future.

// var studentNames = newArray();

// 3. Declare and initialize a strings array.

var names = ["Sabeh", "Shaikh", "Abeer", "Ayan"];

// 4. Declare and initialize a numbers array.

var num = [1, 2, 3, 4];

// 5. Declare and initialize a boolean array.

var boolean = [true, false, true, false];

// 6. Declare and initialize a mixed array.

var mixed = ["Sabeh", 1, true, "Hello", 5];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan
// (e.g. SSC, HSC, BCS,  BS, BCOM, MS, M. Phil., PhD).

document.write("<h4> Question 07 </h4>")

var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]

document.write("<ul><li>" + education.join("</li><li>") + "</li></ul>");

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students like:
document.write("<h4> Question 08 </h4>")

var students = ["Sabeh", "Hamza", "Ahsan"];
var score = ["450", "420", "410"];

document.write("Score of " + students[0] + " is " + score[0] + " Percentage is " + (score[0] / 500) * 100 + "<br>");

document.write("Score of " + students[1] + " is " + score[1] + " Percentage is " + (score[1] / 500) * 100 + "<br>");

document.write("Score of " + students[2] + " is " + score[2] + " Percentage is " + (score[2] / 500) * 100 + "<br>");

// Question 09
document.write("<h4> Question 09 </h4>")

// 9. Initialize an array with color names. Display the array elements in your browser.

var colors = ["Red", "Green", "Blue"];
document.write("Colors are :" + " " + colors + "<br>");

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. 
// Display the updated array in your browser.

var newColorStart = prompt("Enter the color name you want to add in the beginning");
colors.unshift(newColorStart);

document.write("New colors after adding in the beginning are :" + " " + colors + "<br>");

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array.
// Display the updated array in your browser.

var newColorEnd = prompt("Enter the color name you want to add in the end");
colors.push(newColorEnd)

document.write("New colors after adding in end are :" + " " + colors + "<br>");

// c. Add two more color to the beginning of the array. Display the updated array in your browser.

colors.unshift("Yellow", "White");

document.write("Updated colors after adding two more colors in the beginning are :" + " " + colors + "<br>");

// d. Delete the first color in the array. Display the updated array in your browser.

colors.shift();
document.write("Updated colors after deleting first color are :" + " " + colors + "<br>");

// e. Delete the last color in the array. Display the updated array in your browser.

colors.pop();
document.write("Updated colors after deleting last color are :" + " " + colors + "<br>");

// f. Ask the user at which index he/she wants to add a color & color name.
// Then add the color to desired position/index. . Display the updated array in your browser.

var userInput = prompt("At which index do you want to add a color, and which color?");
var inputArray = userInput.split(" ");

var index = parseInt(inputArray[0]);
var color = inputArray[1]

colors.splice(index, 0, color);

document.write("Updated colors are: " + colors + "<br>");

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.
// Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

var user = prompt("At which index do you want to delete a color, and how many colors?");
var inputArray = user.split(" ");

var index = parseInt(inputArray[0]);
var numColors = parseInt(inputArray[1]);

colors.splice(index, numColors);

document.write("Updated colors are: " + colors);