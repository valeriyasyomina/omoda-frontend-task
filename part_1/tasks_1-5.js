
// ===== Task 1 =====
// What will be printed to the console?

var binaryVariable = true;
const index = 0;

for (index = 1; index <= 10; index++) {
  if (index % 2) {
    binaryVariable = false;
  } else {
    binaryVariable = true;
  }
  console.log(`Print index number ${index}. ${binaryVariable ? `Even number.` : `Odd number.`}`)
}
// ==============



// ===== Task 2 =====
// Implement function that returns the amount of unique symbols in a string.
// The input string can't be null or undefined, it will always contain not zero amount of symbols.

// Example 1:
// Input: aaababbcabba
// Output: 3

// Example 2:
// Input: ttddtdtdtdtddd
// Output: 2

function getUniqueSymbolsAmount(inputString) {
  // Your implementation goes here
}
// ==============



// ===== Task 3 =====
// How can we print "Hello, Henry!" to the console log?
const obj = {
  firstName: 'Henry',
};

function printGreeting() {
  console.log(`Hello, ${this.firstName}!`)
}

// ==============


// ===== Task 4 =====
// What is the result of the following code?
setTimeout(() => alert("timeout"));

Promise.resolve()
  .then(() => alert("promise"));

alert("code");
// ==============



// ===== Task 5 =====
// What will be printed to the console and why?
const objectA = {
  c: 10
}

const objectB = {
  c: 10
}

console.log(objectA === objectB)
// ==============



// ===== Task 6 =====
// Count the array's elements sum

const array = [1, 2, 3, 4, 5];

// ==============


// ===== Task 7 =====
// Write the code, that will receive data/response from teh URL.
// The Url = https://example-api.com

// / implementation goes here

// fetch(...)

// ==============




// ===== Task 8 =====
// Implement custom debounce function
// const debouncedFunction = debounce(callback, timeout)
// debouncedFunction(...)
// debouncedFunction(...)

function debounce(callback, timeout) {

}
//