//LEVEL 2 
//Question 1
// Using the loop from question 5 above, only log the counter variable if it is an even number.
// Hint: you can use the modulus % operator for this.
var c=0;
for(var j = 5; j < 26; j++) {
    var c=c+1
    var tol=j%2;
    if ( tol < 0.0001){
        console.log('Level 2 Q1 The', c ,'iteration in the loop=', j);
    } 
} 
//  Level 2  Q1 The 2 iteration in the loop= 6          level-2.js:187
//  Level 2 Q1 The 4 iteration in the loop= 8
//  Level 2 Q1 The 6 iteration in the loop= 10
//  Level 2 Q1 The 8 iteration in the loop= 12
//  Level 2 Q1 The 10 iteration in the loop= 14
//  Level 2 Q1 The 12 iteration in the loop= 16
//  Level 2 Q1 The 14 iteration in the loop= 18
//  Level 2 Q1 The 16 iteration in the loop= 20
//  Level 2 Q1 The 18 iteration in the loop= 22
//  Level 2 Q1 The 20 iteration in the loop= 24
//***********************************************************************************
// Question 2- Create a function that logs the sentence "I am a function".
// Assign this function to a variable called innerFunction.
// Create another function called outerFunction that accepts one argument.
// Inside outerFunction, call the argument like you would a function - with parenthesis ().
// Call outerFunction and pass in the innerFunction variable.
var innerFunction = function() {
    console.log("I am a function");
  }

  function outerFunction(oneArg) {
    console.log(oneArg);
  }
  // pass in the first function as an argument
outerFunction(innerFunction); 
// Level 2 Question 2                                   level-2.js:196
// ƒ () {
//   console.log("I am a function");
//   }