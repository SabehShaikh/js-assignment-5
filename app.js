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
// initialize the array with color names
var colors = ["red", "green", "blue"];

// display the array in the browser
document.write("Initial array: " + colors + "<br>");

// ask the user for a color to add to the beginning of the array
var newColor = prompt("Enter a color to add to the beginning of the array:");

// add the new color to the beginning of the array
colors.unshift(newColor);

// display the updated array in the browser
document.write("Updated array: " + colors);
