// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/
let isMale = "male";
let Gender =
  isMale === "male"
    ? console.log("Gender Is Male")
    : console.log("Gender Is Female");

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let integerOne = 6;
let integerTwo = 2;
integerOne === 8 ||
integerTwo === 8 ||
integerOne + integerTwo === 8 ||
integerOne - integerTwo === 8 ||
integerTwo - integerOne === 8
  ? console.log("Final value is Eight")
  : console.log("Final value is NOT Eight");

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let stringOne = "Spider";
let stringTwo = "Man";
let concatenation = stringOne + stringTwo;
console.log(
  "Concelation of words",
  stringOne,
  "and",
  stringTwo,
  "is",
  concatenation
);

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let frst = 5;
let scnd = 15;
let thrd = 2;
frst > scnd && frst > thrd && scnd > thrd
  ? console.log("Numbers are ordered from highest to lowest:", frst, scnd, thrd)
  : null;

scnd > frst && scnd > thrd && frst > thrd
  ? console.log("Numbers are ordered from highest to lowest:", scnd, frst, thrd)
  : null;

thrd > frst && thrd > scnd && frst > scnd
  ? console.log("Numbers are ordered from highest to lowest:", thrd, frst, scnd)
  : null;

thrd > frst && scnd > frst && thrd > scnd
  ? console.log("Numbers are ordered from highest to lowest:", thrd, scnd, frst)
  : null;

frst > scnd && frst > thrd && thrd > scnd
  ? console.log("Numbers are ordered from highest to lowest:", frst, thrd, scnd)
  : null;

scnd > frst && thrd > frst && scnd > thrd
  ? console.log("Numbers are ordered from highest to lowest:", scnd, thrd, frst)
  : null;

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let firstAverage = 100;
let secondAverage = 30;
let Average = (firstAverage + secondAverage) / 2;
console.log("Average of", firstAverage, "and", secondAverage, "is", Average);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

let first = "long string";
let second = "longer string";
let whichIsLonger =
  first.length > second.length
    ? console.log("First string is longer")
    : console.log("Second string is longer");

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

let code = "five";
code *= 0;
code == 0
  ? console.log("Given Data is Integer")
  : console.log("Given Data is Not Integer");

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let numbr = 200;
let percent = 10;
let percentage = (numbr / 100) * percent;
console.log(percent, "% of number", numbr, "is", percentage);

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

let nmbr = 21;
let oddEven = nmbr % 2;
oddEven == 1 ? console.log("Number is odd") : console.log("Number is even");
