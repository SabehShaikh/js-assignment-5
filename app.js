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

var students = ["Sabeh", "Hamza", "Haroon"];
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

document.write("Updated colors are: " + colors + "<br>");

// Question 10
// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

document.write("<h4> Question 10 </h4>")
// // An array of student scores
var studentScores = [88, 95, 72, 90, 85];
document.write("Scores of students :" + " " + studentScores + "<br>")

studentScores.sort(function (a, b) {
    return a - b;
});

// Display the sorted array
document.write("Student scores in ascending order: " + studentScores + "<br>");

// Question 11
// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities array.

document.write("<h4> Question 11 </h4>")

var cities = ["Karachi", "Lahore", "Peshawar", "Islamabad", "Quetta", "Multan"];
document.write("City List : " + "<br>" + cities + "<br>")

var selectedCities = cities.slice(3, 5)
document.write("Selected Cities List : " + "<br>" + selectedCities + "<br>");

// 12. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");

document.write("<h4> Question 12 </h4>");
document.write("Array: " + arr + "<br>");
document.write("Single String: " + singleString + "<br>");

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. 
// (FIFO-First In First Out)
document.write("<h4> Question 13 </h4>");
document.write("<h5> Using FIFO Method </h5>");
var queue = [];

// Stores values One by One
queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printor");
queue.push("Monitor");

document.write("Devices are :" + " " + queue + "<br>");

// remove elements from the beginning of the queue using shift()
var firstItem = queue.shift();
var secondItem = queue.shift();
var thirdItem = queue.shift();
var fourthItem = queue.shift();

document.write("Out :" + "<br>" + firstItem + "<br>");
document.write("Out :" + "<br>" + secondItem + "<br>");
document.write("Out :" + "<br>" + thirdItem + "<br>");
document.write("Out :" + "<br>" + fourthItem + "<br>");

// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order.
//(Last In- First Out)

document.write("<h4> Question 14 </h4>");

document.write("<h5> Using LIFO Method </h5>");
var fruits = [];

// Stores values One by One
fruits.push("Apple");
fruits.push("Cherry");
fruits.push("Mango");
fruits.push("Banana");

document.write("Fruits are :" + " " + fruits + "<br>");

// remove elements from the end of the queue using pop()
var lastItem = fruits.pop();
var secondLastItem = fruits.pop();
var thirdLastItem = fruits.pop();
var fourthLastItem = fruits.pop();

document.write("Out :" + "<br>" + lastItem + "<br>");
document.write("Out :" + "<br>" + secondLastItem + "<br>");
document.write("Out :" + "<br>" + thirdLastItem + "<br>");
document.write("Out :" + "<br>" + fourthLastItem + "<br>");

// Question 15
document.write("<h4> Question 15 </h4>");

// 15. Write a program to store phone manufacturers
// (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your browser using document.write() method:

var phoneManuFacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Create a select element with options
var select = "<select><option>" + phoneManuFacturers.join("</option><option>") + "</option></select>";

// Write the select element to the document
document.write(" <h4> Which Brand phone would you like to choose? </h4>")
document.write(select);

document.write("<h1> ARRAYS AND LOOP </h1>")

document.write("<h2> Chapter 17-20 </h2>")

// Question 01

// 1. Declare and initialize an empty multidimensional array. (Array of arrays)