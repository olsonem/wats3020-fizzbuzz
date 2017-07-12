/* Code for WATS 3020 FizzBuzz Assignment */

let isInteger,
    maxNumber,
    fbResults,
    fbText;


// Initialize a variable `isInteger` to use as a control value for the
// `while` loop. Set the initial value to `false`.
isInteger = false;

// Create a `while` loop so user will be prompted to enter a number until
// they enter a good number. This loop should be controlled by a conditional
// expression that looks at the value of `isSafeInteger`. When `isSafeInteger`
// becomes `true`, the `while` loop should stop looping.
while (!isInteger) {
// In order for the max number to be legit we need to know 1) its an integer, 2) its over zero.
// Inside `while` loop prompt the user for the `maxNumber` value.
  maxNumber = prompt ('Enter a number over zero, must be an integer',20);
  maxNumber = parseInt(maxNumber);
// This is where a alert statement would go to alert the user that their input did 
// not meet the conditions to be legit.
    if (Number.isSafeInteger(maxNumber) && maxNumber > 0) {
        isInteger = true;
    } else{
        alert("you must submit an integer");
    }
    
//  If the value of `maxNumber` is suitable, then change the value of
// `isInteger` so the `while` loop stops looping.
  
}


// Initialize the `fbResults` variable to an empty Array
fbResults = [];

// Create a `for` loop that will execute the `maxNumber` of times.
for (let i=1; i <= maxNumber; i++) {
// Create logic inside the `for` loop to calculate FizzBuzz.  This will
// require the use of several conditional statements that use the `%` operator.
// Store the results of this logic in an array called `fbResults`.
  if (i % 15 === 0) {
    fbResults.push('FizzBuzz');
  } else if (i % 3 === 0) {
    fbResults.push('Fizz');
  } else if (i % 5 === 0) {
    fbResults.push('Buzz');
  } else {
    fbResults.push(i);
  }
}

// In preparation for creating the output text for your FizzBuzz results,
// initialize the `fbText` variable to an empty string.

fbText = '';

// Use a `for ... of` loop to concatenate the values from `fbResults`
// into the variable `fbText`.
for (let result of fbResults) {
  fbText = fbText + result + "\n";
}

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;
