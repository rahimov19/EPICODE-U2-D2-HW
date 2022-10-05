/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* 1. Numbr - is any digit represanting a number
2. String - any type of informatioin having a symbols, numbers and letters in it.
3. Boolean - type of value that have states variable's true or false state
4. Undefined - is refering that variable is not defined with any other types of data
5. null - is refering that variable has no value 
*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* variable is a container to have some type of data inside */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let sum = 12 + 20;
console.log(sum);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12;
console.log(x);

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe";
console.log(name);

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

x -= 12;
console.log(x);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";
// name2 = "john";
console.log(name1 == name2);
if (name1 == name2) {
  console.log("Both are same");
}

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

x = 5;
if (x === 1) {
  console.log("One");
}
if (x === 2) {
  console.log("Two");
}
if (x === 3) {
  console.log("Three");
}
if (x === 4) {
  console.log("Four");
}
if (x === 5) {
  console.log("Five");
}
if (x === 6) {
  console.log("Six");
}
if (x === 7) {
  console.log("Seven");
}
if (x === 8) {
  console.log("Eight");
}
if (x === 9) {
  console.log("Nine");
}

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

let y = 1;
