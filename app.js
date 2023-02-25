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

var arr = [[]];

//  2. Declare and initialize a multidimensional array representing the following matrix:

let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

console.log(matrix);

// 3. Write a program to print numeric counting from 1 to 10.
document.write("<h3> Question 03 </h3>")

for (var i = 0; i <= 10; i++) {
    document.write(i + "<br>");
}

// 4. Write a program to print multiplication table of any number using for loop.
// Table number & length should be taken as an input from user.

document.write("<h3> Question 04 </h3>")
var tableNumber = prompt("Enter the number for the multiplication table: ");
var tableLength = prompt("Enter the length of the multiplication table: ");

for (var i = 1; i <= tableLength; i++) {
    var result = tableNumber * i;
    document.write(`${tableNumber} x ${i} = ${result}` + "<br>");
}

// 5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 6. Generate the following series in your browser. See example output.

// Counting: 1, 2, 3, ..., 15
var countingSeries = "";
for (let i = 1; i <= 15; i++) {
    countingSeries += i + ", ";
}
console.log("Counting: " + countingSeries.slice(0, -2));

// Reverse counting: 10, 9, 8, ..., 1
var reverseCountingSeries = "";
for (var i = 10; i >= 1; i--) {
    reverseCountingSeries += i + ", ";
}
console.log("Reverse counting: " + reverseCountingSeries.slice(0, -2));

// Even: 0, 2, 4, ..., 20
var evenSeries = "";
for (var i = 0; i <= 20; i += 2) {
    evenSeries += i + ", ";
}
console.log("Even: " + evenSeries.slice(0, -2));

// Odd: 1, 3, 5, ..., 19
var oddSeries = "";
for (var i = 1; i <= 19; i += 2) {
    oddSeries += i + ", ";
}
console.log("Odd: " + oddSeries.slice(0, -2));

// Series: 2k, 4k, 6k, ..., 20k
var series = "";
for (var i = 1; i <= 10; i++) {
    series += i * 2 + "k, ";
}
console.log("Series: " + series.slice(0, -2));


// 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not. Example:
document.write("<h3> Question 07 </h3>")

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search:");

var isItemFound = false;
for (let i = 0; i < A.length; i++) {
    if (A[i] === userInput) {
        isItemFound = true;
        break;
    }
}

if (isItemFound) {
    document.write(userInput + " is available at index " + A.indexOf(userInput) + " in our bakery");
} else {
    document.write("Sorry, " + userInput + " is not available in our bakery");
}

// 8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].
document.write("<h3> Question 08 </h3>")


var A = [24, 53, 78, 91, 12];
var largest = A[0];

for (let i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}

document.write("Array Items: " + A + "<br>");
document.write("The largest number in the array is " + largest);

// 9. Write a program to identify the smallest number in thegiven array.
// A = [24, 53, 78, 91, 12]

document.write("<h3> Question 09 </h3>")

var A = [24, 53, 78, 91, 12];
var smallest = A[0];

for (let i = 1; i > A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}


document.write("Array Items: " + A + "<br>");
document.write("The smallest number in the array is " + smallest);

// 10. Write a program to print multiples of 5 ranging 1 to 100.

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
